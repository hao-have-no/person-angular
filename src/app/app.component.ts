import { Component, OnInit, } from '@angular/core';
import { Router, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private onRouter: string="";
  private NavRouter:any=[
    {
    id:'1',
    name:'列表页',
    url:'/heros',
    },{
    id:'2',
    name:'视图页',
    url:'/dashboard'
    }
  ];


  constructor(private router: Router){
    // this.router.events.subscribe((event)=>{
    //   if (event instanceof NavigationEnd){
    //     console.log(event.url);
    //     this.onRouter = event.url;
    //   }
    // })
  }

  ngOnInit(){
    this.router.events.subscribe((event)=>{
      if (event instanceof NavigationEnd){
        console.log(event.url);
       this.onRouter = event.url;
      }
    })
  }
}
