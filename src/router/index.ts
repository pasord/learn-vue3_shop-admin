import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import productRoutes from './modules/product'
import settingRoutes from './modules/setting'
import systemRoutes from './modules/system'

// 根据路由结构动态生成菜单、面包屑

// 路由规则及类型
const routes:RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/admin/home'
  },
  {
    path: '/admin',
    component: AppLayout, // 这里配置layout还是不错的
    children: [
      {
        path: 'home', // 默认子路由，父级路由name可不加
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页'
        }
      },
      productRoutes,
      settingRoutes,
      systemRoutes
    ]
  },
  {
    path: '/admin/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/demos/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes // 路由规则
})

export default router
