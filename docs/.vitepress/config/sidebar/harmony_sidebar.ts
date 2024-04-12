export function harmonySidebar() {
  const baseHarmony = "/harmonyos/arkui/";
  return [
    {
      text: "TypeScript",
      items: [],
    },
    {
      text: "ArkTS",
      items: [
        {
          text: "Gradle",
        },
      ],
    },
    {
      text: "ArkUI",
      items: [
        {
          text: "组件通用信息",
          items: [
            {
              text: "通用属性",
              link: `${baseHarmony}通用属性`,
            },
            {
              text: "通用事件",
              link: `${baseHarmony}通用事件`,
            },
            {
              text: "手势处理",
              link: `${baseHarmony}手势处理`,
            },
          ],
        },
        {
          text: "基础组件",
          collapsed: true,
          items: [
            {
              text: "Text",
              link: `${baseHarmony}Text`,
            },
            {
              text: "TextInpu/TextArea",
              link: `${baseHarmony}输入框`,
            },
            {
              text: "Button",
              link: `${baseHarmony}Button`,
            },
            {
              text: "Image",
              link: `${baseHarmony}Image`,
            },
            {
              text: "ImageAnimator",
              link: `${baseHarmony}ImageAnimator`,
            },
            {
              text: "ImageSpan",
              link: `${baseHarmony}ImageSpan`,
            },
            {
              text: "CheckBox",
              link: "",
            },
            {
              text: "Divider",
              link: "",
            },
            {
              text: "LoadingProgress",
              link: "",
            },
            {
              text: "Progress",
              link: "",
            },
            {
              text: "Menu",
              link: "",
            },
            {
              text: "TextClock",
              link: "",
            },
            {
              text: "TextTimer",
              link: "",
            },
            {
              text: "Toggle",
              link: "",
            },
            {
              text: "Slider",
              link: "",
            },
            {
              text: "TimePicker",
              link: "",
            },
            {
              text: "Stepper",
              link: "",
            },
            {
              text: "Span",
              link: "",
            },
            {
              text: "Select",
              link: "",
            },
            {
              text: "RickText",
              link: "",
            },
            {
              text: "RickEditor",
              link: "",
            },
            {
              text: "ScrollBar",
              link: "",
            },
            {
              text: "TextPicker",
              link: "",
            },
            {
              text: "Search",
              link: "${baseHarmony}搜索框Search",
            },
            {
              text: "Radio",
              link: "",
            },
            {
              text: "Rating",
              link: "",
            },
            {
              text: "Marquee",
              link: "",
            },
            {
              text: "QRCode",
              link: "",
            },
            {
              text: "Navigation",
              link: "",
            },
            {
              text: "NavRouter",
              link: "",
            },
            {
              text: "NavDestination",
              link: "",
            },
            {
              text: "NodeContainer",
              link: "",
            },
            {
              text: "PatterLock",
              link: "",
            },
          ],
        },
        {
          text: "容器组件",
          collapsed: true,
          items: [
            {
              text: "Column",
              link: "",
            },
            {
              text: "ColumnSplit",
              link: "",
            },
            {
              text: "Row",
              link: "",
            },
            {
              text: "RowSplit",
              link: "",
            },
            {
              text: "Stack",
              link: "",
            },
            {
              text: "Tabs",
              link: "",
            },
            {
              text: "Badge",
              link: "",
            },
            {
              text: "Flex",
              link: "",
            },
            {
              text: "Counter",
              link: "",
            },
            {
              text: "Grid",
              link: "",
            },
            {
              text: "List",
              link: "",
            },
            {
              text: "Refresh",
              link: "",
            },
            {
              text: "Swiper",
              link: "",
            },
            {
              text: "Counter",
              link: "",
            },
            {
              text: "SlideBarContainer",
              link: "",
            },
            {
              text: "Navigator",
              link: "",
            },
            {
              text: "Hyperlink",
              link: "",
            },
            {
              text: "FolderStack",
              link: "",
            },
          ],
        },
        {
          text: "绘制组件",
          collapsed: true,
          items: [
            {
              text: "Circle",
              link: "",
            },
            {
              text: "Ellipse",
              link: "",
            },
            {
              text: "Line",
              link: "",
            },
            {
              text: "Polyline",
              link: "",
            },
            {
              text: "Polygon",
              link: "",
            },
            {
              text: "Path",
              link: "",
            },
            {
              text: "Rect",
              link: "",
            },
            {
              text: "Shape",
              link: "",
            },
          ],
        },
        {
          text: "画布组件",
          items: [
            {
              text: "Cavas",
              link: "",
            },
            {
              text: "CanvasGradient",
              link: "",
            },
            {
              text: "CanvasPattern",
              link: "",
            },
            {
              text: "ImageBitmap",
              link: "",
            },
            {
              text: "Path2D",
              link: "",
            },
            {
              text: "Matrix2D",
              link: "",
            },
          ],
        },
        {
          text: "高级组件",
          collapsed: true,
          items: [
            {
              text: "Chip",
              link: "",
            },
            {
              text: "ComposeListItem",
              link: "",
            },
            {
              text: "ComposeTitleBar",
              link: "",
            },
            {
              text: "Dialog",
              link: "",
            },
            {
              text: "EdiableTitleBar",
              link: "",
            },
            {
              text: "ExceptionPrompt",
              link: "",
            },
            {
              text: "Filter",
              link: "",
            },
            {
              text: "GridObjectSortComponent",
              link: "",
            },
            {
              text: "ProgressButtom",
              link: "",
            },
            {
              text: "Popup",
              link: "",
            },
            {
              text: "SegmentButton",
              link: "",
            },
            {
              text: "SelectionMenu",
              link: "",
            },
            {
              text: "SelectTitleBar",
              link: "",
            },
            {
              text: "SplitLayout",
              link: "",
            },
            {
              text: "SubHeader",
              link: "",
            },
            {
              text: "SwipeRefresher",
              link: "",
            },
            {
              text: "TabTitleBar",
              link: "",
            },
            {
              text: "ToolBar",
              link: "",
            },
            {
              text: "TreeView",
              link: "",
            },
          ],
        },
        {
          text: "安全控件",
          collapsed: true,
          items: [
            {
              text: "LocationButton",
              link: "",
            },
            {
              text: "PasteButton",
              link: "",
            },
            {
              text: "SaveButton",
              link: "",
            },
          ],
        },
        {
          text: "动画",
          collapsed: true,
          items: [
            {
              text: "属性动画",
              link: "",
            },
            {
              text: "显式动画",
              link: "",
            },
            {
              text: "路径动画",
              link: "",
            },
            {
              text: "粒子动画",
              link: "",
            },
            {
              text: "转场动画",
              items: [
                {
                  text: "元素共享转场动画",
                  link: "${baseHarmony}转场动画-元素共享动画",
                },
              ],
            },
          ],
        },
        {
          text: "弹窗",
          collapsed: true,
          items: [
            {
              text: "AlertDialog",
              link: "",
            },
            {
              text: "ActionSheet",
              link: "",
            },
            {
              text: "CustomDialog",
              link: "",
            },
            {
              text: "CalendarPickerDialog",
              link: "",
            },
            {
              text: "DatePickerDialog",
              link: "",
            },
            {
              text: "TimePickerDialog",
              link: "",
            },
            {
              text: "TextPickerDialog",
              link: "",
            },
          ],
        },
      ],
    },
  ];
}
