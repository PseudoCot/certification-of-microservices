import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputComponent {
  @Input() fieldClasses = '';
  @Input() inputClasses = '';

  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  @Input() type = '';
  @Input() placeholder = '';
  @Input() maxLength = 100;

  @Input() formControlName: string | null = null;
}
