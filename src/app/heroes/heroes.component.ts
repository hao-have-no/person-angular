import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
   heros: Hero[];

  constructor(private heroService: HeroService) { }

  getHeros(): void {
    this.heroService.getHeros()
        .subscribe(heros => this.heros = heros);
  }

  add(name: string): void{
    name=name.trim();
    if (!name){ return; }
    this.heroService.addHero({ name } as Hero).subscribe(
        hero=>{this.heros.push(hero);
        });
  }

  delete(hero: Hero): void{
    this.heros=this.heros.filter(h=>h !== hero);
    //与增加不同，增加需要在交互中生成相关的ｉｄ再进行后续操作
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit() {
    this.getHeros();
  }

}
