import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input } from "@angular/core";
import { fromEvent, Observable, Observer, timer } from "rxjs";
import { repeatWhen, takeUntil, tap } from "rxjs/operators";
import { SvgIconComponent } from "../../ui/svg-icon/svg-icon.component";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent<T> {
  @Input({ required: true }) observer!: Observer<T>;

  private mouseEnter$!: Observable<Event>;
  private mouseLeave$!: Observable<Event>;

  protected close$ = timer(3000).pipe(
    takeUntil(this.mouseEnter$),
    repeatWhen(() => this.mouseLeave$),
    tap(this.close.bind(this))
  );

  constructor(
    @Inject(ElementRef) private readonly _elementRef: ElementRef<HTMLElement>
  ) {
    this.mouseEnter$ = fromEvent(this._elementRef.nativeElement, "mouseenter");
    this.mouseLeave$ = fromEvent(this._elementRef.nativeElement, "mouseleave");
  }

  close() {
    this.observer?.complete();
  }
}
