/*
 * @Author: fenghao
 * @Date: 20-1-3 上午9:50
 * @LastEditors: fenghao
 * @LastEditTime: 20-1-3 上午9:50
 * @Description: 
 */
import { Injectable, Inject } from "@angular/core";
import { AuthDataInterface, UserDataInterface } from "../interfaces/auth";

//依赖注入,提供相关服务
@Injectable({
    providedIn: 'root'
})

export class AuthOperaService{
    private storage = window.localStorage;
    private user: string;
    public token: string;
    public environment: any;

    constructor(
        //依赖注入,将需要的元数据注入进来
        @Inject('environment')
        environment
    ){
        this.environment = environment;
        const {storageUser, storageToken} = this.environment;
        this.user = storageUser || 'user';
        this.token = storageToken || 'ctoken';
    }

    /**
     * 获取token
     */
    getToken()  {
        return this.storage.getItem(this.token);
    }

    /**
     * 获取用户信息
     */
    getUser(): UserDataInterface {
        return JSON.parse(this.storage.getItem(this.user) || '{}');
    }

    /**
     * 获取角色
     */
    getRoles() {
        return this.getUser().roles;
    };

    /**
     * 检测用户是否具有指定角色
     * @params role 角色
     */
    hasRole(role) {
        let roles = this.getUser().roles;
        return roles.some(userRole => {
            return userRole == role
        })
    };

    /**
     * 判断用户是否通过验证
     */
    isAuthenticated(): boolean {
        return this.getUser().id != undefined;
    };

    /**
     * 储存token以及用户数据
     */
    save(data:AuthDataInterface){
        let token = data[this.token];
        let user = data[this.user];
        user && this.storage.setItem(this.user,JSON.stringify(data[this.user]));
        token && this.storage.setItem(this.token,JSON.stringify(data[this.token]));
    }

    /**
     * 储存用户角色
     */
    setRoles(roles: any) {
        let user = this.getUser();
        user.roles = roles;
        this.storage.setItem(this.user,JSON.stringify(user));
    };

    /**
     * 清空token和user信息
     */
    delete() {
        this.storage.removeItem(this.user);
        this.storage.removeItem(this.token);
    };
}
