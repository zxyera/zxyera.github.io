# Kotlin 标准库方法

## run

```kotlin
public inline fun <R> run(block: () -> R): R {
    return block()
}

public inline fun <T, R> T.run(block: T.() -> R): R {
    return block()
}
```

分为 run 和 T.run，一个是类似于静态方法，一个是对象的扩展方法。他们的功能相同，都是提供一个代码块执行一些逻辑并带有一个返回值。

run 方法在使用时使用的是 kotlin.run {}，而 T.run 在类中使用的方式是 run {}。

它们的返回值是代码块中的最后一行或者显示指明 return@run，注意这里是 return@run 而不是 return

```kotlin
val r = run {
   100 // 正确方式
}

val r = run {
    return@run 100 // 正确方式
}

val r = run {
    return 100 // 错误方式
}
```

## with

```kotlin
public inline fun <T, R> with(receiver: T, block: T.() -> R): R {
    return receiver.block()
}
```

和 T.run 类似，但是 with 是将 T 的扩展函数变为参数，也是带一个返回值，与 run 的返回值一致

```kotlin
with(对象) {
    直接调用对象的方法
}
```

## apply

```kotlin
public inline fun <T> T.apply(block: T.() -> Unit): T {
    block()
    return this
}
```

T 对象的扩展方法，返回值是当前的 T 对象。block 参数也是 T 对象的方法，方法块中以 this 访问当前 T 对象

## also

```kotlin
public inline fun <T> T.also(block: (T) -> Unit): T {
    block(this)
    return this
}
```

T 对象的扩展方法，也是返回当前 T 对象，与 apply 不同的是 block 函数参数是以参数的形式传进来的而不是以对象扩展的方式，代码块中以 it 访问当前 T 对象

## let

```kotlin
public inline fun <T, R> T.let(block: (T) -> R): R {
    return block(this)
}
```

T 对象的扩展方法，和 also 一样，block 参数也是以参数的形式传递进来的，因此代码块中也是用 it 来访问当前 T 对象，不同的是返回值是 R 类型，返回值类型与上面的 run 规则一致

条条道路通罗马，虽然方法很多，对于同一个需求每个扩展方法都能实现，只是每个方法的繁简程度不一致，因此对于不同的需求应该选用合适的，没有哪一种方法更好地说法。

## 对比

假设对于往 Bundle 中添加数据并返回 Bundle 对象的需求，以下是每个方法的实现方式

::: code-group

```kotlin [run]
val r1: Bundle = kotlin.run {
    val bundle = Bundle()
    bundle.putString("name", "n")
    bundle.putString("psd", "p")
    bundle
}
```

```kotlin [T.run]
val r2: Bundle = Bundle().run {
    putString("name", "n")
    putString("psd", "p")
    return@run this
}
```

```kotlin [with]
val r3: Bundle = with(Bundle()) {
    putString("name", "n")
    putString("psd", "p")
    this
}
```

```kotlin [apply]
val r4: Bundle = Bundle().apply {
    putString("name", "n")
    putString("psd", "p")
}
```

```kotlin [also]
val r5: Bundle = Bundle().also {
    it.putString("name", "n")
    it.putString("psd", "p")
}
```

```kotlin [let]
val r6: Bundle = Bundle().let {
    it.putString("name", "n")
    it.putString("psd", "p")
    it
}
```

:::

## takeIf

```kotlin
public inline fun <T> T.takeIf(predicate: (T) -> Boolean): T? {
    return if (predicate(this)) this else null
}
```

T 对象的扩展方法，函数参数返回值为 true 时返回当前 T 对象，否则返回 null。

## takeUnless

```kotlin
public inline fun <T> T.takeUnless(predicate: (T) -> Boolean): T? {
    return if (!predicate(this)) this else null
}
```

与 takeIf 相反。

## repeat

```kotlin
public inline fun repeat(times: Int, action: (Int) -> Unit) {
    for (index in 0 until times) {
        action(index)
    }
}
```

重复执行指定次数的操作。
