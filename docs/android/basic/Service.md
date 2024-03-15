# Service

## 简介

服务是一种没有用户界面的组件，分为前台服务和后台服务。启动方式又分为启动（startService）和绑定（bindService）。

- startService：服务启动后与 UI 没有交互，通过 stopService 停止
- bindService：与 activity 进行绑定，绑定后可以与 activity 进行交互，通过 unbindService 解绑，不然可能会导致 activity 泄漏

服务依旧是运行在主线程中，如果需要在服务中执行比较繁重的耗时任务的话，需要启动一个线程去执行。或者使用 IntentService/JobIntentService/WorkManager

使用 Service 需要实现一个类继承 Service，重写 Service 中的几个方法

- onCreate：创建 Service，对于一个 Service 对象来说只会执行一次
- onStartCommand：通过 startService 方式启动 Service 时由系统回调，多次调用 startService 会回调多次，每次的 startId 会自增
- onDestroy：Service 销毁时调用，stopService/stopSelf 或者是 unbindService 时回调
- onBind：通过 bindService 绑定 Service 时回调

## 启动方式

```kotlin
class MyService : Service() {
    override fun onBind(intent: Intent?): IBinder? {
        println("MyService : onBind")
        return null
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        println("MyService : onStartCommand - flags = $flags , startId = $startId")
        return super.onStartCommand(intent, flags, startId)
    }

    override fun onCreate() {
        super.onCreate()
        println("MyService : onCreate - thread = ${Thread.currentThread().name}")
    }

    override fun onDestroy() {
        super.onDestroy()
        println("MyService : onDestroy")
    }

    override fun onUnbind(intent: Intent?): Boolean {
        println("MyService : onUnbind")
        return super.onUnbind(intent)
    }
}
```

作为四大组件之一，需要在 AndroidManifest.xml 文件中注册

```xml
<application>
    <service android:name=".MyService" />
</application>
```

### startService

```kotlin
// 启动服务，可多次调用
startService(Intent(this, MyService::class.java))
// 停止服务
stopService(Intent(this, MyService::class.java))
```

第一次启动会执行到 onCreate()、onStartCommand()方法，再次启动只会回调 onStartCommand 方法而不会再次回调 onCreate 方法，再次回调有一个区别就是每次回调，onStartCommand 方法的最后一个参数 startId 会自增 1，第一次 startId 是 1，第二次是 2，以此类推。

<font color='orange'>停止服务使用 stopService，无论调用了多少次 startService，只需要调用一次 stopService 或者 stopSelf 即可停止该 Service。</font>

在 API26（安卓 8）之后，系统对服务做了限制，如果 app 一直运行在前台，那么使用 startService 来启动服务那是没有问题的，但是如果使用 startService，app 却切到了后台，那么系统就会在一段时间内（差不多 10 秒）终止服务。为了避免这种情况，应该需要使用 `startForegroundService` 来启动服务。

```kotlin
val intent = Intent(this, MyService::class.java)
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
    startForegroundService(intent)
} else {
    startService(intent)
}

class MyService : Service() {
    override fun onCreate() {
        super.onCreate()
        startForeground(100, notification) // API26 之后必须要调用此方法
    }
}
```

但是使用 startForegroundService 启动服务需要 android.permission.FOREGROUND_SERVICE 权限，并且在服务启动 5 秒内调用 startForeground(int id, Notification notification)方法，否则会闪退，第一个参数的 id 不可为 0，第二个参数是一个通知，需要显示一个通知在通知栏上。

而在 API31（安卓 12）之后，系统又对前台服务做了限制，当 app 处于后台时，无法启动前台服务。如果需要在 app 处于后台时做一些工作，应该使用 WorkManager。

#### stopSelf、stopSelf(int startId)、stopSelfResult(int startId)

在 Service 内部也可以将 Service 自身杀死，使用 stopSelf，它还有个重载方法 stopSelf(int startId)，并且还有一个带返回值的方法 stopSelfResult(int startId)

- stopSelf：结束自身，效果与 stopService 一致
- stopSelf(int startId)：重复启动时 startId 会自增，如果 stopSelf 中的 startId 与当前启动的 startId 不同，那就不会结束服务
- stopSelfResult(int startId)：作用与 stopSelf(int startId)相同，只是该方法带有表示结束 Service 的结果返回值

### bindService

绑定服务相对于启动服务来说更为复杂一点，因为需要和 Activity 交互（这里的交互不一定是指和 UI 相关，也可能是 Activity 需要调用到 Service 的某些方法），因此在服务启动成功后，activity 需要拿到 service 的对象。绑定服务通过 bindService 来实现，并且在自定义 Service 类中实现一个继承自 Binder 类的内部类，用于获取 Service 对象。

```kotlin
// 绑定服务，可多次调用
val intent = Intent(this, MyService::class.java)
bindService(intent, connection, Service.BIND_AUTO_CREATE)
// 解绑服务
unbindService(connection)

private val connection = object : ServiceConnection {
    override fun onServiceConnected(name: ComponentName?, binder: IBinder) {
        val service = (binder as MyService.MyBinder).getService()
        println("onServiceConnected : service = $service")
    }

    override fun onServiceDisconnected(name: ComponentName?) {
        println("onServiceDisconnected")
    }
}

class MyService : Service() {
    override fun onBind(intent: Intent?): IBinder {
        println("MyService : onBind")
        return MyBinder()
    }

    inner class MyBinder : Binder() {
        fun getService() = this@MyService
    }
}
```

通过 bindService 后，会回调 onCreate 方法以及 onBind 方法，这 2 个方法只会回调一次，多次调用 bindService 不会多次触发。使用 unbindService 解绑，解绑后会执行 unbind 方法和 onDestroy 方法销毁 Service。

> 当页面退出，应当使用 unbindService 将 Service 与 Activity 解绑，不然会导致 Activity 泄漏无法回收

### startService + bindService

两种启动方式的使用场景有所不同，它们也可以结合使用，但当一个服务通过这两种方式启动了之后，必须要一起使用 stopService 和 unbindService 才能真正销毁 Service。

## 使用场景

- 需要后台长时间运行，即使页面退出也需要运行，不需要与 Activity 交互，选 startService
- 只在当前页面短时间使用，页面退出后就不需要了，并且与 Activity 交互，选 bindService
- 在当前页面需要长时间后台运行，而同时又与 Activity 有交互，选 startService + bindService

认准一个准则：只要 Activity 退出，一定要解绑 Service。

## 生命周期

![alt text](../../images/service_lifecycle.png)
