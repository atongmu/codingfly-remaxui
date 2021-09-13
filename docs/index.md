---
title: remaxui
hero:
  title: RemaxUi
  desc: 优雅、简洁的 Remax 组件库
  actions:
    - text: 开始使用
      link: /components/数据展示/card
features:
  - title: Remax
    desc: 基于 Remax 开发UI组件，可以尽情使用 Remax 的特性。
  - title: 多端适配运行
    desc: 支持微信小程序。
  - title: Cute UI
    desc: 因为实在想不出其他特性了，只能说可爱了😊
---








##  安装

```bash
npm install @codingfly/remaxui -D
```

```bash
yarn add @codingfly/remaxui -D
```

##  使用

#### 小程序

```
import { Button } from '@codingfly/remaxui';

const App = () => (
  <>
    <Button>Click @codingfly/remaxui</Button>
  </>
);
```


在 `app.js` 中引入样式：

```
import '@codingfly/remaxui/dist/my.css';
```
