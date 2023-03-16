import store from "@/store";
import axios from "axios";

class HttpRequest{
  baseURL: string;
  timeout: number;
  queue: any;

  constructor(){
    this.baseURL = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:8080'
    this.timeout = 3000
    this.queue = {} // 维护请求队列
  }
  setInterceptor(instance: any, url: any){
    instance.interceptors.request.use((config: any) => {
      // 可以记录请求的取消函数
      let cancelToken = axios.CancelToken
      config.cancelToken = new cancelToken((c) => {
        // 存储到vuex中
        store.commit('SET_TOKEN', c)
      })
      return config
    })
    instance.interceptors.response.use((res: any) => {
      if(res.data){
        return res.data
      }else{
        return Promise.reject(res)
      }
    },(err: any) => {
      return Promise.reject(err)
    })
  }
  request(options: any){
    let instance = axios.create()
    let config = {
      baseURL: this.baseURL,
      timeout: this.timeout,
      ...options
    }
    this.setInterceptor(instance, config.url)
    return instance(config)
  }
  get(url:any, data:any){
    return this.request({
      url,
      method: 'get',
      ...data
    })
  }
  post(url:any, data:any){
    return this.request({
      url,
      method: 'post',
      ...data
    })
  }
  delete(url:any){
    return this.request({
      url,
      method: 'delete'
    })
  }
  put(url:any, data:any){
    return this.request({
      url,
      method: 'put',
      ...data
    })
  }
}
export default HttpRequest