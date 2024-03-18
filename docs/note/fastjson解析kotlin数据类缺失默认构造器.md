# fastjson 解析 kotlin 数据类缺失默认构造器

使用 fastjson 解析 json 数据转成实体类时，需要指定一个默认构造函数。
可以给 kotlin 的数据类的每个字段指定默认值。

```kotlin
data class StreamInfoEntity(
    val liveId: String = "",
    val roomId: String = "",
    val shareScreenStreamId: String? = null,
    val studentSubscribeVideoStream: String?
)
```

不过光加默认值还是不够的，fastjson 通过反射获取 kotlin 的构造函数，需要加上

```groovy
implementation "org.jetbrains.kotlin:kotlin-reflect:$kotlin_version"
```
