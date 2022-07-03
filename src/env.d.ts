// env.d.ts 是声明的全局类型

// 👇🏻三斜线引入类型声明文件，只是为了放到 env.d.ts 一起作为全局类型
/// <reference types="vite/client" />

// 👇🏻扩展原有模块的类型：给所有的.vue文件都默认导出一个为component类型，
declare module '*.vue' {
  // 用type定义一个类型名DefineComponent并赋值
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
