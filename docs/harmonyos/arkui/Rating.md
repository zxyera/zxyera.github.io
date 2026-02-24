# Rating 评分组件

```ts
(options?: {
    rating: number; // 分数
    indicator?: boolean; // 是否作为指示器，不可通过点击小星星改变分数
})
```

![](../images/rating_preview.png)

## 属性

### 总分

stars 设置总分数，默认只有 5 分（5 个小星星）

```ts
Rating({
  rating: 3,
}).stars(10);
```

![](../images/rating_stars.png)

### 步长

stepSize 设置步长，步长表示分数的最小增长单位。比如设置步长为 0.1，那么 1 个小星星需要增长 10 次才满。比如设置步长为 2，那么增长一步就占用了 2 个小星星。默认步长为 0.5，步长的取值范围是 `[0.1,stars]`

## 样式

自定义小星星图片样式

- backgroundUri：未选中图片链接
- foregroundUri：已选中图片链接
- secondaryUri：不分选中图片链接
