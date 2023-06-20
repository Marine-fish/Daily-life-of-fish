/**
 * 第一步定义一个类
 * 每个PRequest实例对应axios实例
 * 因为每次new PRequest都会执行constructor函数
 * 把axios.create()创建的实例存入instance对象里
 * 如果不给instance属性指定类型的话,默认是any类型
 * 那么后面做什么操作就没有限制了
 * 因为axios.create返回值的类型是AxiosInstance
 * 这个时候就可以可以在成员里指定类型
 * 由于要传很多axios配置的东西,又不确定哪些会不传
 * 所以直接让外面new实例的时候直接自己传想要的配置
 * 然后将传入的配置在创建axios实例的时候传入进去
 * 因为外面new实例传入类型不进行约束,那么就会导致
 * 配置混乱,因为axios.create函数要求传入的参数类型是CreateAxiosDefaults
 * 所以就可以给new实例传入的类型进行指定了
 * 封装拦截器
 * axios.create创建的实例里有个interceptors(拦截器)对象
 * interceptors对象里有个request(网络请求)对象里的use方法
 * use方法里有个参数,第一个参数是请求成功的回调,
 * 第二个参数是请求失败的回调
 * this.instance.interceptors.response.use()响应的拦截
 * 第一个参数是响应成功的拦截
 * 第二个参数是响应失败的拦截
 */
import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig } from "axios"

class PRequest {
    //自定义实例转化成对应axios实例
    instance: AxiosInstance
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)

        //给每个instance实例添加拦截器请求的拦截
        this.instance.interceptors.request.use((config) => {
            //对网络请求成功的回调时,进行拦截配置东西
            // config.headers = {
            //     token: ''
            // }
            console.log("全局的请求成功的回调")
            return config
        }, err => {
            console.log("全局的请求失败的回调")
            return err
        })
        //响应的拦截
        this.instance.interceptors.response.use((res) => {
            console.log("全局响应成功的回调")
            return res
        }, err => {
            console.log("全局响应失败的回调")
            return err
        })
    }

    /**
     * 封装网络请求方法
     * 定义一个函数,函数内部会会去调用instance对象里
     * axios实例对象里的request方法
     * request方法里有get, post, put等这些方法
     */
    request(config: AxiosRequestConfig) {
        this.instance.request(config)
    }
}

export default PRequest