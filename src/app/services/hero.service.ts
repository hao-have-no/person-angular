import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

// import { HEROES } from "./heroes/mock-heroes";
import { MessageService } from "./message.service";
import{ HttpClient, HttpHeaders} from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

/**
 * 模拟真实的http请求
 */

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  private heroUrl= 'api/heros';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };//声明请求头

  constructor(
      private messageService: MessageService,
      private http: HttpClient
  ) { }

  // //获取列表
  // getHeros(): Observable<Hero[]>{
  //   /**
  //    * 通过模拟数据获取数据
  //    */
  //   return this.http.get<Hero[]>(this.heroUrl).pipe(
  //   // this.messageService.add('HeroService: fetched heros');
  //   // return of(HEROES);
  //
  //       tap(_ => this.log('','get Data')),
  //       catchError(this.handleError<Hero[]>('getHeros',[]))
  //   );
  //   // tap查看返回的值，在进行操作中不会更新返回值
  // }
  //
  // /** GET hero by id. Return `undefined` when id not found */
  // getHeroNo404<Data>(id: number): Observable<Hero> {
  //   const url = `${this.heroUrl}/?id=${id}`;
  //   return this.http.get<Hero[]>(url)
  //       .pipe(
  //           map(heroes => heroes[0]), // returns a {0|1} element array
  //           tap(h => {
  //             const outcome = h ? `fetched` : `did not find`;
  //             this.log(`${outcome} hero id=,`,`${id}`);
  //           }),
  //           catchError(this.handleError<Hero>(`getHero id=${id}`))
  //       );
  // }
  //
  // //获取详情
  // getHero(id: number): Observable<Hero>{
  //   //返回的Observable<Hero>（“一个可观察的单个英雄对象”）
  //
  //   // this.messageService.add('HeroService: fetched hero id='+id);
  //   // return of(HEROES.find(hero=>hero.id === id));
  //   // const url = `${this.heroesUrl}/${id}`;
  //   const url= `${this.heroUrl}/${id}`;
  //   return this.http.get<Hero>(url).pipe(
  //       //ｐｉｐｅ管道函数，对数据进行处理
  //       tap(_ => this.log("fetched hero id=",""+id)),
  //       catchError(this.handleError<Hero>(`getHero id=${id}`))
  //   )
  //
  // }

  //纪录日志
  public log(tip: string,message: string) {
    this.messageService.add(`${tip !=''?tip:'Heros'}: ${message}`);
  }

  //更新列表数据
  // updateHero(hero: Hero): Observable<any> {
  //
  //   return this.http.put(this.heroUrl, hero, this.httpOptions).pipe(
  //       tap(_ => this.log(`updated hero id=`,`${hero.id}`)),
  //       catchError(this.handleError<any>('updateHero'))
  //   )
  // }

  //新增用户
  // addHero(hero: Hero): Observable<Hero> {
  //   return this.http.post(this.heroUrl, hero, this.httpOptions).pipe(
  //       tap((newHero: Hero) => this.log(`added hero w/ id=`,`${newHero.id}`)),
  //       catchError(this.handleError<Hero>('addHero'))
  //   );
  // }

  //删除用户
  // deleteHero (hero: Hero | number): Observable<Hero> {
  //   const id = typeof hero === 'number' ? hero : hero.id;
  //   const url = `${this.heroUrl}/${id}`;
  //
  //   return this.http.delete<Hero>(url, this.httpOptions).pipe(
  //       tap(_ => this.log(`deleted hero id=`,`${id}`)),
  //       catchError(this.handleError<Hero>('deleteHero'))
  //   );
  // }

  // searchHeros(term: string): Observable<Hero[]> {
  //   if (!term.trim()){
  //     return of([])
  //   }
  //   return this.http.get<Hero[]>(`${this.heroUrl}/?name=${term}`).pipe(
  //       tap(_ => this.log(`found heroes matching `,`"${term}"`)),
  //       catchError(this.handleError<Hero[]>('searchHeroes', []))
  //   )
  // }

  /**
   * 错误处理机制
   * Observable（异步传输的数据流）
   */
  private handleError<T> (operation = 'operation',result?: T){
    return (error: any): Observable<T> =>{
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);//捕捉处理错误，返回安全值继续工作
    };
  }
}
