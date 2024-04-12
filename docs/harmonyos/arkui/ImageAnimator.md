# 图片帧动画 ImageAnimator

给一系列图片设置逐帧动画。

## 属性

### 图片源

images 设置帧动画的图片源，是一个数组，数组的每个元素就是动画的一帧。数组元素是 ImageFrameInfo 类型。

### 播放状态

state 设置动画播放状态，默认状态是 AnimationStatus.Initial。

- Initial：初始状态
- Running：动画运行状态
- Paused：暂停播放状态
- Stopped：停止播放状态

### 播放时长

duration 设置动画播放时长，单位毫秒。

### 翻转播放

reverse 设置播放方向。默认 false，表示从第一张图片开始播放，一直到最后一张图片。true 就反过来从最后一张图片开始播放。

### 固定尺寸

设置图片尺寸与组件尺寸一样大。默认是 true，表示一样大。

### 结束状态

fillMode 设置动画开始前和结束后的状态。即播放前后停留在哪一帧上。

- None：动画播放结束后恢复到初始状态
- Forwards：动画结束后停留在最后一帧
- Backwards：动画结束停留在第一帧
- Both：动画开始前停留在第一帧，动画结束后停留在最后一帧

### 播放次数

interations 设置动画播放次数，默认播放一次，-1 表示不限次数播放。

### ImageFrameInfo

| 属性     | 类型            | 说明                                       |
| -------- | --------------- | ------------------------------------------ |
| src      | string/Resource | 图片源                                     |
| width    | number/string   | 图片宽度                                   |
| height   | number/string   | 图片高度                                   |
| top      | number/string   | 图片相左上角相对于组件顶部的距离           |
| left     | number/string   | 图片相左上角相对于组件左侧的距离           |
| duration | number          | 当前帧的动画长，会覆盖组件的 duration 属性 |

::: details 展开查看代码详情

```ts
ImageAnimator()
  .size({
    width: 200,
    height: 100,
  })
  .images([
    {
      src: $r("app.media.app_icon"),
      width: 200,
      height: 100,
      top: 0,
      left: 0,
      duration: 300,
    },
    {
      src: $r("app.media.img"),
      width: 200,
      height: 100,
      top: 0,
      left: 0,
      duration: 300,
    },
  ])
  .duration(3000)
  .fillMode(FillMode.None)
  .fixedSize(true) // 固定和组件大小一样
  .reverse(false) // 不翻转
  .state(AnimationStatus.Running) // 开始动画
  .iterations(-1); // 无限次播放
```

:::
![alt text](../images/imageanimator_prop.gif)

## 事件

[通用事件](./通用事件.md)

除了支持通用事件以外，还有对动画状态监听事件。

- onStart：动画开始播放回调
- onPause：动画暂停播放回调
- onRepeat：动画重复播放回调
- onCancel：动画返回最初状态回调
- onFinish：动画播放完成或停止播放回调

```ts
ImageAnimator()
  .size({
    width: 200,
    height: 100,
  })
  .images([
    {
      src: $r("app.media.app_icon"),
      width: 200,
      height: 100,
      top: 0,
      left: 0,
      duration: 300,
    },
    {
      src: $r("app.media.img"),
      width: 200,
      height: 100,
      top: 0,
      left: 0,
      duration: 300,
    },
  ])
  .duration(3000)
  .fillMode(FillMode.Backwards)
  .fixedSize(true)
  .reverse(false)
  .state(AnimationStatus.Running)
  .iterations(1)
  .onStart(() => {
    console.log("onStart");
  })
  .onPause(() => {
    console.log("onPause");
  })
  .onRepeat(() => {
    console.log("onRepeat");
  })
  .onCancel(() => {
    console.log("onCancel");
  })
  .onFinish(() => {
    console.log("onFinish");
  });
```
