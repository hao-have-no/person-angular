/*
 * @Author: fenghao
 * @Date: 20-1-2 下午5:03
 * @LastEditors: fenghao
 * @LastEditTime: 20-1-2 下午5:03
 * @Description:
 */

import {Inject, Injectable} from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import { throwError } from "rxjs";
import { tap } from 'rxjs/operators';
import { catchError, retry } from "rxjs/operators";
import { NzMessageService } from "ng-zorro-antd";
import { AuthOperaService } from "../auth-opera/auth-opera.service";
import { HttpClientService } from './http-client.service';
import { Router } from "@angular/router";

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor{
    private environment: any;

    constructor(
        private message: NzMessageService, //报错模版提示
        private authOpera: AuthOperaService,
        private httpService: HttpClientService, //请求服务
        private router: Router
    ){
        this.environment = this.httpService.environment;
    }

    //定义拦截器
    intercept(req, next: HttpHandler){
        const {baseUrl, httpReter} = this.environment;
        const fixUrl = /\/$/g;//判断传输参数是否以/结尾,用于拼接接口
        let newReq=req.clone({url:req.url.include('http')?`${req.url}`:`${baseUrl}${baseUrl&&fixUrl.test(baseUrl)?'':'/'}${req.url}`});
        /**
         * 配置令牌.设置请求头
         */
        let token = this.authOpera.getToken();
        if (token){
            newReq.headers = newReq.headers.set(this.authOpera.token,token);
        }
        return next.handle(newReq).pipe(
            retry(httpReter),
            tap(response =>{
                if (response instanceof Response){
                    if (this.environment.checkLogin && response.body && response.body.status === this.environment.status.notLogin){
                        //判断是够携带的token是正确的,并且登录状态是有效的
                        this.message.warning("请重新登录,登录状态已失效");
                        this.router.navigate([this.environment.loginRouter || '/login']);
                    }
                }
            }),
            catchError(this.handleError.bind(this))
        )
    };

    //错误捕捉处理器
    private handleError(error: HttpErrorResponse){
        if (error.error instanceof ErrorEvent){
            console.log('报错信息', error.error.message);
        }else{
            console.log('原始错误信息',error);
            this.message.error(`数据请求错误,${error.error.message|| '请联系相关人员进行处理'}`)
        }
        return throwError(error);
    }
}
