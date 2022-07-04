/**
 * 抽离接口数据类型, 方便页面组件使用接口类型
 * 接口类型使用I开头，为了好区分
 * script-setup中使用时用 type 标记为类型（vue模板才能认识） import type { INoteInfo } from '@/ap/types/note'
 * 因为script-setup编译时，所有import引入都会当做js值，而不是ts类型，所以需要type标注
 */
export interface INoteInfo {
    logo_square: string
    logo_rectangle: string
    login_logo: string
    slide: string[]
}
