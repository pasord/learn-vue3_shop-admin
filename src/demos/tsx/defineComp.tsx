import { ref, defineComponent } from 'vue'
interface PropsType {
  msg: string
}

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  // render () {
  //   return (
  //     <h2>{ this.msg }</h2> // note: 选项试api 通过this访问属性
  //   )
  // }
  setup () {
    const count = ref(200)

    return (props:PropsType) => (
      <div>
        <h2>{props.msg}</h2>
        <h2>{count.value}</h2> // 还不能自动解包
      </div>
    )
  }
})
