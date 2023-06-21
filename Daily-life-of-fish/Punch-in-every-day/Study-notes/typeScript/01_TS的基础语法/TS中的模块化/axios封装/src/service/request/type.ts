import type {AxiosRequestConfig, AxiosResponse} from "axios"

interface PConfig<T = AxiosResponse> {
    //请求成功的回调
    reqSuFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
    //请求失败的回调
    reqFaiFn?: (err: any) => any
    //响应成功的回调
    // resPonSuFn?: (res: AxiosResponse) => AxiosResponse
    //针对动态单度网络请求的动态类型 泛型
    resPonSuFn?: (res: T) => T

    //响应失败的回调
    resPonFaiFn?: (err: any) => any
}

// export interface PRC extends AxiosRequestConfig {
// //对配置对象进行抽取
// interceptors?: PConfig
// }

export interface PRC<T = AxiosResponse> extends AxiosRequestConfig {
    //对配置对象进行抽取
    interceptors?: PConfig<T>
    }

export interface THome {
    data: any,
    returnCode: string,
    success: boolean
}