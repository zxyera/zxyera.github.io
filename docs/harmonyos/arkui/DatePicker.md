# DatePicker 日期选择器

![alt text](../images/datepicker_preview.png)

```ts
DatePicker(options?: {
    start?: Date; // 起始日期
    end?: Date; // 结束日期
    selected?: Date; // 默认选中日期
})
```

## 属性

### 切换农历

lunar 设置是否显示农历

### 消失文字样式

[参考 TimePicker 的样式](./TimePicker.md#消失文字样式)

### 选中文字样式

[参考 TimePicker 的样式](./TimePicker.md#选中文字样式)

### 其它文字样式

[参考 TimePicker 的样式](./TimePicker.md#其它文字样式)

## 事件

[通用事件](./通用事件.md)

日期选择器时间发生变化

```ts
onDateChange(callback: (value: Date) => void)
```
