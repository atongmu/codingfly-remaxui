---
title: Card 面板
order: 1
---

## Card 面板

<code src="./card/index.tsx" />

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 卡片标题 | string \| ReactNode | - |
| description | 卡片描述 | string \| ReactNode | - |
| extra | 卡片额外辅助内容 | string \| ReactNode | - |
| extraWidth | 卡片额外辅助内容宽度 | string \| number | - |
| cover | 卡片封面 | ReactNode | - |
| foot | 自定义卡片底部 | ReactNode | - |
| direction | 设置卡片的方向 | `horizontal` \| `vertical` | `vertical` |
| shadow | 设置卡片阴影效果 | boolean | false |
| backgroundColor | 背景颜色 | string | #fff |
| style | 自定义卡片样式 | CSSProperties | - |
| contentStyle | 自定义卡片内容区域样式 | CSSProperties | - |
| className | 包裹层的类名 | string | - |
| onTap | 点击卡片时触发的回调 | (e: any) => void | - |
