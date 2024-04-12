# CheckBox 多选框

```ts
CheckBox(options?: {name?: string, group?: string})
```

- name：多选框的名称（不是显示在页面上的文本）
- group：多选框所属的组

## 属性

[通用属性](./通用属性.md)

### 选中状态

select 是否选中状态，默认不选中。

### 选中状态颜色

selectedColor 设置选中状态的边框颜色

### 未选中状态颜色

unselectedColor 设置未选中状态的边框颜色

### 图标样式

markStype 设置多选框内部图标样式（选中状态里面那个 √ 的样式）。可以设置颜色、粗细和大小。

### 形状

设置多选框的形状，圆形或者是圆角方形。`CheckBoxShape.CIRCLE` 或 `CheckBoxShape.ROUNDED_SQUARE`

```ts
Checkbox({ name: "同意" })
  .selectedColor(Color.Red)
  .unselectedColor(Color.Green)
  .mark({
    strokeColor: Color.Orange,
    strokeWidth: 3,
    size: 10,
  })
  .shape(CheckBoxShape.ROUNDED_SQUARE);
```

![alt text](../images/checkbox_prop.png)

## 事件

除了支持通用事件外，还支持 onChange 事件，监听选中状态。

```ts
onChange(callback: (value: boolean) => void)
```

value 为 true 表示选中。
