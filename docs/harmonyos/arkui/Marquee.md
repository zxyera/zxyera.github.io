# Marquee 跑马灯

跑马灯组件，是一个单行文本，当文本宽度超过了组件的宽度时，文本水平滚动。

```ts
Marquee(value: {
    start: boolean; // 控制是否开始播放
    step?: number; // 滚动步长，可以控制滚动速率
    loop?: number; // 循环滚动的次数，小于0时表示无限次数滚动
    fromStart?: boolean; // 正向滚动或反向滚动
    src: string; // 滚动的文本
})
```

![alt text](../images/marquee_preview.gif)

## 属性

支持文本通用属性

## 事件

### 开始滚动

`onStart:(event: () => void)` 开始滚动时回调。

### 单次滚动结束

`onBounce(event: () => void)` 完成一次滚动触发一次，多次完成会触发多次。

### 滚动结束

`onFinish(event: () => void)` 当所有次数都滚动结束时触发

## 示例

```ts
Marquee({
  start: this.start,
  step: 10,
  loop: 3,
  fromStart: true,
  src: "HarmonyOS NEXT学习手册",
})
  .backgroundColor(Color.Black)
  .fontSize(30)
  .fontColor(Color.White)
  .fontWeight(FontWeight.Bold)
  .onStart(() => {
    console.log("开始滚动");
  })
  .onBounce(() => {
    console.log("单次滚动结束");
  })
  .onFinish(() => {
    console.log("滚动结束");
  });
```

![alt text](../images/marquee_example.gif)
