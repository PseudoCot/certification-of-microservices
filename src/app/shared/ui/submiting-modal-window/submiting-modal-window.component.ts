import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalWindowComponent } from "../modal-window/modal-window.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-submiting-modal-window',
  templateUrl: './submiting-modal-window.component.html',
  styleUrls: ['./submiting-modal-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ModalWindowComponent, ButtonComponent],
})
export class SubmitingModalWindowComponent {
  @Input({ required: true }) question!: string;
  @Input() submitText = 'Да';
  @Input() dismissText = 'Нет';
  @Input({ required: true }) show!: boolean;

  @Output() close$ = new EventEmitter<void>();
  @Output() submit$ = new EventEmitter<void>();
  @Output() dismiss$ = new EventEmitter<void>();
}
