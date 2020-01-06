/*
 * @Author: fenghao
 * @Date: 20-1-3 上午11:51
 * @LastEditors: fenghao
 * @LastEditTime: 20-1-3 上午11:51
 * @Description: 
 */

import { HttpHeaders } from "@angular/common/http";
//http配置
export interface HttpConfigInterface {
    url: string,
    params?: HttpParamsInterface
    option?: HttpOptionInterface
}

//接口返回值
export interface HttpResponseInterface{
    status: string,
    description: string
    page?: any
    data?: any
    content?: any,
    empty?: boolean,
    first?: boolean,
    last?: boolean,
    number?: number,
    numberOfElements?: number,
    pageable?: HttpPageableInterface,
    size?: number,
    sort?: httpPageSortInterface,
    totalElements?: number,
    totalPages?: number
}


//参数配置
interface HttpParamsInterface {
       [keys: string]: any
}

interface HttpOptionInterface {
       observe?: 'body';
       headers?: HttpHeaders;
       reportProgress?: boolean;
       responseType?: 'json';
       widthCredentials?: boolean;
}

interface HttpPageableInterface {
    offset: number,
    pageNumber: number,
    pageSize: number,
    paged: boolean,
    sort: httpPageSortInterface,
    unpaged: boolean
}

interface httpPageSortInterface {
    empty: boolean,
    sorted: boolean,
    unsorted: boolean
}


