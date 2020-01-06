/*
 * @Author: fenghao
 * @Date: 20-1-2 下午5:03
 * @LastEditors: fenghao
 * @LastEditTime: 20-1-2 下午5:03
 * @Description:
 */

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpClientInterceptor } from './http.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true },
];
