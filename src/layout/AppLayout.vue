<template>
  <el-container>
    <el-aside>
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header>
        <AppHeader />
      </el-header>
      <el-main>
        <!-- 子路由出口 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import AppHeader from './AppHeader/index.vue'
import AppMenu from './AppMenu/index.vue'
</script>

<style lang="scss" scoped>
// el样式可直接生效
.el-container {
    height: 100vh;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
  background-color: #fff;
}
.el-aside {
  width: auto;
  background-color: #304156;
  color: #333;
}
.el-main {
  color: #333;
  background-color: #e9eef3;
}
</style>
