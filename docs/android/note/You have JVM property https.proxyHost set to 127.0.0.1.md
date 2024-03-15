# You have JVM property https.proxyHost set to 127.0.0.1

![alt text](../images/jvmpropproxy127.png)

编译时会提示 Can not resolve xxx

因为开过代理，即使关闭了代理软件，还是会提示这个，需要关闭 Gradle 的守护进程。

```
pkill -f '.*GradleDaemon.*'
```

然后重启 AS
