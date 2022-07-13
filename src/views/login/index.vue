<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="formRel"
      :model="form"
      :rules="rules"
      @submit.prevent="validate(formRel)"
    >
      <el-form-item prop="account">
        <el-input
          v-model="form.account"
          placeholder="请输入用户名"
        />
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          v-model="form.pwd"
          type="password"
          placeholder="请输入密码"
        />
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          :loading="loading"
          native-type="submit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage, FormInstance, FormRules } from 'element-plus'
import { onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface IReqLogin {
  success: boolean;
  data: string;
}

const router = useRouter()
const route = useRoute()

const loading = ref(false)
const formRel = ref<FormInstance>()
const form = reactive({
  account: '',
  pwd: ''
})
const rules = ref<FormRules>({
  account: [
    { required: true, message: '请输入账户', trigger: 'change' }
  ],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ]
})

onMounted(() => {
  console.log('login-已挂载')
})

// const validate = async () => {
//   await formRel.value?.validate((valid, fields) => {
// 或上面的写法
const validate = async (formIns: FormInstance | undefined) => {
  await formIns?.validate((valid, fields) => {
    if (valid) {
      submit()
    } else {
      console.log('fields', fields)
    }
  })
}

// submit在validate下面也是可以被调用到的，因为setup
const submit = async () => {
  loading.value = true

  const reqLogin = (): Promise<IReqLogin> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: form.account
        })
      }, 2000)
    })
  }

  const res = await reqLogin().finally(() => {
    loading.value = false
  })

  if (res.success) {
    ElMessage.success('登录成功')
    localStorage.setItem('account', res.data)

    let redirect = route.query.redirect
    if (typeof redirect !== 'string') redirect = '/'
    router.replace(redirect)
  }
}

</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  height: 100vh;
  background-color: #2d3a4b;
}
</style>
