# BuildConfigField 不生效

```goovy
android {
    defaultConfig {
        buildConfigField "boolean", "RUN_DEMO_MODE", "${runDemo}"
    }
}
```
设置后点击Sync Now没有生效，需要Rebuild Project