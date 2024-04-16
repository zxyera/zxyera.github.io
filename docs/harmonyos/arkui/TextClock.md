# TextClock 文本时钟

```ts
TextClock(options?: {
    timeZoneOffset?: number;
    controller?: TextClockController;
})
```

- timeZoneOffset：时区偏移量，取值范围 `[-14,12]` ，表示东十二区到西十二区。
- controller：控制器，控制时钟的开始和停止。

## 属性

### 时间格式
