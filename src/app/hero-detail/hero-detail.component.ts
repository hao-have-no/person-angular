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
    const id=+this.route.snapshot.paramMap.get('id');
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
