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
 * 拦截器是可以创建多个的,不会被覆盖掉
 * 利用类的继承对AxiosRequestConfig类型进行配置扩展
 * 让外面new的实例有自己独有的拦截器
 * ?:目的是让interceptors属性不是必写的属性
 */
import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import type { PRC } from "./type";

//对类型进行抽取到type文件里
// interface PConfig {
//         //请求成功的回调
//         reqSuFn: (config: AxiosRequestConfig) => AxiosRequestConfig
//         //请求失败的回调
//         reqFaiFn: (err: any) => any
//         //响应成功的回调
//         resPonSuFn: (res: AxiosResponse) => AxiosResponse
//         //响应失败的回调
//         resPonFaiFn: (err: any) => any
// }

// interface PRC extends AxiosRequestConfig {
//     //对配置对象进行抽取
//     interceptors?: PConfig
// }
class PRequest {
  //自定义实例转化成对应axios实例
  instance: AxiosInstance;
  constructor(config: PRC) {
    this.instance = axios.create(config);

    //给每个instance实例添加拦截器请求的拦截
    this.instance.interceptors.request.use(
      (config) => {
        //对网络请求成功的回调时,进行拦截配置东西
        // config.headers = {
        //     token: ''
        // }
        console.log("全局的请求成功的回调");
        return config;
      },
      (err) => {
        console.log("全局的请求失败的回调");
        return err;
      }
    );
    //响应的拦截
    this.instance.interceptors.response.use(
      (res) => {
        console.log("全局响应成功的回调");
        // return res
        //对响应的数据返回缩小精取
        return res.data;
      },
      (err) => {
        console.log("全局响应失败的回调");
        return err;
      }
    );

    //针对特定的new的实例添加拦截器 类型缩小
    // if (config.interceptors) {
    //    this.instance.interceptors.request.use(
    //     config.interceptors.reqFaiFn,
    //     config.interceptors.reqSuFn,
    //    )
    //    this.instance.interceptors.response.use(
    //     config.interceptors.resPonFaiFn,
    //     config.interceptors.resPonSuFn,
    //    )
    // }
    //对上面的优化 利用可选链
    this.instance.interceptors.request.use(
      config.interceptors?.reqFaiFn,
      config.interceptors?.reqSuFn
    );
    this.instance.interceptors.response.use(
      config.interceptors?.resPonFaiFn,
      config.interceptors?.resPonSuFn
    );
  }

  /**
   * 封装网络请求方法
   * 定义一个函数,函数内部会会去调用instance对象里
   * axios实例对象里的request方法
   * request方法里有get, post, put等这些方法
   */
  //让外面发生网络请求进行进一步封装拦截器
  // request(config: AxiosRequestConfig) {
  //     this.instance.request(config)
  // }
  // request(config: PRC) {
  //     //针对单独网络请求进行添加拦截回调拦截函数单次请求拦截
  //     if (config.interceptors?.reqSuFn) {
  //         config = config.interceptors.reqSuFn(config)
  //     }

  //     //因为响应是异步的不知道什么时候才有结果所以采用
  //     // new Promise利用两个回调函数将响应的结果传出
  //     //<AxiosResponse>是为了外面响应成功后有类型才能进行获取响应结果
  // //    return new Promise<AxiosResponse>((resolve, reject) => {
  // //     this.instance.request(config).then(res => {
  // //         if (config.interceptors?.resPonSuFn) {
  // //             res = config.interceptors.resPonSuFn(res)
  // //         }
  // //         return resolve(res)
  // //     }, err => {
  // //         if (config.interceptors?.resPonFaiFn) {
  // //             err = config.interceptors.resPonFaiFn(err)
  // //         }
  // //         reject(err)
  // //     })
  // //    })
  // }

  request<T = any>(config: PRC<T>) {
    //针对单独网络请求进行添加拦截回调拦截函数单次请求拦截
    if (config.interceptors?.reqSuFn) {
      config = config.interceptors.reqSuFn(config);
    }

    //因为响应是异步的不知道什么时候才有结果所以采用
    // new Promise利用两个回调函数将响应的结果传出
    //<AxiosResponse>是为了外面响应成功后有类型才能进行获取响应结果
    //    return new Promise<AxiosResponse>((resolve, reject) => {
    //     this.instance.request(config).then(res => {
    //         if (config.interceptors?.resPonSuFn) {
    //             res = config.interceptors.resPonSuFn(res)
    //         }
    //         return resolve(res)
    //     }, err => {
    //         if (config.interceptors?.resPonFaiFn) {
    //             err = config.interceptors.resPonFaiFn(err)
    //         }
    //         reject(err)
    //     })
    //    })
    //对获取数据的类型动态性封装,利用泛型
    return new Promise<T>((resolve, reject) => {
      this.instance.request<any, T>(config).then(
        (res) => {
          if (config.interceptors?.resPonSuFn) {
            // res = config.interceptors.resPonSuFn(res)
            res = config.interceptors.resPonSuFn(res);
          }
          return resolve(res);
        },
        (err) => {
          if (config.interceptors?.resPonFaiFn) {
            err = config.interceptors.resPonFaiFn(err);
          }
          reject(err);
        }
      );
    });
  }

  get<T = any>(config: PRC<T>) {
    return this.request({ ...config, method: "GET" });
  }

  post<T = any>(config: PRC<T>) {
    return this.request({ ...config, method: "GET" });
  }

  delete<T = any>(config: PRC<T>) {
    return this.request({ ...config, method: "DELETE" });
  }

  patch<T = any>(config: PRC<T>) {
    return this.request({ ...config, method: "PATCH" });
  }
}

export default PRequest;
