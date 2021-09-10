---
title: Box 盒子
order: 3
---

## Box 盒子

<code src="./box/index.tsx" />

## API

| 属性            | 说明             | 类型                         | 默认值 |
| --------------- | ---------------- | ---------------------------- | ------ |
| color           | 字体颜色         | string                       | -      |
| size            | 字体大小         | string                       | -      |
| border          | 内边框           | boolean                      | -      |
| backgroundColor | 背景颜色         | string                       | -      |
| display         | 显示             | string                       | black  |
| textAlign       | 对齐             | `left` \| `center` \| `right` |left|
| align           | 子元素对齐        | `start` \| `center` \| `end` \| `baseline` |-|
| justify         | 两端对齐         | `start` \| `end` \| `center` \| `between` \| `around` |-|
| padding         | 内边距           | string                       | -      |
| margin          | 外边距           | string                       | -      |
| shape           | 形状             | `square` \| `circle` | false  |
| className       | 包裹层的类名     | string                       | -      |
| style           | 设置样式         | string                       | -      |
| onTap           | 点击按钮时的回调 | () => void                   | -      |
