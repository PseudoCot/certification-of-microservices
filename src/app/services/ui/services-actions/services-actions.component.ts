import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-services-actions',
  templateUrl: './services-actions.component.html',
  styleUrls: ['./services-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
})
export class ServicesActionsComponent {
  @Output() checkReadiness$ = new EventEmitter<void>();
  @Output() generatePage$ = new EventEmitter<void>();
}
