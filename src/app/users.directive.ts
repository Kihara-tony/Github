import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUsers]'
})
export class UsersDirective {
  color(_arg: string): any {
    throw new Error("Method not implemented.");
  }

  constructor(private elem:ElementRef) {

    this.elem.nativeElement.style.color = 'red';
    this.elem.nativeElement.style.border="1px solid green";
  }

}
