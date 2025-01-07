import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
})
export class ButtonComponent {
  @Input() classes = '';
  @Input() type = 'button';
  @Input() disabled = false;

  @Output() click$ = new EventEmitter<void>();
}
