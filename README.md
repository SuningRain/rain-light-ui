# 基于 Vue 3 + TypeScript + Vite 的轻量ui组件库


## npm私服仓库

### npm仓库说明
用verdaccio部署npm私服

### 1.启动服务
```bash
verdaccio
```
### 2.发布
```bash
npm publish --registry http://localhost:4873/
```

### 3.安装组件库
```bash
npm add --registry http://localhost:4873/
```

## 公共仓库

### 1.发布
npm publish

### 2.安装组件库
npm
```bash
npm add rain-light-ui
```

yarn
```bash
yarn add rain-light-ui
```

pnpm
```bash
pnpm add rain-light-ui
```


## 引入组件库
```javascript
// 全局引入
import 'rainui-light/css/index.css'
import lightUi from 'rainui-light'
Vue.use(lightUi)


// 按需引入 - 例子 ：Text 组件
// 先在入口文件引入
import 'rain-light-ui/css/base.css'

// 局部按需引入
import 'rain-light-ui/css/text.css'
import { Text } from 'rain-light-ui'
```