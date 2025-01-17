import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgIconComponent } from "../svg-icon/svg-icon.component";
import { ModalCloseDirective } from '../../utils/directives/modal-close.directive';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss', '../modal-card/modal-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, SvgIconComponent, ModalCloseDirective],
})
export class ModalWindowComponent {
  @Input({ required: true }) show!: boolean;

  @Output() close$ = new EventEmitter<void>();
}
