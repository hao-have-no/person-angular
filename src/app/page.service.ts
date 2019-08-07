import { Injectable } from '@angular/core';
import {　HttpClient, HttpHeaders} from "@angular/common/http";
import {pageInfo} from "./pageInfo";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private pageInfoUrl="http://127.0.0.1:12138/record/pageInfo";

  private httpOptionsTest = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://127.0.0.1:12138',
    })
  };

  constructor(private http: HttpClient){

  }

  addPageInfo(page:pageInfo){
    var that=this;
    const url=this.pageInfoUrl+'?userId='+page.userId+'&page='+page.page
    +'&pageName='+page.pageName+'&stayTime='+page.stayTime;
          return that.http.get(url).pipe(
              tap(
                  data=>{console.log(data)},
                  error=>{console.error(error)}
              )
          );
  }

  getPageInfo(){
      var that=this;
      const url="http://127.0.0.1:12138/record/pageView";
      return that.http.get(url).pipe(
          tap(
              data=>{console.log(data)},
              error=>{console.error(error)}
          )
      );
  }
}
