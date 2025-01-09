import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-dnd-button',
  templateUrl: './dnd-button.component.html',
  styleUrls: ['./dnd-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
})
export class DndButtonComponent {
  @Input() classes = '';
}
