import { Component, OnInit, } from '@angular/core';
import {Router, ActivatedRoute, NavigationStart, NavigationEnd, RoutesRecognized, RouterOutlet} from "@angular/router";
import { HeroService } from "./hero.service";
import {slideInAnimation} from "./animations";


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
    name:'列表页',
    url:'/heros',
    },{
    id:'2',
    name:'视图页',
    url:'/dashboard'
    },
    {
      id:'3',
      name:'测试页',
      url:'/test'
    },
    {
    id:'4',
    name:'广告',
    url:'/ad'
    },
    {
      id:'5',
      name:'响应式表单',
      url:'/reactive'
    },{
      id:'6',
      name:'响应式表单模版',
      url:'/hero',
    }
  ];


  constructor(
      private router: Router,
      private heroService: HeroService,
              ){　}

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
