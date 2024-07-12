import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appOr]',
  standalone: true
})
export class OrDirective {
  #isVisible = false;

  constructor(private templateRef: TemplateRef<unknown>, private viewContainer: ViewContainerRef) {}

  @Input() set appOr(conditions: boolean[]) {
    if(!this.#isVisible && conditions.includes(true)) {
      this.#isVisible = true;
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if(this.#isVisible) {
      this.viewContainer.clear();
      this.#isVisible = false;
    }
  }
}
