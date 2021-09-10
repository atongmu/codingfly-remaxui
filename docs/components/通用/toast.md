---
title: Toast 轻提示
order: 20
---

## Toast 轻提示

<code src="./toast/index.tsx" />

## API

- Toast.success(content, duration, onClose, mask)

- Toast.fail(content, duration, onClose, mask)

- Toast.info(content, duration, onClose, mask)

- Toast.loading(content, duration, onClose, mask)

- Toast.offline(content, duration, onClose, mask)

| 属性     | 说明                   | 类型       | 默认值 |
| -------- | ---------------------- | ---------- | ------ |
| content  | 提示内容               | string     | false  |
| mask     | 是否显示遮罩层         | boolean    | false  |
| duration | 自动关闭的延时，单位秒 | number     | 3      |
| onClose  | 关闭弹出层时触发       | () => void | -      |
