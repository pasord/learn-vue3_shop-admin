<!--note: script-setup
可以理解为里面所有的代码都包裹在setup(){}里
里面所有的变量，都会自动暴露给模版去使用
 -->

<script setup lang="ts">
import { ref } from 'vue'

// 定义props
const props = defineProps({
  msg: {
    type: String,
    default: 'hi'
  }
})

// 定义emits
const emits = defineEmits(['increment'])

const count = ref(0)

const increment = () => {
  console.log(props)
  emits('increment')

  count.value++
}

</script>

<template>
  <h1>{--ScriptSetup--</h1>

  <div style="border: 1px solid blue;">
    <h2>
      <button @click="increment">
        ++
      </button> count: {{ count }}
    </h2>

    <h2>msg: {{ msg }}</h2>
    <h2>props-msg: {{ props.msg }}</h2>
  </div>

  <h1>--ScriptSetup--}</h1>
</template>

<style scoped>

</style>
