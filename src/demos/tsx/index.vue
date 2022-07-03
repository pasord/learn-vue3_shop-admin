<template>
  <div style="border: 1px solid red;">
    <h1>Hi</h1>
    <tsx />
    <functional />
    <defineComp msg="hello i am defineComp" />
  </div>
</template>

<script lang="tsx" setup>
import functional from './functional'
import defineComp from './defineComp'
const tsx = <h1>I am tsx</h1>
</script>

<style lang="scss" scoped>

</style>
