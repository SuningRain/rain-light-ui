/*
 * @Descripttion: 类型声明
 * @Author: ZhangYu
 * @Date: 2023-04-16 12:05:02
 */

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const vueComponent: DefineComponent<{}, {}, any>;
  export default vueComponent;
}