---
title: Rate 评分
order: 30
---

## Rate 评分

<code src="./rate/index.tsx" />

## API

| 属性     | 说明               | 类型             | 默认值 |
| -------- | ------------------ | ---------------- | ------ |
| count    | star 总数          | number           | `5`    |
| value    | 当前数，受控值     | number           | -      |
| color    | 选中时的颜色       | string           | -      |
| size     | 大小               | string \| number | -      |
| readOnly | 是否为只读状态     | boolean          | false  |
| label    | 左侧标签           | ReactNode        | -      |
| icon     | 选中时的图标名称   | string           | -      |
| iconFill | 未选中时的图标名称 | string           | -      |
| onChange | 选择时的回调       | (e: any) => void | -      |
