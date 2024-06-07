# QRCode 二维码

给定一个字符串，为此字符串生成一个二维码。最大支持 256 个字符的字符串，超出部分会被裁剪。

```ts
QRCode(value: string)
```

![alt text](../images/qrcode_preview.png)

## 属性

### 二维码颜色

color 设置二维码颜色，默认是黑色。

```ts
QRCode("HarmonyOS NEXT学习手册HarmonyOS").color(Color.Brown);
```

![alt text](../images/qrcode_color.png)

### 二维码背景颜色

backgroundColor 设置二维码背景颜色

```ts
QRCode("HarmonyOS NEXT学习手册HarmonyOS").backgroundColor(Color.Grey);
```

![alt text](../images/qrcode_backgroundcolor.png)

### 二维码不透明度

contentOpacity 设置二维码的不透明度，默认是 1，不透明

```ts
QRCode("HarmonyOS NEXT学习手册HarmonyOS").contentOpacity(0.5);
```

![alt text](../images/qrcode_contentopacity.png)
