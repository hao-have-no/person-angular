/*
 * @Author: fenghao
 * @Date: 20-1-3 上午9:59
 * @LastEditors: fenghao
 * @LastEditTime: 20-1-3 上午9:59
 * @Description: 
 */

/*
定义接口参数类型
 */
export interface AuthDataInterface {
    user: UserDataInterface
    token: string
}

export interface UserDataInterface {
    loginName: string
    name: string
    creator: string
    roles: any
    [key:string]: any
}
