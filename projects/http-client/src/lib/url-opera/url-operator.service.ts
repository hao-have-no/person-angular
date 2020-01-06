/*
 * @Author: fenghao
 * @Date: 20-1-3 上午11:08
 * @LastEditors: fenghao
 * @LastEditTime: 20-1-3 上午11:08
 * @Description: 
 */
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UrlOperatorService {
    private referrer: string = 'referrer';
    constructor(){}

    /**
     * 储存每一次跳到登录页前的浏览器地址
     */
    public saveRefferrer(url: string){
        window.localStorage.setItem(this.referrer,url);
    }
    public getRefferrer(){
        return window.localStorage.getItem(this.referrer);
    }
}
