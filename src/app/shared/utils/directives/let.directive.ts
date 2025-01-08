import {
  Directive,
  Inject,
  Input,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";


export class LetContext<T> {
  constructor(private readonly dir: LetDirective<T>) { }

  get appLet(): T {
    return this.dir.appLet;
  }
}


@Directive({
  selector: "[appLet]",
  standalone: true,
})
export class LetDirective<T> {
  @Input({ required: true }) public appLet!: T;

  constructor(
    @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
    @Inject(TemplateRef) templateRef: TemplateRef<LetContext<T>>
  ) {
    viewContainer.createEmbeddedView(templateRef, new LetContext<T>(this));
  }
}
