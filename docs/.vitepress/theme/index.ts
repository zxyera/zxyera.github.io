// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import { Theme, useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import { onMounted, watch, nextTick } from "vue";
import medium from "medium-zoom";
import mediumZoom from "medium-zoom";
import "./global.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {},

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
