import { nav_harmony } from "../.vitepress/config/strings";
import type { NavLink } from "../.vitepress/theme/nav_type";
type NavData = {
  title: string;
  items: NavLink[];
};

export const NAV_DATA = [
  {
    title: "安卓开发",
    items: [
      {
        title: "Android Code Search",
        desc: "安卓源码搜索",
        link: "https://cs.android.com/",
        icon: "https://caniuse.com/img/favicon-128.png",
      },
      {
        title: "Android Developers ",
        desc: "安卓开发者官网",
        link: "https://developer.android.com",
        icon: "./icon/icon.png",
      },
      {
        title: "Android开源项目",
        desc: "安卓AOSP开源项目官网",
        link: "https://source.android.com",
        icon: "./icon/icon.png",
      },
      {
        title: "Android开源项目",
        desc: "安卓AOSP开源项目官网",
        link: "https://source.android.com",
        icon: "./icon/icon.png",
      },
      {
        title: "Android开源项目",
        desc: "安卓AOSP开源项目官网安卓AOSP开源项目官网安卓AOSP开源项目官网",
        link: "https://source.android.com",
        icon: "https://caniuse.com/img/favicon-128.png",
      },
    ],
  },
  {
    title: nav_harmony,
    items: [
      {
        title: "HarmonyOS应用开发官网",
        desc: "HarmonyOS应用开发官网",
        link: "https://developer.harmonyos.com/",
        icon: "https://developer.huawei.com/allianceCmsResource/resource/HUAWEI_Developer_VUE/images/logo-developer-header.svg",
      },
    ],
  },
];
