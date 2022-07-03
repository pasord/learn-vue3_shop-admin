import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 路由规则及类型
const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes // 路由规则
})

export default router
