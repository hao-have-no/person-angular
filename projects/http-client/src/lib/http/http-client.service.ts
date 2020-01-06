import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { map } from "rxjs/operators";
import { HttpConfigInterface, HttpResponseInterface } from "../interfaces/http";
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from "@angular/common/http";
import { NzMessageService } from "ng-zorro-antd";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  public environment: any;
  constructor(
      private http: HttpClient,
      private message: NzMessageService,
      @Inject('environment') environment
  ) {
    this.environment = environment;
  }

  /**
   * get请求
   * $params cfg api-config-service中的接口配置
   */
  public get(cfg: HttpConfigInterface): Observable<any>{
    let {url,params,option} = cfg;
    let httpParams = this.httpParams(params);
    let httpOptions = option || {};
    return this.http.get(url,Object.assign(httpOptions,{params:httpParams})).pipe(
        map(this.extractData)
    )
  }

  /**
   * POST请求处理（一般用于保存数据）
   * @param cfg api-config-service 中的接口配置
   */
  public post(cfg: HttpConfigInterface): Observable<any> {
    let { url, params, option } = cfg;
    let httpOptions = option || {};
    return this.http.post(url, params, httpOptions).pipe(
        map(this.extractData),
    );
  }

  /**
   * PUT请求处理（一般用于更新数据）
   * @param cfg api-config-service 中的接口配置
   */
  public put(cfg: HttpConfigInterface): Observable<any> {
    let { url, params, option } = cfg;
    let httpOptions = option || {};
    return this.http.put(url, params, httpOptions).pipe(
        map(this.extractData),
    );
  }

  /**
   * DELETE请求处理（一般用于删除数据）
   * @param cfg api-config-service 中的接口配置
   */
  public delete(cfg: HttpConfigInterface): Observable<{}> {
    let { url, option } = cfg;
    let httpOptions = option || {};
    return this.http.delete(url, httpOptions).pipe(
        map(this.extractData),
    );
  }

  /**
   * 登录 登出
   */
  public login(eu: string, ep: string): Observable<any> {
    let url = `${this.environment.loginUrl}/login`
    let httpOptions = {
      headers: new HttpHeaders({
        eu, ep,
      })
    };
    return this.http.post(url, {}, httpOptions).pipe(
        map(this.extractData),
    );
  }

  /**
   * POSt 登出
   */
  public logout(): Observable<any> {
    let url = `${this.environment.loginUrl}/logout`
    let httpOptions = {};
    return this.http.post(url, {}, httpOptions).pipe(
        map(this.extractData),
    );
  }

  /**
   * 获取菜单列表
   */
  public menu(): Observable<any> {
    let url = `${this.environment.loginUrl}/menu/platform/tree`;
    return this.http.get(url, {}).pipe(
        map(this.extractData),
    );
  }

  /**
   * 处理返回的数据
   */
  public extractData(res:HttpResponseInterface){
    if(res && res.status === 'ok'){
      if (res.page){
        res.page.number = res.page.number + 1;
      }
      return res.page || res.data;
    }else if (res && res.status == 'blank') {
      return []
    }
    if (res && res.pageable) {
      res.pageable.pageNumber = res.pageable.pageNumber + 1;
    }
    return res || {};
  }

  /**
   * 处理params
   */
  private httpParams(params: any){
    let httpParams = new HttpParams();
    if (params){
      for (let key in params){
        httpParams.set(key,params[key]);
      }
    }
    return httpParams;
  }

  /**
   * 格式化url
   */
  public format(url:string,...data){
    data.forEach((item,key)=>{
      url = url.replace(`{${key}}`,item);
    });
    return url;
  }



}
