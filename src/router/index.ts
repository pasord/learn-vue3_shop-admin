import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

// 路由规则及类型
const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: AppLayout, // 这里配置layout还是不错的
    children: [
      {
        path: '', // 默认子路由，父级路由name可不加
        name: 'home',
        component: () => import('@/views/home/index.vue')
      }
    ]
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
