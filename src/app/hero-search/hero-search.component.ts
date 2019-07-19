import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from "rxjs";
/**
 * 个人理解，在ｈｔｍｌ中声明的ａｎｓｙ，并且用$符号
 * 相当于自己将有关属性关联，不需要人为再处理
 */
import { Hero } from "../heroes/hero";
import { HeroService } from "../hero.service";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

  constructor(private heroService :HeroService) { }

  heroes$　: Observable<Hero[]>;

  private searchTerms = new Subject<string>();//

  search(event:any,term: string): void {

      this.searchTerms.next(term);


    //Subject 既是可观察对象的数据源，本身也是 Observable
    //往Observable中推送一些值
  }

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
        debounceTime(300),//节流
        distinctUntilChanged(),//比对条件是否改变
        switchMap((term: string)=>this.heroService.searchHeros(term))
        //开启搜索服务，将到达的搜索词填充
        //searchTerms本身就是我一个元数据，ｓｗitchMap映射Observable
        // switchMap()作用为在ｈｔｔｐ请求中，使用后续的去替代之前的， 会记住原始的请求顺序，只会返回最近一次 HTTP 方法调用的结果。 以前的那些请求都会被取消和舍弃。
    )
  }

}
