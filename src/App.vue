<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import typescriptSupport from './demos/typescriptSupport/index.vue'
</script>

<template>
  <img
    alt="Vue logo a"
    src="./assets/logo.png"
  >
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <typescriptSupport
    msg="Hello I am One"
    :num="2"
  />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
