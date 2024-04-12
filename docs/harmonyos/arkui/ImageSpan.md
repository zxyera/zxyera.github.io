# ImageSpan

作为 Text 或者 ContainerSpan 的子组件，用于显示行内图片，类似于富文本显示。

```ts
ImageSpan(value: ResourceStr | PixelMap):
```

## 属性

支持[通用属性](./通用属性.md)的尺寸设置、背景设置和边框设置。

### 垂直对齐方向

verticalAlign 设置图片基于文本的对齐方向。

- TOP：和文本顶部对齐
- CENTER：和文本垂直居中对齐
- BOTTOM：和文本底部对齐，比可以看见的文字更低
- BASELINE：和文本基准线对齐

### 图片填充

与 Image 组件的[图片填充](./Image.md#图片填充)类型一致。

### 背景样式

设置 ImageSpan 组件的背景色以及背景圆角。

```ts
Text() {
    Span('窗前明月光').fontSize(40)
    ImageSpan($r('app.media.img')).width(20).height(20).verticalAlign(ImageSpanAlignment.TOP)
    Span('\n疑是地上霜').fontSize(40)
    ImageSpan($r('app.media.img')).width(20).height(20).verticalAlign(ImageSpanAlignment.CENTER)
    Span('\n举头望明月').fontSize(40)
    ImageSpan($r('app.media.img')).width(20).height(20).verticalAlign(ImageSpanAlignment.BOTTOM)
    Span('\n低头思故乡').fontSize(40)
    ImageSpan($r('app.media.img')).width(20).height(20).verticalAlign(ImageSpanAlignment.BASELINE)
        .textBackgroundStyle({ color: Color.Red, radius: 20 })
}
```

![alt text](../images/imagespan_prop.png)

## 事件

支持通用事件的[点击事件](./通用事件.md#点击事件)
