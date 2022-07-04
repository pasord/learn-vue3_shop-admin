import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL
})

/** note
 * request 不支持泛型，无法返回类型数据
 * 但 request.get、post、put 等支持响应数据泛型
 *
 */

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 封装request，
// config要求有类型，点击快速修复：推断类型
// 返回的data直接断言为传入的类型T
export default <T = any>(config: AxiosRequestConfig<any>) => {
  return request(config).then((res) => {
    return res.data.data as T // 直接把最终的接口data断言为T
  })
}
