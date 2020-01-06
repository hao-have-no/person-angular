# HttpClient

数据请求服务

用户信息操作  

env 文件中配置 storageUser、storageToken 字段可以覆盖 user、token 在localstorage中的存储名称  
env 文件中配置 loginPageUrl 可以覆盖 路由守卫中跳转到登录页的 路由 默认为 `/login`

## 用法
`import { HttpService } from 'http-client'`

## 配置
1、 
`配置 env 文件中 loginRouter 做为检测到未登录时跳转路由，未设置时使用 /login`
2、 
`配置 env 文件中 checkLogin 作为是否检测登录状态的配置项 true：检测登录状态`


## 包含
1、MD5加密服务 
`import { Md5Service } from 'auth-opera'`  
2、登录拦截  
`import { CheckLoginGuard } from 'auth-opera'`  
3、用户信息缓存服务 
`import { AuthOperaService } from 'auth-opera'`  
