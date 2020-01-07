import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
  //指令的ｃｓｓ属性
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string;


  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
    //ElementRef－－Ｄom元素注入器
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.highlightColor||'red');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
