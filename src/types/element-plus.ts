// ts 文件中就不用 import type { ElForm, FormItemRule }
import { ElForm, FormItemRule } from 'element-plus'

// 官方文档示例已经提供了写法
export type IElForm = InstanceType<typeof ElForm>
export type IFormRules = Record<string, FormItemRule[]>
