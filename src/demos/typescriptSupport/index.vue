<script lang="ts">
import { ref, defineComponent, PropType, Ref, onMounted } from 'vue'
import Item from './Item.vue'

interface User {
    name: string,
    age: number
}

export default defineComponent({
  name: 'TypescriptSupport',
  components: {
    Item
  },
  // note: 使用该组件的模板也会有prop类型校验
  props: {
    msg: {
      // note: ts可以推断出ts的string类型
      type: String,
      required: true
    },
    num: {
      type: Number,
      default: 0
    },
    // note: 给 user 对象 Object 添加具体的类型，需要断言
    // PropType 工具泛型函数
    // 文档：typescript/options-api.html#typing-component-props
    user: {
      type: Object as PropType<User>,
      default: () => ({})
    }
  },
  // note: 传入 props
  setup: (props) => {
    // note: 根据初始值默认推断并确定类型
    const count = ref(0)

    console.log(props.msg)
    console.log(props.user.age)

    // note: 类型推到+ref支持泛型、用Ref定义响应式变量ref的类型
    const year = ref<string|number>(2022)
    const day:Ref<number> = ref(22)
    // const year:Ref<string | number> = ref('2020') 或者

    // note: 为 ref 内的值指定一个更复杂的类型
    const tea = ref<{color:string, ml: number} | null>(null)
    tea.value = {
      color: 'green',
      ml: 500
    }

    // note: 为模板引用的dom定义类型
    const title = ref<HTMLHeadElement | null>(null)
    // note: 使用InstanceType泛型函数+ts的typeof 为模板引用的组件定义类型
    const item = ref<InstanceType<typeof Item> | null>(null)

    onMounted(() => {
      console.log(title.value)
      console.log(item.value)
    })

    return {
      title,
      count,
      year,
      day,
      tea,
      item
    }
  }
})
</script>

<template>
  <div style="margin:20px; border: 1px solid blue">
    <h1 ref="title">
      Hello Ts
    </h1>
    <h2>msg:{{ msg }}</h2>
    <h2>num:{{ num }}</h2>
    <h2>year:{{ year }}</h2>
    <h2>day:{{ day }}</h2>

    <!--note: ? 是因为有联合类型 null -->
    <h2>tea:{{ tea?.color }}</h2>

    <Item ref="item" />
  </div>

  <div style="margin:20px; border: 1px solid green">
    <button
      type="button"
      @click="count++"
    >
      count is: {{ count }}
    </button>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
