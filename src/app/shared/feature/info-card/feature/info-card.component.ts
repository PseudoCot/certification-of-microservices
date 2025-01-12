import { ServicesService } from './../../../data-access/services.service';
import { DestroyService } from './../../../data-access/destroy.service';
import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, from, map, merge, startWith, Subject, takeUntil, tap } from 'rxjs';
import { RequirementItemComponent } from '../ui/requirement-item/requirement-item.component';
import { ButtonComponent } from '../../../ui/button/button.component';
import { SvgIconComponent } from '../../../ui/svg-icon/svg-icon.component';
import { Intersector } from '../../../models/data/intersector.data';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CreatingRequirementFormComponent } from "../../../../requirements/feature/creating-requirement-form/creating-requirement-form.component";
import { SubmitingModalWindowComponent } from "../../../ui/submiting-modal-window/submiting-modal-window.component";
import { RawRequirementData } from '../../../models/data/raw-requirement.data';
import { RequirementTypes } from '../../../consts';
import { DndButtonComponent } from "../ui/dnd-button/dnd-button.component";

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [SvgIconComponent, CommonModule, ButtonComponent, RequirementItemComponent, CreatingRequirementFormComponent, SubmitingModalWindowComponent, ReactiveFormsModule, DndButtonComponent],
  templateUrl: './info-card.component.html',
  styleUrls: [
    './info-card.component.scss',
    '../../../ui/card/card.component.scss',
    '../ui/requirement-item/requirement-item.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoCardComponent implements AfterViewInit {
  protected _requirementTypes = RequirementTypes;
  protected editForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  // @Input({ required: true }) data$?: BehaviorSubject<RequestState<Intersector> | null>;
  protected isRelease = false;

  protected editClick$ = new Subject<void>();
  protected cancelChangesClick$ = new Subject<void>();
  @Output() saveChanges$ = new EventEmitter<void>();

  protected showRequirementCreatingForm$ = new BehaviorSubject(false);
  protected showRequirementDeleteForm$ = new BehaviorSubject<string | null>(null);
  protected showDataDeleteForm$ = new BehaviorSubject(false);

  @Output() createRequirement$ = new EventEmitter<RawRequirementData>();
  @Output() deleteRequirement$ = new EventEmitter<string>();
  @Output() deleteData$ = new EventEmitter<void>();

  protected aa = this.createRequirement$.pipe(
    tap((a) => console.log(a))
  )

  protected editMode$ = merge(
    from(this.editClick$)
      .pipe(map(() => true)),
    from(this.cancelChangesClick$)
      .pipe(map(() => false))
  ).pipe(
    startWith(false)
  );


  constructor(protected servicesService: ServicesService, protected destroyService: DestroyService) {}

  ngAfterViewInit(): void {
    this.servicesService.serviceData$?.pipe(
      tap((data) => {
        if (data?.isDone && data.data) {
          this.initEditFormGroup(data.data)
        }
      }),
      takeUntil(this.destroyService.onDestroy)
    ).subscribe();
  }

  protected temp(req: RawRequirementData) {
    this.showRequirementCreatingForm$.next(false);
    this.createRequirement$.next(req);
  }

  protected handleChangesSaving() {
    if (this.servicesService.serviceData$?.value?.data) {
      const reqId = Object.keys(this.editForm.value)[2]
      const val = this.servicesService.serviceData$.value.data;
      val.name = this.editForm.controls.name.value || '';
      val.description = this.editForm.controls.description.value || '';
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      val.requirements.map((req) => req.id === reqId ? {...req, value: this.editForm.value[reqId] } : req);
      this.servicesService.serviceData$?.next({
        ...this.servicesService.serviceData$.value,
        data: val
      })
      // this.servicesService.serviceData$?.next()
      this.cancelChangesClick$.next()
    }
  }

  private initEditFormGroup(data: Intersector) {
    const reqsControls: Record<string, FormControl<string | null | undefined>> = {};
    data.requirements.forEach((req) => reqsControls[req.id] = new FormControl(req.value))
    this.editForm = new FormGroup({
      name: new FormControl(data.name),
      description: new FormControl(data.description || ''),
      ...reqsControls
    });
  }
}
