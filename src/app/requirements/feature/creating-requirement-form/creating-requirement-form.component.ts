import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalWindowComponent } from "../../../shared/ui/modal-window/modal-window.component";
import { ButtonComponent } from "../../../shared/ui/button/button.component";
import { UserDataMock } from '../../../shared/models/mock-data/user.data-mock';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RawRequirementData } from '../../../shared/models/data/raw-requirement.data';

@Component({
  selector: 'app-creating-requirement-form',
  templateUrl: './creating-requirement-form.component.html',
  styleUrls: [
    './creating-requirement-form.component.scss',
    '../../../shared/ui/modal-card/modal-card.component.scss',
    '../../../shared/ui/requirement-entity/requirement-entity.component.scss',
    '../../../shared/ui/select/select.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ModalWindowComponent, ButtonComponent, ReactiveFormsModule],
})
export class CreatingRequirementFormComponent {
  protected form: FormGroup;
  protected usersData = UserDataMock;

  @Input({ required: true }) show!: boolean;
  @Input() shortFormat = true;

  @Output() close$ = new EventEmitter<void>();
  @Output() submit$ = new EventEmitter<RawRequirementData>();


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      responsible: ['', Validators.required],
    });
  }

  protected submit() {
    this.submit$.next(this.form.value);
  }
}
