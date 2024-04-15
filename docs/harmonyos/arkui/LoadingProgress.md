# LoadingProgress

加载中的 loading 动画组件。

## 属性

### 颜色

color 设置组件的颜色。

### 组件是否可见

enableLoading 设置动画组件是否可见，不可见时依然会占位。与 Visibility.Hidden 的区别在于该属性只隐藏动画组件本身，而不会隐藏组件的 border、padding 等。

## 事件

[通用事件](./通用事件.md)

```ts
LoadingProgress()
  .size({ width: 100, height: 100 })
  .color(Color.Orange)
  .enableLoading(true);
```

![alt text](../images/loadingprogress.gif)
