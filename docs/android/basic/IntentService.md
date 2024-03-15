# IntentService

## 简介

IntentService 继承自 Service，所以它是一个 Service，并且它是一个抽象类，所以使用它必须要使用它的子类。

- IntentService 用来处理异步请求，客户端通过 startService 发送请求，请求参数通过 Intent 携带，服务端启动后依次在工作线程中执行请求，执行完成后 stopself 结束自己
- 使用 IntentService 需要继承 IntentService 并重写 onHandleIntent 方法，IntentService 接收到 Intent 后会加载一个工作线程，在工作线程中执行完任务后停止服务
- 所有的请求都只在一个工作线程上执行，并且每次只处理一个请求，所有请求执行完成后才会结束服务
- 在 Android8.0 上，IntentService 受后台限制，大多数情况下最好使用 JobIntentService，而不是 IntentService

通过以上总结，我们就知道了它与 Service 的异同点了。相同点是它们都是服务，不同的是 Service 运行在主线程中，而 IntentService 运行在子线程中；并且 Service 需要手动关闭，而 IntentService 是自动关闭。从本质上说，IntentService 就是一个开启了工作线程的 Service。

## 基本使用

常见一个类继承 IntentService 并实现 onHandleIntent 方法，还要生成构造函数，这个无参构造函数调用父类的一个参数的构造函数，这是必要的。一般地，我们只需要重写 onHandleIntent 这一个方法就可以了。

```java
public class MyIntentService extends IntentService {
        public MyIntentService() {
        super("MIS");
    }

    @Override
    protected void onHandleIntent(@Nullable Intent intent) {

    }
}
```

既然 MyIntentService 也是一个服务，那么肯定是需要在 AndroidManifest.xml 中注册的，然后在 Activity 中启动 MyIntentService。从上面的注释总结可知，IntentService 可以处理多个请求，并且所有请求都在同一个工作线程中处理，那么就多发送几个请求并打印出所在的线程验证一下。

```java
public class MyIntentService extends IntentService {
    public MyIntentService() {
        super("MIS");
        Log.e("MIS", "construct - " + this);
    }

    @Override
    protected void onHandleIntent(@Nullable Intent intent) {
        Log.e("TAG", "params = " + intent.getIntExtra("params", -1) + " , mis =  " + this + " , thread = " + Thread.currentThread().getName());
    }
}

public class MainActivity extends AppcompatActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

            Intent intent = new Intent(this, MyIntentService.class);
            intent.putExtra("params", 1);
            startService(intent);

            Intent intent2 = new Intent(this, MyIntentService.class);
            intent2.putExtra("params", 2);
            startService(intent2);

            Intent intent3 = new Intent(this, MyIntentService.class);
            intent3.putExtra("params", 3);
            startService(intent3);
        }
}
```

上面自定义了一个 MyIntentService 类，并传入线程名为 MIS，同时在构造器中打印了当前对象。然后在 onHandleIntent 方法中打印出了 intent 中的参数、当前对象以及当前线程名。

```
E/IS: construct - com.intentservice.MyIntentService@e01c344
E/TAG: params = 1 , mis = com.intentservice.MyIntentService@e01c344 , thread = IntentService[MIS]
E/TAG: params = 2 , mis = com.intentservice.MyIntentService@e01c344 , thread = IntentService[MIS]
E/TAG: params = 3 , mis = com.intentservice.MyIntentService@e01c344 , thread = IntentService[MIS]
```

从上面打印日志中可以看出，即使 startService 启动了三次，但是只构造了一个 MyIntentService 对象，构造器中只打印了一次。客户端请求了三次，MyIntentService 也接收到了三个请求，而且三次打印出的 mis 对象都是一直的，表明只创建了一个对象，而且三次 thread 的值也是一致的，这也验证了上面的总结，多次请求的处理线程都是同一个工作线程。

## 源码分析

它继承 Service，所以和 Service 的生命周期方法一致，启动后先执行 onCreate 方法。

