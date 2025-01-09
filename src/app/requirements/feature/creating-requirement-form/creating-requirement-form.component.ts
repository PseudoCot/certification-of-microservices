import { BehaviorSubject } from 'rxjs';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ModalWindowComponent } from "../../../shared/ui/modal-window/modal-window.component";
import { SvgIconComponent } from "../../../shared/ui/svg-icon/svg-icon.component";
import { ButtonComponent } from "../../../shared/ui/button/button.component";
import { UserDataMock } from '../../../shared/models/mock-data/user.data-mock';

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
  imports: [ModalWindowComponent, SvgIconComponent, ButtonComponent],
})
export class CreatingRequirementFormComponent {
  protected usersData = UserDataMock;

  @Input({ required: true }) show$!: BehaviorSubject<boolean>;
}
