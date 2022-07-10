<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    text-color="#fff"
    :collapse="isCollapse"
    router
  >
    <el-menu-item index="/admin/home">
      <span>首页</span>
    </el-menu-item>

    <el-sub-menu index="/admin/product">
      <template #title>
        <span>商品</span>
      </template>
      <el-menu-item index="/admin/product/product_list">
        <span>商品列表</span>
      </el-menu-item>
      <el-menu-item index="/admin/product/add_product">
        <span>添加商品</span>
      </el-menu-item>
      <el-menu-item index="/admin/product/product_attr">
        <span>商品规格</span>
      </el-menu-item>
      <el-menu-item index="/admin/product/product_classify">
        <span>商品分类</span>
      </el-menu-item>
      <el-menu-item index="/admin/product/product_reply">
        <span>商品评论</span>
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="/admin/system_admin">
      <template #title>
        <span>权限管理</span>
      </template>
      <el-menu-item index="/admin/system_admin/index">
        <span>管理员</span>
      </el-menu-item>
      <el-menu-item index="/admin/system_role/index">
        <span>角色</span>
      </el-menu-item>
      <el-menu-item index="/admin/system_menus/index">
        <span>规则</span>
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="/admin/system">
      <template #title>
        <span>维护</span>
      </template>
      <el-menu-item index="/admin/system/file">
        <span>附件管理</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isCollapse = ref(false)

// const appMenus = []
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
