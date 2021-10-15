import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
  exportAs: 'repeat, changeText'
})
export class RepeatDirective {

  constructor(private _templateRef: TemplateRef<any>, private _viewContainer: ViewContainerRef) { }

  /*@Input() set appRepeat(count: number) {
    for (var i = 0; i < count; i++) {
      this._viewContainer.createEmbeddedView(this._templateRef);
    }
  }*/

  repeatElement(count: number) {
    for (let i = 0; i < count; i++) {
      this._viewContainer.createEmbeddedView(this._templateRef);
    }
  }

  changeElementText(count: number) {
    for (let i = 0; i < 5; i++) {
      var pElement = document.getElementsByTagName('p');
      if (pElement) {
        let pElementItem = pElement.item(i);
        if (pElementItem) {
          pElementItem.innerHTML = 'Text is changed...';
        }
      }
    }
  }

}
