import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalWindowComponent } from "../../ui/modal-window/modal-window.component";
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subject } from 'rxjs';
import { ButtonComponent } from "../../ui/button/button.component";
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RequirementItemComponent } from "../info-card/ui/requirement-item/requirement-item.component";
import { SvgIconComponent } from "../../ui/svg-icon/svg-icon.component";
import { RequirementCheckInputComponent } from "../../ui/requirement-check-input/requirement-check-input.component";
import { RequirementDataMocks } from '../../models/mock-data/requirements.data-mock';
import { ServiceDataMocks } from '../../models/mock-data/services.data-mock';

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
  imports: [ModalWindowComponent, CommonModule, ReactiveFormsModule, ButtonComponent, RequirementItemComponent, SvgIconComponent, RequirementCheckInputComponent],
})
export class CreatingModalWindowComponent {
  protected serviceNameControl = new FormControl('', Validators.required);

  protected searchControl = new FormControl('');
  private _searchInputChanges$ = this.searchControl.valueChanges;

  protected servicesData = ServiceDataMocks;
  protected requirementsData = RequirementDataMocks;
  // @Input({ required: true }) servicesData!: ServiceData[];
  // @Input({ required: true }) reqsData!: RequirementData[];

  @Input({ required: true }) title!: string;
  @Input({ required: true }) namePlaceholder!: string;

  @Input({ required: true }) show!: boolean;
  @Output() close$ = new EventEmitter<void>();

  protected templateClick$ = new Subject<void>();
  protected showTemplateSelect$ = new BehaviorSubject(false);
  @Output() templateCreate$ = new EventEmitter<string>();

  protected showArbitrarilyForm$ = new BehaviorSubject(false);
  @Output() arbitrarilyCreate$ = new EventEmitter<string>();
  protected serviceName$ = new BehaviorSubject('');

  protected showRequirementForm$ = new BehaviorSubject(false);

  public handleTemplateButtonClick() {
    this.showTemplateSelect$.next(true);
    this.showArbitrarilyForm$.next(false);
  }

  public handleArbitrarilyButtonClick() {
    this.showTemplateSelect$.next(false);
    this.showArbitrarilyForm$.next(true);
    this.serviceName$.next(this.serviceNameControl.value || '');
  }

  public handleTemplateSaveClick() {
    return '';

  }

  public handleArbitrarilySaveClick() {
    return '';

  }

  protected false$ = new BehaviorSubject(false);
}
