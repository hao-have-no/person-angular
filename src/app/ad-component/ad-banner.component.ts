import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem }      from './ad-item';
import { AdComponent } from './ad.component';

@Component({
    selector: 'app-ad-banner',
    template: `
              <div class="ad-banner-example">
                <h3>Advertisements</h3>
                <ng-template ad-host></ng-template>
                  <!--<ng-template> 元素是动态加载组件的最佳选择，因为它不会渲染任何额外的输出。
                  ａｄhost加载指令，动态插入相关组件
                  -->
              </div>
            `
})
export class AdBannerComponent implements OnInit, OnDestroy {
    @Input() ads: AdItem[];
    currentAdIndex = -1;
    @ViewChild(AdDirective, {static: true}) adHost: AdDirective;
    //通过这种方式，父组件可以和子组件进行沟通
    interval: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit() {
        this.loadComponent();
        this.getAds();
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

    loadComponent() {
        this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
        let adItem = this.ads[this.currentAdIndex];

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
        //解析对应的组件和模版，并置于容器中
        let viewContainerRef = this.adHost.viewContainerRef;
        //清空之前的容器
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        //创建对应的组件并注入视图中
        (<AdComponent>componentRef.instance).data = adItem.data;
    }

    getAds() {
        this.interval = setInterval(() => {
            this.loadComponent();
        }, 3000);
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
