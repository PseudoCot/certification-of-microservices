import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgIconComponent } from "../../../../ui/svg-icon/svg-icon.component";
import { RouterModule } from '@angular/router';
import { BurgerButtonComponent } from "../../ui/burger-btn/burger-btn.component";
import { BehaviorSubject, delayWhen, interval, map, of, throttleTime } from 'rxjs';
import { HiddenNavComponent } from "../../ui/hidden-nav/hidden-nav.component";
import { AppRoutes } from '../../../../consts';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrl: './layout-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SvgIconComponent, RouterModule, BurgerButtonComponent, HiddenNavComponent],
})
export class LayoutHeaderComponent {

  protected homeLinkPath = AppRoutes.Home.Path;
  protected userLinkPath = AppRoutes.User.Path;
  private _hiddenNavOpened$ = new BehaviorSubject(false);
  protected hiddenNavOpened$ = this._hiddenNavOpened$.pipe(
    throttleTime(1000)
  );
  protected hiddenNavFullyClosed$ = this.hiddenNavOpened$.pipe(
    delayWhen((opened) => opened ? of(undefined) : interval(1000)),
    map((opened) => !opened)
  );

  protected toggleHiddenNav() {
    this._hiddenNavOpened$.next(!this._hiddenNavOpened$.value);
  }

  protected handleLogoutButtonClick() {
    console.log('logout');
  }
}
