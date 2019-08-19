import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Hero } from "../heroes/hero";
import { HeroService} from "../hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
      private route: ActivatedRoute,
      private heroService: HeroService,
      private location: Location
  ) { }

  goBack(): void{
    this.location.back();
  }

  getHero():void{
    //观察者模式
    //声明接口返回的对象（观察者对象），通过subscribe,传入一个观察者对象，这个对象处理接受的信息
    const id=+this.route.snapshot.paramMap.get('id');
    // 该对象具有一个 unsubscribe() 方法。 当调用该方法时，你就会停止接收通知
    this.heroService.getHero(id).subscribe(
        hero=>this.hero =hero
    );
  }

  //更改数据
  save() :void{
    this.heroService.updateHero(this.hero).subscribe(
        //subscript异步操作，相当于ａｎｇｕｌａｒ中的ｐｒｏｍｉｓｓ中的ｔｈｅｎ
        ()=>this.goBack()
    )
  }

  ngOnInit() {
    this.getHero();
  }

}
