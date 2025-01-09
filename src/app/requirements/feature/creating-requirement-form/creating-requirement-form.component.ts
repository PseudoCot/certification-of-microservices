import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalWindowComponent } from "../../../shared/ui/modal-window/modal-window.component";
import { SvgIconComponent } from "../../../shared/ui/svg-icon/svg-icon.component";

@Component({
  selector: 'app-creating-requirement-form',
  templateUrl: './creating-requirement-form.component.html',
  styleUrls: ['./creating-requirement-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ModalWindowComponent, SvgIconComponent],
})
export class CreatingRequirementFormComponent { }
