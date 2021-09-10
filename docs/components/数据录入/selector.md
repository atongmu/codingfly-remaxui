---
title: Selector 分类选择器
order: 20
---

## Selector 分类选择器

<code src="./selector/index.tsx" />

## API

#### Selector

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 指定当前选中的条目 | string | [] |
| options | 可选项数据源 | OptionProps | [] |
| style | 自定义 Selector 的样式 | CSSProperties | - |
| onChange | 选中二级节点时调用此函数 | (value: any, valueStr?: string) => void | - |
| onChangeParentOption | 选中一级节点时调用此函数 | (v) => void | - |

#### OptionProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 此项必须设置（其值在整个选项范围内唯一），根据此属性值进行筛选 | string \| number | - |
| text | 值 | string | - |
| children | 子节点 | OptionProps[] | - |
