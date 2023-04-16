/*
 * @Descripttion: 包入口文件
 * @Author: ZhangYu
 * @Date: 2023-04-10 15:44:32
 */

import { App } from 'vue'
import * as components from './lib/index'

// 遍历所有组件，并进行全局注册
type ComponentKeyType = keyof typeof components
const install = (app: App) => {
  Object.keys(components).forEach((component) => {
    app.component(components[component as ComponentKeyType].name, components[component as ComponentKeyType])
  })
}
const RainLightUi = {
  install
}
// 默认导出该注册器
export default RainLightUi
// 导出所有模块，引用时按需加载
export * from './lib/index'