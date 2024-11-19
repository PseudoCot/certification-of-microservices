import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgIconComponent } from "../../../../ui/svg-icon.component";
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { HiddenNavRoutes } from '../../../../consts';
import { CommonModule } from '@angular/common';
import { LetDirective } from '../../../../utils/directives/let.directive';

@Component({
  selector: 'app-hidden-nav',
  templateUrl: './hidden-nav.component.html',
  styleUrls: ['./hidden-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SvgIconComponent, CommonModule, RouterModule, LetDirective],
})
export class HiddenNavComponent {

  protected routes = HiddenNavRoutes;

  @Input({ required: true }) opened$!: Observable<boolean>;
  @Input({ required: true }) fullyClosed$!: Observable<boolean>;
  @Input({ required: true }) onCloseButtonClick!: () => void;
}
