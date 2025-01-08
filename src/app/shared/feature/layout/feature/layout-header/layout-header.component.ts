import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgIconComponent } from "../../../../ui/svg-icon/svg-icon.component";
import { RouterModule } from '@angular/router';
import { BurgerButtonComponent } from "../../ui/burger-btn/burger-btn.component";
import { BehaviorSubject, delayWhen, interval, map, of, throttleTime } from 'rxjs';
import { HiddenNavComponent } from "../../ui/hidden-nav/hidden-nav.component";
import { AppRoutes } from '../../../../consts';
import { IconLinkComponent } from "../../../../ui/icon-link/icon-link.component";

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss', '../../../../ui/icon-link/icon-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SvgIconComponent, RouterModule, BurgerButtonComponent, HiddenNavComponent, IconLinkComponent],
})
export class LayoutHeaderComponent {
  protected userLinkPath = AppRoutes.User.Path;

  protected hiddenNav$ = new BehaviorSubject(false);
  protected hiddenNavOpened$ = this.hiddenNav$.pipe(
    throttleTime(1000)
  );
  protected hiddenNavFullyClosed$ = this.hiddenNavOpened$.pipe(
    delayWhen((opened) => opened ? of(opened) : interval(500)),
    map((opened) => !opened),
  );

  protected handleLogoutButtonClick() {
    console.log('logout');
  }
}
