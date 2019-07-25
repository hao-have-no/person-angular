import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[ad-host]',
})
export class AdDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
    //注入ViewContainerRef，获取对容器视图的访问权
}
