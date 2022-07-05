<template>
  <el-container>
    <el-aside width="200px">
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <!-- 子路由出口 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import AppMenu from './components/AppMenu.vue'
</script>

<style lang="scss" scoped>
// el样式可直接生效
.el-container {
    height: 100vh;
}
.el-header, .el-footer {
    background-color: #b3c0d1;
}
.el-aside {
    background-color: #304156;
}
.el-main {
    background-color: #e9eef3;
}
</style>
