// note

import { RouteRecordRaw, RouterView } from 'vue-router'
// route 都不是绝对路由（没有/） 用的相对路由跟随父路由, 这块配置真不错
const routes:RouteRecordRaw = {
  path: 'product',
  name: '',
  component: RouterView, // vue-router提供的路由出口组件<router-view>
  meta: {
    title: '商品'
  },
  children: [
    {
      path: 'product_list',
      name: 'product-list',
      component: () => import('@/views/product/list/index.vue'),
      meta: {
        title: '商品列表'
      }
    },
    {
      path: 'add_product',
      name: 'add-product',
      component: () => import('@/views/product/add/index.vue'),
      meta: {
        title: '添加商品'
      }
    },
    {
      path: 'product_attr',
      name: 'product-attr',
      component: () => import('@/views/product/attr/index.vue'),
      meta: {
        title: '商品规格'
      }
    },
    {
      path: 'product_classify',
      name: 'product-classify',
      component: () => import('@/views/product/classify/index.vue'),
      meta: {
        title: '商品分类'
      }
    },

    {
      path: 'product_reply',
      name: 'productreply',
      component: () => import('@/views/product/reply/index.vue'),
      meta: {
        title: '商品评论'
      }
    }
  ]
}

export default routes
