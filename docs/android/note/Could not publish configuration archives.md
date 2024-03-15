# Could not publish configuration archives

gradle 上传版本时报错，在控制台能看到类似于 version unspecified 的字样，并且定位到了 build.gradle 文件的哪一行。

```groovy
pom.whenConfigured { pom ->
    println("aaa_pom : " + pom)
    pom.dependencies.forEach { dep ->
        println("aaa_dep : " + dep)
        if (dep.getVersion() == "unspecified") {
            def depConf = mvnConfig.get(dep.artifactId)
            dep.setGroupId(depConf.groupId)
            dep.setVersion(depConf.version)
        }
    }
}
```

然后打印两行日志后可以看到依赖什么库时版本未指定。排查后发现依赖有些库使用的是 compileOnly，改为 implemention 就好了。
