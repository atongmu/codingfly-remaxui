---
title: Calendar    日历
order: 1
---

## Calendar 日历

<code src="./calendar/index.tsx" />

## API

#### Calendar

| 属性 | 说明     | 类型    | 默认值 |
| ---- | -------- | ------- | ------ |
| show | 是否显示 | boolean | false  |
| defaultDate | 是否显示 | string（2020-12-12） | 当天  |
| onClose | 关闭事件 | () => void | - |
| onChange | 获取选中时间事件 | (v) => void | - |
