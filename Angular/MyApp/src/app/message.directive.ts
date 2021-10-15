import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMessage]',
  exportAs: 'changeMessage'
})
export class MessageDirective {

  @Input('appMessage') message: string = "";

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'cursor', 'pointer');
  }

  /*@HostListener('click') onClick() {
    this.el.nativeElement.innerHTML = this.message;
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }*/

  onClick() {
    this.el.nativeElement.innerHTML = this.message;
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }


}
