import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStudent]'
})
export class StudentDirective {

  constructor(private el: ElementRef) {
  
 }

   checkGender(gender: any){
    if(gender == "male"){
      this.el.nativeElement.style.backgroundColor = 'blue';
    } else {
      this.el.nativeElement.style.backgroundColor = 'pink';
    }
   }
}
