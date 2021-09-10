---
title: Textarea    文本框
order: 6
---

## Textarea 文本框

<code src="./textarea/index.tsx" />

## API

#### Textarea

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 输入框内容 | string | - |
| name | 组件名称，用于表单提交获取数据 | string | - |
| size | 输入框大小 | `large` \| `middle` \| `small` | - |
| disabled | 是否禁用 | boolean | false |
| focus | 获取焦点 | boolean | false |
| autoHeight | 是否自动增高 | boolean | false |
| maxLength | 最大输入长度 | number | - |
| rows | 行数 | number | - |
| placeholder | 占位提示文字 | string | - |
| className | 输入框包裹层的类名 | string | - |
| onChange | value 改变时触发 change 事件 | (v) => void | - |
| onFocus | 聚焦时触发 | (v) => void | - |
| onBlur | 失去焦点时触发 | (v) => void | - |
