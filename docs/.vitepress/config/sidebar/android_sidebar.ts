export function androidSidebar() {
  return [
    {
      text: "基础知识",
      collapsed: true,
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
      text: "View & 动画",
      collapsed: true,
      items: [
        {
          text: "旋转的指针",
          link: "/android/view/旋转的指针",
        },
      ],
    },
    {
      text: "开发笔记",
      collapsed: true,
      items: [
        {
          text: "BuildConfigField不生效",
          link: "/android/note/BuildConfigField不生效",
        },
        {
          text: "XML中给TabItem设置visibility无效",
          link: "/android/note/XML中给TabItem设置visibility无效",
        },
        {
          text: "Could not publish configuration archives",
          link: "/android/note/Could not publish configuration archives",
        },
        {
          text: "Kotlin not configured尝试方案",
          link: "/android/note/Kotlin not configured尝试方案",
        },
        {
          text: "Kotolin代码爆红",
          link: "/android/note/Kotolin代码爆红",
        },
        {
          text: "You have JVM property https.proxyHost set to 127.0.0.1",
          link: "/android/note/You have JVM property https.proxyHost set to 127.0.0.1",
        },
        {
          text: "fastjson解析kotlin数据类缺失默认构造器",
          link: "/android/note/fastjson解析kotlin数据类缺失默认构造器",
        },
        {
          text: "Gradle buildSrc进行库版本管理",
          link: "/android/note/Gradle buildSrc进行库版本管理",
        },
        {
          text: "kapt替换成ksp as没有了kapt",
          link: "/android/note/kapt替换成ksp as没有了kapt",
        },
      ],
    },
  ];
}
