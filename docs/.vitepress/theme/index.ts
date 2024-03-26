// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import { Theme, useData, useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import { onMounted, watch, nextTick } from "vue";
import medium from "medium-zoom";
import mediumZoom from "medium-zoom";
import "./global.css";
import MNavLinks from "./components/NavLinks.vue";
import MLayout from "./components/NavLayout.vue";
import "./styles/index.scss";

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {};
    // 获取 frontmatter
    const { frontmatter } = useData();

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }

    return h(MLayout, props);
  },
  enhanceApp({ app, router, siteData }) {
    // 导入自定义组件
    app.component("MNavLinks", MNavLinks);
  },

  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    };

    onMounted(() => {
      initZoom();
    });

    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
} satisfies Theme;
