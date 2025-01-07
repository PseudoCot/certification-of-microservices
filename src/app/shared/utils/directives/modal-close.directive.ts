import { DOCUMENT } from "@angular/common";
import { Directive, ElementRef, Inject, Output } from "@angular/core";
import { fromEvent, merge, Observable } from "rxjs";
import { filter, switchMapTo, take } from "rxjs/operators";

@Directive({
  selector: "[appModalClose]",
  standalone: true,
})
export class ModalCloseDirective {
  @Output() appModalClose: Observable<unknown>;

  constructor(
    @Inject(ElementRef) { nativeElement }: ElementRef<HTMLElement>,
    @Inject(DOCUMENT) documentRef: Document
  ) {
    const esc$: Observable<unknown> = fromEvent<KeyboardEvent>(
      documentRef,
      "keydown"
    ).pipe(filter(({ key }) => key === "Escape"));

    const clickOutside$ = fromEvent<MouseEvent>(documentRef, "mousedown").pipe(
      filter(
        ({ target }) =>
          target instanceof Element && !nativeElement.contains(target)
      ),
      switchMapTo(
        fromEvent<MouseEvent>(documentRef, "mouseup").pipe(
          take(1),
          filter(
            ({ target }) =>
              target instanceof Element && !nativeElement.contains(target)
          )
        )
      )
    );

    this.appModalClose = merge(clickOutside$, esc$);
  }
}
