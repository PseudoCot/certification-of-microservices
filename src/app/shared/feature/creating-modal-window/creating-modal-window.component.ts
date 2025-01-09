import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgIconComponent } from "../../ui/svg-icon/svg-icon.component";
import { ModalWindowComponent } from "../../ui/modal-window/modal-window.component";
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subject } from 'rxjs';
import { ButtonComponent } from "../../ui/button/button.component";

@Component({
  selector: 'app-creating-modal-window',
  templateUrl: './creating-modal-window.component.html',
  styleUrls: ['./creating-modal-window.component.scss', '../../ui/modal-card/modal-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SvgIconComponent, ModalWindowComponent, CommonModule, ButtonComponent],
})
export class CreatingModalWindowComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) namePlaceholder!: string;

  @Input({ required: true }) show$!: BehaviorSubject<boolean>;

  protected templateClick$ = new Subject<void>();
  protected showTemplateSelect$ = new BehaviorSubject(false);
  @Output() templateCreate$ = new EventEmitter<string>();

  @Output() arbitrarilyCreate$ = new EventEmitter<string>();
}
