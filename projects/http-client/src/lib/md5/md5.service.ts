/*
 * @Author: fenghao
 * @Date: 20-1-3 下午3:32
 * @LastEditors: fenghao
 * @LastEditTime: 20-1-3 下午3:32
 * @Description: 
 */
import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';

@Injectable({
    providedIn: 'root'
})
export class Md5Service {

    constructor() { }
    encryption(str: any): string {
        return Md5.hashStr(str).toString()
    }
}
