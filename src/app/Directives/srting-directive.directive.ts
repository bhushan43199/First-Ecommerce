import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appSrtingDirective]'
})
export class SrtingDirectiveDirective {

  constructor(private el: ElementRef, public ngControl: NgControl) { }


  /*   @HostListener('click')onclick()
    {
      this.el.nativeElement.value = this.el.nativeElement.value.toUppercase()
  
    } */

  @HostListener('ngModelChange', ['$event'])

  onInputChange(email) {
    
    var name = email.substring(0, email.lastIndexOf("@"));
    var domain = email.substring(email.lastIndexOf("@") + 1);

    console.log(name);  
    console.log(domain);
    this.el.nativeElement.valueAccessor.writeValue(email);
  }

  ngOnInit() {
    console.log(this.el.nativeElement.value)
  }

}
