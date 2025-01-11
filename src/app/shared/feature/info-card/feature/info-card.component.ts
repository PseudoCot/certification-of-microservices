import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { from, map, merge, startWith, Subject } from 'rxjs';
import { RequirementItemComponent } from '../ui/requirement-item/requirement-item.component';
import { ButtonComponent } from '../../../ui/button/button.component';
import { SvgIconComponent } from '../../../ui/svg-icon/svg-icon.component';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [SvgIconComponent, CommonModule, ButtonComponent, RequirementItemComponent],
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss', '../../../ui/card/card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoCardComponent {
  @Input({ required: true }) title!: string;

  @Output() delete$ = new EventEmitter<void>();

  protected editClick$ = new Subject<void>();
  protected cancelChangesClick$ = new Subject<void>();
  @Output() saveChanges$ = new EventEmitter<void>(); // todo

  protected editMode$ = merge(
    from(this.editClick$)
      .pipe(map(() => true)),
    from(this.cancelChangesClick$)
      .pipe(map(() => false)),
    from(this.saveChanges$)
      .pipe(map(() => false))
  ).pipe(
    startWith(false)
  );

  @Output() addRequirement$ = new EventEmitter<void>();
  @Output() deleteRequirement$ = new EventEmitter<string>();


  // constructor()
}
