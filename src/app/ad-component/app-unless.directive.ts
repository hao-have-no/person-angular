import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class AppUnlessDirective {
  private hasView = false;

  constructor(
      private templateTef:TemplateRef<any>,//获取ng-template中内容，并通过viewContainerRef来访问视图容器
      private viewContainer:ViewContainerRef
  ) { }

  //结构性指令，需要属性去存放boolean条件
  @Input() set appUnless(condition: boolean){
    if (!condition&&!this.hasView){
        this.viewContainer.createEmbeddedView(this.templateTef);//未创建视图，
        // 就告诉视图容器根据模版创建一个内前视图，否则清楚容器并销毁该视图
        this.hasView = true;
    } else if (condition&&this.hasView){
      this.viewContainer.clear();
      this.hasView =false;
    }
  }


}
