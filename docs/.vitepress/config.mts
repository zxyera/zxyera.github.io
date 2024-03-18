import { defineConfig } from "vitepress";
import { themeConfig } from "./config/theme_config";
import { global_description, global_title } from "./config/strings";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: global_title,
  description: global_description,
  // logo设置图标
  themeConfig: themeConfig,
  markdown: {
    lineNumbers: true,
  },
  cleanUrls: true, // 不显示url尾部的.html
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js",
      },
    ],
  ],
});
