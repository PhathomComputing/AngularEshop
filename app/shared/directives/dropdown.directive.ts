import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';


@Directive({
    selector: '[dropHotspot]'
  })
  export class DropdownDirective {

    constructor(private el: ElementRef, private renderer: Renderer) {}
    closeMenu(){
        console.log("closed");
        //this.isOpen = false;
    }


    @HostBinding('class.open') isOpen = false;
  
    @HostListener('click') toggleOpen() {
      this.isOpen = !this.isOpen;
    }

    @HostListener('mouseout',['$event']) toggleClose(event:any) {
        let menu = this.el.nativeElement.querySelector('ul');
        //console.log(event);
        event.children.addEventListener("mouseout", this.closeMenu());
    }
    
    
  }