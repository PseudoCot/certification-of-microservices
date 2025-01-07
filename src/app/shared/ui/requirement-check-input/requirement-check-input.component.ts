import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-requirement-check-input',
  templateUrl: './requirement-check-input.component.html',
  styleUrls: ['./requirement-check-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
})
export class RequirementCheckInputComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  @Input() label = '';
  @Input({ required: true }) value!: string;
}
