import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { DndButtonComponent } from '../dnd-button/dnd-button.component';
import { RequirementTypes } from '../../../../consts';
import { SvgIconComponent } from '../../../../ui/svg-icon/svg-icon.component';
import { RequirementData } from '../../../../models/data/requirement.data';

@Component({
  selector: 'app-requirement-item',
  standalone: true,
  imports: [SvgIconComponent, DndButtonComponent, CommonModule],
  templateUrl: './requirement-item.component.html',
  styleUrls: ['./requirement-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequirementItemComponent {
  protected _requirementTypes = RequirementTypes;

  @Input({ required: true }) requirementItem!: RequirementData;

  @Input({ required: true }) editMode$!: Observable<boolean>;

  @Output() deleteRequirement$ = new EventEmitter<string>();
}
