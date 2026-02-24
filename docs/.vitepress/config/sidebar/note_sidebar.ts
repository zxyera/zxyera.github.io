export function noteSidebar() {
  return [
    {
      text: "问题 & 方案",
      items: [
        {
          text: "开发工具问题",
          collapsed: false,
          items: [
            {
              text: "Kotlin not configured",
              link: "/note/AS:Kotlin not configured",
            },
            {
              text: "Kotolin代码爆红",
              link: "/note/Kotolin代码爆红",
            },
            {
              text: "AS报代理127错误",
              link: "/note/You have JVM property https.proxyHost set to 127.0.0.1",
            },
            {
              text: "Git没有Local Changes面板",
              link: "/note/AndroidStudio的git不显示local changes面板",
            },
          ],
        },
        {
          text: "开发代码问题",
          collapsed: false,
          items: developQuestions,
        },
      ],
    },
    {
      text: "开发笔记",
      items: [
        {
          text: "Gradle",
          collapsed: false,
          items: [
            {
              text: "kapt升级为ksp",
              link: "/note/kapt替换成ksp as没有了kapt",
            },
          ],
        },
      ],
    },
  ];
}

const developQuestions = [
  {
    text: "BuildConfigField不生效",
    link: "/note/BuildConfigField不生效",
  },
  {
    text: "TabItem设置visibility无效",
    link: "/note/XML中给TabItem设置visibility无效",
  },
  {
    text: "Could not publish configuration archives",
    link: "/note/Could not publish configuration archives",
  },
  {
    text: "fastjson解析kotlin数据类缺失默认构造器",
    link: "/note/fastjson解析kotlin数据类缺失默认构造器",
  },
  {
    text: "buildSrc进行库版本管理",
    link: "/note/Gradle buildSrc进行库版本管理",
  },
];
