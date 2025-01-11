import { RequestState } from './../../types/http/request-state.type';
import { RequirementsService } from './../../data-access/requirements.service';
import { ServicesService } from './../../data-access/services.service';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalWindowComponent } from "../../ui/modal-window/modal-window.component";
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { ButtonComponent } from "../../ui/button/button.component";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SvgIconComponent } from "../../ui/svg-icon/svg-icon.component";
import { ReleasesService } from '../../data-access/releases.service';
import { CreateServiceArbitrarilyDataModel } from '../../models/service-create-arbitrarily/create-service-arbitrarily.data-model';
import { CreateServiceByAnotherDataModel } from '../../models/service-create-by-another/create-service-by-another.data-model';
import { CreateReleaseByAnotherDataModel } from '../../models/release-create-by-another/create-release-by-another.data-model';
import { CreateReleaseArbitrarilyDataModel } from '../../models/release-create-arbitrarily/create-release-arbitrarily.data-model';
import { GetAllReleaseRequirementsDataModel } from '../../models/requirements-get-all-release/get-all-release-requirements.data-model';
import { GetAllServiceRequirementsDataModel } from '../../models/requirements-get-all-service/get-all-service-requirements.data-model';
import { CreatingRequirementFormComponent } from "../../../requirements/feature/creating-requirement-form/creating-requirement-form.component";
import { DataItem } from '../../types/models/data-item.type';

@Component({
  selector: 'app-creating-modal-window',
  templateUrl: './creating-modal-window.component.html',
  styleUrls: [
    './creating-modal-window.component.scss',
    '../../ui/modal-card/modal-card.component.scss',
    '../../ui/select/select.component.scss',
    '../list-card/list-card.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ModalWindowComponent, CommonModule, ReactiveFormsModule, ButtonComponent,
    SvgIconComponent, CreatingRequirementFormComponent],
})
export class CreatingModalWindowComponent {
  protected serviceNameControl = new FormControl('', Validators.required);
  protected sourseSelectControl = new FormControl(null, Validators.required);
  protected requirementsSearchControl = new FormControl('');
  protected requirementsCheckboxGroup = new FormGroup({
    'requirements': new FormArray<FormControl<boolean | null>>([])
  });

  @Input({ required: true }) title!: string;
  @Input({ required: true }) namePlaceholder!: string;
  @Input() parentService?: string;
  @Input({ required: true }) sourcesDataItems!: RequestState<DataItem[]> | null;

  @Input({ required: true }) show!: boolean;
  @Output() close$ = new EventEmitter<void>();

  protected templateClick$ = new Subject<void>();
  protected showTemplateSelect$ = new BehaviorSubject(false);

  protected showArbitrarilyForm$ = new BehaviorSubject(false);

  protected showRequirementForm$ = new BehaviorSubject(false);


  constructor(
    protected servicesService: ServicesService,
    protected releasesService: ReleasesService,
    protected requirementsService: RequirementsService
  ) {
    if (this.parentService) {
      // const model = new GetReleasesDataModel();
      // releasesService.getReleases(model);
      const reqModel = new GetAllReleaseRequirementsDataModel();
      requirementsService.getAllReleasesRequirements(reqModel).pipe(
        tap((res) => {
          this.requirementsCheckboxGroup.controls.requirements.clear();
          res.data?.forEach(
            () => this.requirementsCheckboxGroup.controls.requirements.push(new FormControl(false))
          );
        })
      ).subscribe();
    } else {
      // const model = new GetServicesDataModel();
      // servicesService.getServices(model);
      const reqModel = new GetAllServiceRequirementsDataModel();
      requirementsService.getAllServicesRequirements(reqModel).pipe(
        tap((res) => {
          this.requirementsCheckboxGroup.controls.requirements.clear();
          res.data?.forEach(
            () => this.requirementsCheckboxGroup.controls.requirements.push(new FormControl(false))
          );
        })
      ).subscribe();
    }
  }

  public handleTemplateButtonClick() {
    this.showTemplateSelect$.next(true);
    this.showArbitrarilyForm$.next(false);
  }

  public handleArbitrarilyButtonClick() {
    this.showTemplateSelect$.next(false);
    this.showArbitrarilyForm$.next(true);
  }

  public handleTemplateSaveClick() {
    if (!this.sourseSelectControl.value) {
      return;
    }
    if (this.parentService) {
      const model = new CreateReleaseByAnotherDataModel();
      this._setBasicReleaseDataToModel(model);
      model.sourceReleaseId = this.sourseSelectControl.value;
      this.releasesService.createReleaseByAnother(model);
    } else {
      const model = new CreateServiceByAnotherDataModel();
      this._setBasicServiceDataToModel(model);
      model.serviceId = this.sourseSelectControl.value;
      this.servicesService.createServiceByAnother(model);
    }
    this._clearInputs();
  }

  public handleArbitrarilySaveClick() {
    if (this.parentService) {
      const model = new CreateReleaseArbitrarilyDataModel();
      this._setBasicReleaseDataToModel(model);
      // model.requirements = ;
      this.releasesService.createReleaseArbitrarily(model);
    } else {
      const model = new CreateServiceArbitrarilyDataModel();
      this._setBasicServiceDataToModel(model);
      // model.requirements = ;
      this.servicesService.createServiceArbitrarily(model);
    }
    this._clearInputs();
  }

  private _setBasicServiceDataToModel(model: CreateServiceByAnotherDataModel | CreateServiceArbitrarilyDataModel) {
    model.name = this.serviceNameControl.value || '';
    model.description = 'Заполните описание';
  }

  private _setBasicReleaseDataToModel(model: CreateReleaseByAnotherDataModel | CreateReleaseArbitrarilyDataModel) {
    model.name = this.serviceNameControl.value || '';
    model.semanticVersion = 'Разработка';
    model.serviceId = this.parentService || '';
  }

  private _clearInputs() {
    this.serviceNameControl.setValue('');
    this.sourseSelectControl.setValue(null);
    this.requirementsSearchControl.setValue('');
    this.requirementsCheckboxGroup.get('requirements')?.setValue([]);
  }

  // protected toggleRequirement(requirementData: RequirementData) {
  //   this.seletedRequirements.findIndex(requirementData)
  // }

  protected false$ = new BehaviorSubject(false);
}
