import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RequirementType } from '../../types/requirement.type';


@Component({
  selector: 'app-requirement-entity',
  templateUrl: './requirement-entity.component.html',
  styleUrls: ['./requirement-entity.component.scss'],
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequirementEntityComponent {
  @Input({ required: true }) type!: RequirementType;
  @Input() value = 'Не указано';
  @Input() classes = '';
}
