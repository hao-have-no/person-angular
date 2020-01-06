/*
 * @Author: fenghao
 * @Date: 20-1-3 上午11:00
 * @LastEditors: fenghao
 * @LastEditTime: 20-1-3 上午11:00
 * @Description: 
 */
import { Injectable } from "@angular/core";
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthOperaService } from "../auth-opera/auth-opera.service";
import { UrlOperatorService } from "../url-opera/url-operator.service";

@Injectable({
    providedIn: 'root'
})

export class CheckLoginService implements CanActivateChild{
    constructor(
        private router: Router,
        private authOpera: AuthOperaService,
        private urlOpera: UrlOperatorService
    ){}

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.authOpera.environment.checkLogin && !this.authOpera.getToken()){
            this.urlOpera.saveRefferrer(state.url);
            this.authOpera.delete();
            const loginUrl = this.authOpera.environment.loginRouter || '/login';
            this.router.navigate([loginUrl]);
            return false
        }
        return true;
    }
}
