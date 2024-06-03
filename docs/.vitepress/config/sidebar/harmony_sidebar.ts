import { text } from "cheerio/lib/static";

export function harmonySidebar() {
  const baseHarmonyArkUI = "/harmonyos/arkui/";
  const baseHarmonyRecord = "/harmonyos/record/";
  return [
    {
      text: "TypeScript",
      items: [],
    },
    {
      text: "ArkTS",
      items: [],
    },
    {
      text: "ArkUI",
      items: [
        {
          text: "组件通用信息",
          collapsed: true,
          items: [
            {
              text: "通用属性",
              link: `${baseHarmonyArkUI}通用属性`,
            },
            {
              text: "通用事件",
              link: `${baseHarmonyArkUI}通用事件`,
            },
            {
              text: "手势处理",
              link: `${baseHarmonyArkUI}手势处理`,
            },
          ],
        },
        {
          text: "基础组件",
          collapsed: true,
          items: [
            {
              text: "Text",
              link: `${baseHarmonyArkUI}Text`,
            },
            {
              text: "TextInpu/TextArea",
              link: `${baseHarmonyArkUI}输入框`,
            },
            {
              text: "Button",
              link: `${baseHarmonyArkUI}Button`,
            },
            {
              text: "Image",
              link: `${baseHarmonyArkUI}Image`,
            },
            {
              text: "ImageAnimator",
              link: `${baseHarmonyArkUI}ImageAnimator`,
            },
            {
              text: "ImageSpan",
              link: `${baseHarmonyArkUI}ImageSpan`,
            },
            {
              text: "CheckBox",
              link: `${baseHarmonyArkUI}CheckBox`,
            },
            {
              text: "Divider",
              link: `${baseHarmonyArkUI}Divider`,
            },
            {
              text: "LoadingProgress",
              link: `${baseHarmonyArkUI}LoadingProgress`,
            },
            {
              text: "Progress",
              link: `${baseHarmonyArkUI}Progress`,
            },
            {
              text: "Menu",
              link: `${baseHarmonyArkUI}Menu`,
            },
            {
              text: "TextClock",
              link: `${baseHarmonyArkUI}TextClock`,
            },
            {
              text: "TextTimer",
              link: `${baseHarmonyArkUI}TextTimer`,
            },
            {
              text: "TimePicker",
              link: `${baseHarmonyArkUI}TimePicker`,
            },
            {
              text: "DatePicker",
              link: `${baseHarmonyArkUI}DatePicker`,
            },
            {
              text: "TextPicker",
              link: `${baseHarmonyArkUI}TextPicker`,
            },
            {
              text: "Toggle",
              link: `${baseHarmonyArkUI}Toggle`,
            },
            {
              text: "Slider",
              link: `${baseHarmonyArkUI}Slider`,
            },
            {
              text: "Stepper",
              link: `${baseHarmonyArkUI}Stepper`,
            },
            {
              text: "Span",
              link: `${baseHarmonyArkUI}Span`,
            },
            {
              text: "Select",
              link: ``,
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
              text: "Search",
              link: `${baseHarmonyArkUI}搜索框Search`,
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
          collapsed: true,
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
                  link: "${baseHarmonyArkUI}转场动画-元素共享动画",
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
    {
      text: "笔记记录",
      items: [
        {
          text: "编译鸿蒙版本WebRTC",
          link: `${baseHarmonyRecord}编译鸿蒙版本WebRTC`,
        },
      ],
    },
  ];
}