```java
@Override
public void onCreate() {
    super.onCreate();
    HandlerThread thread = new HandlerThread("IntentService[" + mName + "]");
    thread.start();

    mServiceLooper = thread.getLooper();
    mServiceHandler = new ServiceHandler(mServiceLooper);
}
```

该方法中创建了一个 HandlerThread 对象，将 MyIntentService 构造函数传进来的名字用来构造工作线程的名字，此处的名字是 IntentService[MIS]，然后启动线程。接着从 HandlerThread 对象中获取到 Looper 对象 mServiceLooper，并创建一个 ServiceHandler 对象。

然后就执行到了 onStartCommand 方法，来看看 onStartCommand 做了什么。

```java
@Override
public int onStartCommand(@Nullable Intent intent, int flags, int startId) {
    onStart(intent, startId);
    return mRedelivery ? START_REDELIVER_INTENT : START_NOT_STICKY;
}
```

这个方法实现比较简单，就调用了自身的 onStart 方法，然后返回了一个 int 值。返回的值受 mRedelivery 变量影响，这个变量由 setIntentRedelivery 方法设置，默认为 false。如果为 true，则返回 START_REDELIVERY，表示粘性，当服务被杀死会再次重新启动；否则返回 START_NOT_STICKY，表示不重新启动。

接着看看 onStart 方法中做了什么

```java
@Override
public void onStart(@Nullable Intent intent, int startId) {
    Message msg = mServiceHandler.obtainMessage();
    msg.arg1 = startId;
    msg.obj = intent;
    mServiceHandler.sendMessage(msg);
}
```

在 onCreate 方法中创建了 mServiceHandler 对象，然后从 mServiceHandler 对象中获取到一个 msg 对象，并封装了 startId 和 intent 到 Message 对象中，紧接着通过 mServiceHandler 将 msg 发送出去。

mServiceHandler 对象发送出去的消息会被 ServiceHandler 接收到，ServiceHandler 是 IntentService 的内部类，继承自 Handler，并实现了 handleMessage 方法。handleMessage 方法中调用了 抽象方法 onHandleIntent 方法以及 stopSelf 方法停止服务。

那么为什么 onHandleIntent 方法就执行在子线程中呢？

在 onCreate 方法中创建了 HandlerThread 对象，它是一个线程，内部封装了 Looper，这个 Looper 是属于 HandlerThread 线程，而在创建 ServiceHandler 时传入了 HandlerThread 线程的 Looper，所以 ServiceHandler 也是属于 HandlerThread 的 Handler，那么 Handler 的 handleMessage 方法的线程自然也是 HandlerThread 线程，所以 onHandleIntent 中可以做耗时操作。

又因为在执行完 onHandleIntent 方法之后主动调用了 stopSelf 方法关闭服务，所以在使用的时候并不需要我们手动来 stopService。

接下来又有一个问题了，我们都知道启动 Service 有两种方式，一种是 startService，另一种是 bindService，那么 IntentService 支持 bindService 这种方式吗？我们从源码中找找答案吧。

众所周知，bindService 的生命周期和 startService 的生命周期不同，startService 的生命周期是 onCreate -> onStartCommand -> onDestroy，而 bindService 的生命周期是 onCreate -> onBind -> onUnbind -> onDestroy。

这两种方式都会执行 onCreate 方法，所以 IntentService 中的 onCreate 中的代码都能得到执行，也就是说两种方式都会创建并启动 HandlerThread 对象，而且也能创建 HandlerThread 线程的 Handler。

然而 onHandleIntent 方法中处理的请求是需要使用 Handler 发送消息的，但是发送消息是在 onStart 方法中发送的，但是 bindService 这种方式不会执行 onStart 方法，所以 bindService 这种方式是不行的。

## 总结

IntentService 是一个自带线程的 Service，并且不需要手动的去关闭。内部实现是通过 HandlerThread 来创建一个子线程的 Looper，并根据这个 Looper 创建一个子线程的 Handler，将代码切换到子线程中执行。并且 IntentService 只能用于 startService 这种方式启动。
