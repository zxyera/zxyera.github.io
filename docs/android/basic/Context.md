# Context

## 简介

Context 贯穿整个安卓系统，它是组件之间的纽带。

- 启动四大组件
- 获取系统服务 Context.getSystemService()
- 获取系统资源 Context.getResources()
- 获取 SharedPreferences
- 获取系统路径
- 权限检查及申请

## 继承结构

Context 是一个抽象类，提供了一系列的抽象方法，如 startActivity 等，具体实现都是在 ContextImpl 中。Context 有子类 Activity、Service、Application、ContextImpl、ContextWrapper、ContextThemeWrapper 等。它们的继承关如下：
![alt text](../../images/context_extend_struct.png)

常用的 Activity、Service 以及 Application 中使用的方法都需要通过 ContextWrapper 来执行，然后真正执行的类是 ContextWrapper 的变量 mBase，mBase 是 Context 类型，但是实际上是 ContextImpl 类型。因此所有的操作都是在 ContextImpl 中被执行了。

mBase 在 ContextWrapper 的构造函数以及 attachBaseContext 被赋值，这些方法都是在对应的 Context 子类被创建的时候调用的。

## Context 的创建

### Activity 创建

![alt text](../../images/context_activity_create.png)
在 performLaunchActivity 中调用 createBaseContextForActivity，然后再调用 ContextImpl 的静态方法 createActivityContext 创建出 ContextImpl 对象，该对象就是 ContextWrapper 中的 mBase 对象。

紧接着调用 Instrumentation.newActivity 方法通过反射生成一个 Activity 对象，然后调用 Activity 的 attach 方法，将上一步创建的 ContextImpl 对象传进 attach 方法中，然后在 attach 方法中调用了 Activity 的 attachBaseContext 方法并把 ContextImpl 对象传入。

于是这样就把 ContextImpl 对象设置到 Activity 的父类 ContextWrapper 的 mBase 中了。

### Service 创建

Service 的创建会执行到 ActivityThread 的 handleCreateService 方法，在该方法内创建了 Service 对象，然后再通过 ContextImpl 的静态方法 ContextImpl.getImpl(service)获取到 ContextImpl 对象，其实就是将 service 对象强转成了 ContextImpl 对象。

接着就调用了 service 的 attach 方法，在 Service 的 attach 方法中调用了 attachBaseContext 方法，同样的把 ContextImpl 对象传进去。

### Application 创建

App 创建会先调用到 ActivityThread 的 main 方法，在该方法中创建了 ActivityThread 对象并调用 attach 方法。在 attach 方法中调用了 AMS 的 attachApplication 方法，接着又调用到了 ApplicationThread 的 bindApplication 方法，在此方法中发送了一个 BIND_APPLICATION 的 Handler 消息，在处理消息处调用了 handleBindApplication 方法。

接着在 handleBindApplication 方法中调用了 LoadApk 对象的 makeApplicationInner 方法，在该方法中调用了 ContextImpl 的静态方法 createAppContext 创建 ContextImpl 对象。

接着通过 mActivityThread.mInstrumentation.newApplication 调用到了 Instrumentation 的 newApplication 创建了 Application 对象，并且在同方法中调用了 Application 的 attach 方法，将上面创建的 ContextImpl 对象传入。在 Application 的 attach 方法中调用了 attachBaseContext 方法。

## getApplication 和 getApplicationContext

getApplication 是 Activity 和 Service 的方法，返回 Application 类型，而 getApplicationContext 是 Context 的抽象方法，具体实现在 ContextImpl 中，具体的返回类型也是 Application。

```java
// Activity.java 和 Service.java
public final Application getApplication() {
    return mApplication;
}

// ContextImpl
@Override
public Context getApplicationContext() {
    return (mPackageInfo != null) ?
    mPackageInfo.getApplication() : mMainThread.getApplication();
}
```

getApplication()只能在 Activity 和 Service 的环境中使用，但是 getApplicationContext 可以在任何 Context 环境中
获取到 Context 对象。它们拿到的都是 Application 对象。
