---
category: Layout
title: 列表
desc: 单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表
---

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表。

<DEMO>

List

| 参数         | 说明            | 类型      | 默认值   |
| ------------ | --------------- | --------- | -------- |
| prefixCls    | 组件 class 前缀 | string    | Yep-list |
| style        | 组件样式        | object    | {}       |
| className    | 组件额外样式    | string    | -        |
| renderHeader | list 的头部     | func/node | -        |
| renderFooter | list 的底部     | func/node | -        |

List.Item

| 参数         | 说明                                        | 类型                 | 默认值        |
| ------------ | ------------------------------------------- | -------------------- | ------------- |
| prefixCls    | 组件 class 前缀                             | string               | Yep-list-item |
| style        | 组件样式                                    | object               | {}            |
| className    | 组件额外样式                                | string               | -             |
| thumb        | 缩略图(当为 string 类型时作为 img src)      | string/node          | -             |
| extra        | 右边内容                                    | String/React.Element | 无            |
| icon         | 右侧图标，true 为右箭头，也可以是自定义组件 | Boolean/Node         | 无            |
| align        | 子元素垂直对齐，可选`top`,`middle`,`bottom` | String               | `middle`      |
| onClick      | 点击事件的回调函数                          | (): void             | 无            |
| error        | 报错样式,右侧文字颜色变成橙色               | Boolean              | `false`       |
| multipleLine | 多行                                        | Boolean              | `false`       |
| wrap         | 是否换行，默认情况下，文字超长会被隐藏，    | Boolean              | `false`       |
| activeStyle  | 自定义 active 的样式                        | Object               | -             |

List.Brief 辅助说明

| 参数      | 说明            | 类型   | 默认值   |
| --------- | --------------- | ------ | -------- |
| prefixCls | 组件 class 前缀 | string | Yep-list |
| style     | 组件样式        | object | {}       |
| children  | 辅助说明文本    | string | -        |
