# Divider 分割线

用于对组件的分割。

## 属性

### 分割线方向

vertical 指定分割线的方向，true 表示垂直分割线，一般用于水平排列的组件中的分割，false 表示水平分割线，一般用于垂直排列的组件中的分割。

### 分割线颜色

color 设置分割线的颜色。

### 分割线宽度

strokeWidth 设置分割线宽度。不支持百分比设置。

### 分割线端点样式

lineCap 设置分割线端点样式。

- LineCapStyle.Butt：平头，不向两端延伸
- LineCapStyle.Round：圆角，向两端延伸个半圆形，半圆直径为线宽
- LineCapStyle.Square：矩形，向两端延伸一个矩形，矩形的宽度等于线宽的一半，高度等于线宽

```ts
Divider()
  .padding(10)
  .vertical(false)
  .color(Color.Red)
  .strokeWidth(10)
  .lineCap(LineCapStyle.Butt);
Divider()
  .padding(10)
  .vertical(false)
  .color(Color.Red)
  .strokeWidth(10)
  .lineCap(LineCapStyle.Round);
Divider()
  .padding(10)
  .vertical(false)
  .color(Color.Red)
  .strokeWidth(10)
  .lineCap(LineCapStyle.Square);
```

![alt text](../images/divider_prop.png)
