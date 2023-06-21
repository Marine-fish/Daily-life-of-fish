import P1 from "..";
import type { THome} from "../request/type"

//发送home的网络请求
P1.request<THome>({
    url: "xxx",
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