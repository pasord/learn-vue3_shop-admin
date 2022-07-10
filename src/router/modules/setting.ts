// note

import { RouteRecordRaw, RouterView } from 'vue-router'

// 默认导出 + as 断言方式
// export default {
//   path: '/order',
//   name: '',
//   component: RouterView, // vue-router提供的路由出口组件<router-view>
//   children: [
//     {
//       path: 'list',
//       name: 'order_list',
//       component: () => import('@/views/order/list/index.vue')
//     },
//     {
//       path: 'offline',
//       name: 'order_offline',
//       component: () => import('@/views/order/offline/index.vue')
//     }
//   ]
// } as RouteRecordRaw // 断言类型，但是没有类型约束，因为只是出去的时候转换

// 定义了类型，才会有类型提示和约束，👆🏻那种只有提示没有约束
const routes:RouteRecordRaw = {
  path: '',
  name: '',
  component: RouterView, // vue-router提供的路由出口组件<router-view>
  meta: {
    title: '权限管理'
  },
  children: [
    {
      path: 'system_admin/index',
      name: 'system_admin-index',
      component: () => import('@/views/permission/admin/index.vue'),
      meta: {
        title: '管理员'
      }
    },
    {
      path: 'system_role/index',
      name: 'system_role-index',
      component: () => import('@/views/permission/role/index.vue'),
      meta: {
        title: '角色'
      }
    },
    {
      path: 'system_menus/index',
      name: 'system_menus-index',
      component: () => import('@/views/permission/rule/index.vue'),
      meta: {
        title: '规则'
      }
    }
  ]
}

export default routes
