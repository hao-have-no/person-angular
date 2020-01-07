import { Component, OnInit, } from '@angular/core';
import {Router, NavigationEnd, RoutesRecognized} from "@angular/router";
import { HeroService } from "./services/hero.service";
import { PageService } from "./services/page.service";
import {pageInfo} from "./interface/pageInfo";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  private onRouter: string="";
  private timeStamp: number;
  private time: number=0;
  private NavRouter:any=[
    {
      id:'1',
      name:'响应式表单模版',
      url:'/hero',
    },
    {
      id:'2',
      name:'echarts实现',
      url:'/echart',
    }
  ];


  constructor(
      private router: Router,
      private heroService: HeroService,
      private pageService: PageService
              ){
  　}

  //路由计时器
  private updateRouterTime(tip: string,routeMap: string){
    var self=this;

    if (routeMap === '/')this.router.navigate(['/hero']);

    if (tip === '1'&&routeMap != '/'){
      //当前页面停留时长
      clearInterval(this.timeStamp);
      this.timeStamp=setInterval(function () {
        self.time++;
      },1000);
      const routerName=self.NavRouter.filter(item => item.url === routeMap);
      this.heroService.log(`router to ${routerName[0].name}`,`start time`);
    }

    if (tip === '0'){
      const routerName=self.NavRouter.filter(item => item.url === self.onRouter);
      this.heroService.log(`router from ${routerName.length != 0?routerName[0].name:'初始化页面'}`,`timeStamp:${self.time}`);
      if (routerName.length !=0){
        const userId: string="0000"+Math.ceil(Math.random()*20)+"08";
        const page: string=routerName[0].url;
        const pageName: string=routerName[0].name;
        const stampTime: string=(self.time/60).toFixed(2).toString();
        const info=new pageInfo(userId, page, pageName, stampTime);
        console.log(info);
        this.pageService.addPageInfo(info).subscribe(
            val=>{
              console.log("val",val);
            }
        )
      }
      clearInterval(this.timeStamp);
      this.time = 0;
    }

  }

  ngOnInit(){
    this.router.events.subscribe((event)=>{
      if (event instanceof RoutesRecognized){
        this.updateRouterTime('0',event.url);
      }




      if (event instanceof NavigationEnd){
        this.onRouter = event.url;
        this.updateRouterTime('1',event.url);
      }
    });
  }
}
