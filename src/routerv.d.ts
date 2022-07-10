import 'vue-router'

declare module 'vue-router' {
  // eslint-disable-next-line no-unused-vars
  interface RouteMeta {
    // 是可选的
    title?: string
    // 每个路由都必须声明
    // requiresAuth: boolean
  }
}
