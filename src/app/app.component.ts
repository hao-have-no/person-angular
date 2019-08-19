import { Component, OnInit, } from '@angular/core';
import {Router, ActivatedRoute, NavigationStart, NavigationEnd, RoutesRecognized, RouterOutlet} from "@angular/router";
import { HeroService } from "./hero.service";
import { PageService } from "./page.service";
import {slideInAnimation} from "./animations";
import {pageInfo} from "./pageInfo";
import { NavigationComponent } from "./navigation/navigation.component";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  private onRouter: string="";
  private timeStamp: number;
  private time: number=0;
  public menuHideTip=false;

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
    },
    {
      id:'7',
      name:'echarts实现',
      url:'/echart',
    },
    {
      id:'8',
      name:"个人中心",
      url:'/person-manager'
    }
  ];


  constructor(
      private router: Router,
      private heroService: HeroService,
      private pageService: PageService
              ){
          var index=0;
          const that=this;
          // setInterval(function(){
          //   index++;
          //   const userId: string="0000"+Math.ceil(Math.random()*20)+"08";
          //   const num=(Math.ceil(Math.random()*6)%6);
          //   const page: string=that.NavRouter[num].url;
          //   const pageName: string=that.NavRouter[num].name;
          //   const stampTime: string=(Math.ceil(Math.random()*100)/10).toFixed(2).toString();
          //   const info=new pageInfo(userId, page, pageName, stampTime);
          //   that.pageService.addPageInfo(info).subscribe(
          //       val=>{
          //         console.log("get",index);
          //       }
          //   )
          // },1000)
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

    console.log(this.menuHideTip);
  }
}
