---
title: Checkbox 复选框
order: 15
---

## Checkbox 复选框

<code src="./checkbox/index.tsx" />

## API

#### Checkbox

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 指定当前是否选中 | boolean | false |
| value | 根据 value 进行比较，判断是否选中 | string \| number | - |
| extra | Checkbox 下方添加的其他信息 | ReactNode | - |
| style | 自定义 Checkbox 样式 | CSSProperties | - |
| onChange | Checkbox 变化时的回调函数 | (checked: boolean, e: any) => void | - |

#### Checkbox.Group

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 用于设置当前选中的值 | string[] \| number[] | - |
| direction | Group 里的 Checkbox 的排列方向 | string | `row` |
| onChange | 选项变化时的回调函数 | (v: string[] \| number[]) => void | - |
