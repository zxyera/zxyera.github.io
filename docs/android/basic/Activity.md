# Activity

## 定义与作用

最常用的四大组件之一，提供能够与用户直接交互的界面能力，界面上能看到的一个页面就是一个 Activity。应用中的多个界面就是多个 Activity，每个 Activity 相对独立，可以通过一个 Activity 启动另一个 Activity 来建立关联。

使用 Activity 必须要在 AndroidManifest.xml 中注册，不仅是 Activity，四大组件都需要注册。

```xml
<manifest>
    <application>
        <activity android:name=".MainActivity" />
    </application>
</manifest>
```

## 生命周期

### 生命周期回调函数

Activity 的生命周期函数有 7 种：onCreate()、onStart()、onResume()、onPause()、onStop()、onRestart()、onDestroy()。

- onCreate：必须要实现的方法，Activity 被创建时回调的方法。
- onStart：Activity 创建完成后，会进入下一个对用户可见的状态，但此时还不能与用户进行交互。
- onResume：当系统完全准备好后，就可以与用户进行交互了，表示对用户可见并且可交互，每次 Activity 由不可见变为可见状态时都会回调该方法。
- onPause：Activity 失去焦点后处于暂停状态。此时 Activity 还可见，但是不能进行交互了。
- onStop：进入停止状态，Activity 不可见。可能是 Activity 正在被销毁或者启动了一个新的 Activity。
- onRestart：处于停止状态的 Activity 恢复到可见状态。
- onDestroy：Activity 被销毁。

### 生命周期状态流转图

根据 7 个生命周期 7 个回调函数的定义可以将 Activity 分为 CREATED、STARTED、RESUMED、PAUSED、STOPPED、DESTROYED 这 6 种状态。
![alt text](../../images/activity_status_turn.png)

## 启动模式

standard（标准模式）、singleTask（栈内模式）、singleTop（栈顶模式）、singleInstance（单例模式）、singleInstancePerTask（单例模式，安卓 12 新增）

> adb shell dumpsys activity activities 命令抓取 acivity 栈信息

### standard（标准模式）

默认的一种模式，每次启动 activity 时都会在栈内新建一个该 activity 的实例，不管该 activity 是否启动过。
![alt text](../../images/activity_mode_standard.png)

### singleInstance（单例模式）

单独存放到一个独立的栈中，该栈中不能再放其它的 activity 实例了。
![alt text](../../images/activity_mode_singleinstance.png)

### singleTop（栈顶模式）

要启动的 Activity 如果在栈顶就复用，否则新建一个。
![alt text](../../images/activity_mode_singletop.png)

### singleTask（栈内模式）

不管是不是在栈顶，只要栈内有要启动 Activity 的实例都复用，并且会清空该实例上面的实例。是 singleTop 的升级版。
![alt text](../../images/activity_mode_singletask.png)

### singleInstancePerTask（栈内单例模式，安卓 12 新增）

属于 singleInstance 和 singleTask 的结合体，结合了它们的特性：

- 启动了该模式的 Activity，会新开一个栈，该栈只会存在一个该实例。但该实例只能在栈底
- 再次启动该 Activity，会复用并移出它上面的所有实例，与 singleTask 特性一致
- 搭配 FLAG_ACTIVITY_MULTIPLE_TASK 或 FLAG_ACTIVITY_NEW_DOCUMENT 使用可以在不同的栈新建不同的实例
  ![alt text](../../images/activity_mode_singleinstancepertask.png)

### taskAffinity

表示 Activity 的任务栈相关性，一个 activity 被启动，会进入到哪个栈中，和该属性有关。单独给 activity 设置 taskAffinity 是无效的，必须要配合 Intent.FLAG_ACTIVITY_NEW_TASK 或者 allowTaskReparenting 使用才有效。activity 默认的 taskAffinity 的值与 Application 的一致，如果 Application 没有指定，那么就与包名一致。

想要启动的 activity 处于不同的栈中，必须要满足：

1. 给待启动的 activity 设置与 Application 的 taskAffinity 不同的值（如果 Application 未设置，就要和包名不一致）
2. 启动 activity 时设置 flags = FLAG_ACTIVITY_NEW_TASK

> 如果未指定 FLAG_ACTIVITY_NEW_TASK，无论是否设置 taskAffinity，设置的值是否和包名不一致，都不能生效。
> 注意：如果启动模式指定为 singleInstance，那么即使什么都不设置，都会在一个新的栈中，因为该启动模式的设计就是如此。

> allowTaskReparenting 貌似要在按了 HOME 键后，再次启动才会看到效果，暂时还没研究。

示例：
假设现有 Activity1、Activity2 和 Activity3，启动顺序是 Activity1 启动 Activity2，Activity2 启动 Activity3，现想要 Activity 在一个新的任务栈中

activity 注册且设置 taskAffinity

```xml
<menifest>
    <application>
        <activity android:name="Activity1">
        <!-- 给 Activity2 设置 taskAffinity，不与包名相同 -->
        <activity android:name="Activity2" android:taskAffinity="com.task222">
        <activity android:name="Activity3">
    </application>
</menifest>
```

跳转

```kotlin
fun Activity.launch(clazz: Class<out Activity>, flag: Int) {
    startActivity(Intent(this, clazz).apply {
        flags = flag
    })
}

class Activity1 : AppcompatActivity() {
    fun onCreate(bundle: Bundle?) {
        button.onClick{
            // 跳转设置flag
            launch(Activity2::class.java, Intent.FLAG_ACTIVITY_NEW_TASK)
        }
    }
}

class Activity2 : AppcompatActivity() {
    fun onCreate(bundle: Bundle?) {
        button.onClick{
            // 跳转设置flag
            launch(Activity3::class.java)
        }
    }
}
```

Activity1 跳转到 Activity2，设置了 Flag 为 FLAG_ACTIVITY_NEW_TASK，且在 xml 中设置的 taskAffinity 与包名不同，因此 Activity2 处于一个新的任务栈，与 Activity1 不在同一个任务栈中。而 Activity3 因为是被 Activity2 启动的，因此 Activity3 会和 Activity2 处于新的栈中。

## Intent 过滤器 IntentFilter

隐式启动没有指定跳转哪个 Activity，因此需要过滤器过滤哪个 Activity 设置的过滤条件附件跳转的条件。有 action、category 和 data 可以设置。

其中 action 和 category 是必填，action 是一个字符串，可以填任意的字符串，只要能和 Intent.setAction 设置的 action 字符串能够匹配上就行。category 也是一个字符串，必须要提供一个默认的 category
（android.intent.category.DEFAULT）。

- 如果 Intent 中只设置了 action，那么 intent-filter 中必须要设置同样的 action 以及默认的 category
- 如果 intent-filter 添加了除了默认 category 之外的 category，那么 Intent 中也必须添加同样的 category

如果没有匹配上，直接跳转会闪退，可以在跳转之前进行判断有没有 Activity 处理该 Intent，没有的话就不跳转。

```kotlin
val result = intent.resolveActivity(packageManager)
// 如果 result 为空，说明没有 Activity 处理该 Intent，就不必 startActivity 了
```

另外一个 data 是可选的，但是如果在 Intent 中设置了 data，那么 intent-filter 中就一定要设置 setDataAndType。
