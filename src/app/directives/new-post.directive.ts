import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNewPost]'
})
export class NewPostDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.fontWeight = '900'
    this.el.nativeElement.style.color = 'blue'
  }

}
