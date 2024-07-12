import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective {
  @Input('appHover') customColor?: string;
  originalColor!: string;

  el: HTMLElement;

  constructor(private elRef: ElementRef) {
    this.el = elRef.nativeElement;
    this.originalColor = this.el.style.backgroundColor;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.style.backgroundColor =  this.customColor ?? 'grey';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.style.backgroundColor = this.originalColor;
  }

}
