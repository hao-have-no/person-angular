import { Injectable } from '@angular/core';
import {　HttpClient, HttpHeaders} from "@angular/common/http";
import {pageInfo} from "./pageInfo";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
// import "rxjs/add/operator/map"

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
    const url=this.pageInfoUrl;
      return new Promise(function (res, rej) {
          return that.http.get(url).subscribe(
              val=>{
                console.log(val);
              }
          );
      });
    // this.http.get(url).subscribe((val)=>{
    //   return
    // })
    //   var data="123456";
    //   return data;

    // const that = this;
    // const url=this.pageInfoUrl+'?userId='+page.userId+'&page='+page.page
    // +'&pageName='+page.pageName+'&stayTime='+page.stayTime;
    // return new Promise(function (res, rej) {
    //   console.log('res',res)
    //   console.log("rej",rej)
    //   console.log('url',url)
    //
    //   that.http.get(url,that.httpOptionsTest)
    //       .subscribe((msg) => {
    //         console.log('msg',msg);
    //         // let blob = new Blob();
    //         // blob = msg;
    //         res(msg);
    //       })
    // })
    // const url=this.pageInfoUrl+'?userId='+page.userId+'&page='+page.page
    // +'&pageName='+page.pageName+'&stayTime='+page.stayTime;
    // this.http.get(url)
    //       .subscribe((msg) => {
    //         // let blob = new Blob();
    //         // blob = msg;
    //         console.log(msg);
    //         // res(msg);
    //       })
    // console.log(page);
    // const url=this.pageInfoUrl+'?userId='+page.userId+'&page='+page.page
    // +'&pageName='+page.pageName+'&stayTime='+page.stayTime;
    //  this.http.get(url,this.httpOptions)
    //     .subscribe(
    //         val=>{
    //           console.log("成功");
    //         },
    //         error => {
    //           console.log('get请求失败', error);
    //         }
    //     )
    // this.http.get(this.pageInfoUrl,this.httpOptions).subscribe(
    //     val=>{
    //       console.log("123");
    //     }
    // )
  }
}
