export function androidSidebar() {
  return [
    {
      text: "安卓基础",
      collapsed: false,
      items: [
        {
          text: "Activity",
          link: "/android/basic/Activity",
        },
        {
          text: "Service",
          link: "/android/basic/Service",
        },
        { text: "IntentService", link: "/android/basic/IntentService" },
        { text: "HandlerThread", link: "/android/basic/HandlerThread" },
        { text: "Context", link: "/android/basic/Context" },
      ],
    },
    {
      text: "Java基础",
      collapsed: false,
      items: [
        {
          text: "Java并发",
          collapsed: false,
          items: [
            { text: "线程", link: "/android/java/线程" },
            { text: "线程池", link: "/android/java/线程池" },
            { text: "锁", link: "/android/java/锁" },
          ],
        },
        {
          text: "集合",
          collapsed: false,
          items: [
            { text: "ArrayList", link: "/android/java/ArrayList" },
            { text: "HashMap", link: "/android/java/HashMap" },
          ],
        },
        {
          text: "反射",
          link: "/android/java/反射",
        },
        {
          text: "注解",
          link: "/android/java/注解",
        },
        {
          text: "泛型",
          link: "/android/java/泛型",
        },
        {
          text: "JVM内存管理",
          link: "/android/java/JVM内存管理",
        },
      ],
    },
    {
      text: "View & 动画",
      collapsed: false,
      items: [
        {
          text: "旋转的指针",
          link: "/android/view/旋转的指针",
        },
      ],
    },
    {
      text: "Jetpack",
      collapsed: false,
      items: [
        {
          text: "Lifecycle",
          link: "/android/jetpack/Lifecycle",
        },
        {
          text: "ViewModel",
          link: "/android/jetpack/ViewModel",
        },
        {
          text: "SavedStateHandle",
          link: "/android/jetpack/SavedStateHandle",
        },
        {
          text: "LiveData",
          link: "/android/jetpack/LiveData",
        },
      ],
    },
    {
      text: "Koltin",
      collapsed: false,
      items: [
        {
          text: "Kotlin标准库方法",
          link: "android/kotlin/Kotlin标准库方法",
        },
      ],
    },
    {
      text: "开源三方库",
      items: [
        {
          text: "Arouter",
          link: "/android/third/ARouter",
        },
      ],
    },
  ];
}
