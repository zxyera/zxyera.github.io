# 文本框 Text

显示文本信息，可以设置 `Span` 、 `ImageSpan` 、 `SymbolSpan` 和 `ContainerSpan` 作为子组件。

```ts
Text((content?: string | Resource, value?: TextOptions))
```

`content` 传入显示的文本，可以是字符串字面量以及字符串类型的资源类型。 `value` 中可以设置 `TextController` 。

## 文本属性

### 字体颜色

`fontColor` 设置文本颜色，参数可以传入系统的 `Color` ，如 `Color.Red` ，或者是资源类型，如 `$r('app.color.red')` ，以及字符串的十六进制颜色值，如 `'#FF0000'`。

### 字体大小

```ts
Text("FontSize").fontSize(12);
```

### 字体样式

设置字体样式，有正常 `Normal` 和斜体 `Italic`

```ts
Text("FontStyle").fontStyle(FontStyle.Italic);
```

### 字体粗细

设置文字粗细，数值类型或 `FontWeight` 类型，数值类型的范围是 `100 ~ 900` ，默认 400。 FontWeight 可以设置 FontWeight.Bold 等。

```ts
Text("FontWeight").fontWeight(FontWeight.Bold);
```

### 字体

设置字体

```ts
Font("FontFamily").fontFamily(xxx);
```

### 合并设置

font 可以分别指定文字大小、字体和样式

```ts
Text("font").font({
  size: 12,
  family: "",
  weight: FontWeight.Normal,
  style: FontStyle.Italic,
});
```

### 水平对齐方向

设置文本在水平方向的对齐方向，有 `Start` 、 `Center` 、 `End` 和 `JUSTIFY` 四种。

- Start： 文本靠左侧显示
- Center：文本水平居中显示
- End： 文本靠右侧显示
- JUSTIFY： 在文本超过一行时，除开最后一行，其它行的文本两端对齐。比如英文段落，单词的长短不一，当行的剩余空间不够放下一个单词时，这个单词就会放在下一行，然后行尾留有空白。设置了这个属性后，会保证行的两头不会留白。

### 文本溢出

当文本超过指定行数时的处理方式。需要配合 `maxLines` 使用。

- None：直接截断，超出部分不显示
- Clip：与 None 效果一致
- Ellipsis：超出文本用省略号代替，省略号的位置默认在尾部，也可以设置在头部或中间显示
- MARQUEE：跑马灯滚动显示，设置成跑马灯时，maxLines 失效。

### 最大行数

`maxLines` 设置文本最大能显示的行数，超过的部分通过 textOverflow 来指定处理方式。

### 行高

`lineHeight` 设置每一行的高度。如果使用资源类型的话，应该在 `'app.float.xx'` 中指定单位为 `fp`。

### 文本装饰

设置文本的装饰样式，如设置文本的下划线、删除线以及其颜色。

```ts
Text("decoration").decoration({
  type: TextDecorationType.Underline,
  color: Color.Red,
});
```

- Underline：下划线，在每行文本的下方
- Overline：上划线，在每行文本的上方
- LineThrough：删除线，在每行文本的中间
- None：没有效果

### 基准线偏移量

设置基准线的偏移量，参数为正值时，基准线往上移，为负值时，基准线往下移。

```ts
Text("baselineOffset").baselineOffset(30);
```

![alt text](../images/text_baselineoffset.png)

如上图，假设默认的基准线是绿线所在的位置，在设置了 `baselineOffset` 为 30 后，基准线就到了红线的位置，且文本会往上移。

### 字符间距

设置每个字符的间距。

```ts
Text("letter spacing").letterSpacing(10);
```

![alt text](../images/text_letterspacing.png)


