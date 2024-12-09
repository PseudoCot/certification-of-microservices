import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ModalService } from '../data-access/modal.service';
import { CommonModule } from '@angular/common';
import { ModalCloseDirective } from '../utils/modal-close.directive';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [CommonModule, ModalCloseDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  constructor(@Inject(ModalService) readonly modal$: ModalService) { }
}
