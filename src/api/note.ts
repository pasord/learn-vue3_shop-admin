import request from '@/utils/request'
import { INoteInfo } from './types/note'

// 通用接口返回数据类型泛型，适用方案2
// interface ResponseData<T> {
//   status: number
//   msg: string
//   data: T
// }

export const getNoteInfo = () => {
  // note: .get等 支持泛型, 可定义接口数据类型, 可以按command+点击get上查看axios定义的类型, 会跳转到axios包里(可以学习下)
  // 注意：get<T>返回的类型还是T，具体实现去axios包里看

  // n方案1: 这里定义好类型，后续在使用时，就有类型了
  // return request.get<{
  //   status: number
  //   msg: string
  //   data: {
  //       logo_square: string
  //       logo_rectangle: string
  //       login_logo: string
  //       slide: string[]
  //   }
  // }>('/note/info')

  // 方案2: 抽离通用接口类型
  // request.get<ResponseData<{
  //   logo_square: string
  //   logo_rectangle: string
  //   login_logo: string
  //   slide: string[]
  // }>>('/note/info')

  // 方案3：泛型直接传入，并在request里断言直接返回
  // request<{
  //   logo_square: string
  //   logo_rectangle: string
  //   login_logo: string
  //   slide: string[]
  // }>({
  //   method: 'GET',
  //   url: '/note/info'
  // })

  // 方案4：使用抽离的接口数据类型
  request<INoteInfo>({
    method: 'GET',
    url: '/note/info'
  })
}
