/**
 * 导入request文件
 */

import PRequest from "./request"
import { BASE_URL, TIME_OUT } from "./config"

const P1 = new PRequest({
   baseURL: BASE_URL,
   timeout: TIME_OUT,

   //自己的拦截器 名字要和继承的属性一样
   interceptors: {
      //请求成功的回调
      reqSuFn: (config) => config,
      //请求失败的回调
      reqFaiFn: (err) => err,
      //响应成功的回调
      resPonSuFn: (res) => res,
      //响应失败的回调
      resPonFaiFn: (err) => err
   }
})

export default P1