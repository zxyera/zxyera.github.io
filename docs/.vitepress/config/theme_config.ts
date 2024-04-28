import { DefaultTheme } from "vitepress";
import { androidSidebar } from "./sidebar/android_sidebar";
import { localSearchOptions } from "./search/local_search";
import {
  footer_latest_update_time,
  footer_next_page,
  footer_prev_page,
  footer_return_top,
  nav_android,
  nav_compose,
  nav_flutter,
  nav_harmony,
  nav_little_note,
  nav_navigation,
  nav_switch_dark_mode,
  nav_switch_light_mode,
  slide_article,
  slide_directory,
} from "./strings";
import { noteSidebar } from "./sidebar/note_sidebar";
import { composeSidebar } from "./sidebar/compose_sidebar";
import { harmonySidebar } from "./sidebar/harmony_sidebar";
import { navigationSidebar } from "./sidebar/navigation_sidebar";

export const themeConfig: DefaultTheme.Config = {
  lastUpdated: {
    text: footer_latest_update_time,
    formatOptions: {
      dateStyle: "short",
      timeStyle: "short",
    },
  },
  i18nRouting: false,
  darkModeSwitchTitle: nav_switch_dark_mode,
  lightModeSwitchTitle: nav_switch_light_mode,
  externalLinkIcon: false, // 外链右侧是否显示小箭头图标

  logo: "/tiger_small.svg", // 存放到public目录下
  outline: {
    level: "deep",
    label: slide_directory,
  },
  sidebarMenuLabel: slide_article,
  returnToTopLabel: footer_return_top,
  lastUpdatedText: footer_latest_update_time,
  docFooter: {
    prev: footer_prev_page,
    next: footer_next_page,
  },
  nav: [
    {
      text: nav_android,
      activeMatch: "/android/*",
      link: "/android/basic/Activity",
    },
    // {
    //   text: nav_compose,
    //   link: "/compose/",
    // },
    // {
    //   text: nav_flutter,
    //   activeMatch: "/flutter/*",
    //   link: "/flutter/",
    // },
    {
      text: nav_harmony,
      activeMatch: "/harmonyos/*",
      link: "/harmonyos/",
    },
    {
      text: nav_little_note,
      activeMatch: "/note/*",
      link: "/note/BuildConfigField不生效",
    },
    {
      text: nav_navigation,
      activeMatch: "/navigation/*",
      link: "/navigation/",
    },
  ],

  sidebar: {
    "/android/": androidSidebar(),
    "/note/": noteSidebar(),
    "/compose/": composeSidebar(),
    "/harmonyos/": harmonySidebar(),
  },

  search: {
    provider: "local",
    options: localSearchOptions,
  },
};
