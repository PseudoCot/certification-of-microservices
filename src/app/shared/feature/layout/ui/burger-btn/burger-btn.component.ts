import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-burger-btn',
  templateUrl: './burger-btn.component.html',
  styleUrls: ['./burger-btn.component.scss', '../../../../ui/icon-link/icon-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class BurgerButtonComponent {
  @Output() burgerClicked$ = new EventEmitter();

  public handleButtonClick() {
    this.burgerClicked$.emit();
  }
}
