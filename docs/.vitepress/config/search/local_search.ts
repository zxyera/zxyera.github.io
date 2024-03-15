import { DefaultTheme } from "vitepress";

export const localSearchOptions: DefaultTheme.LocalSearchOptions = {
  locales: {
    root: {
      translations: {
        button: {
          buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档",
        },

        modal: {
          noResultsText: "啊呜~找不到你想找的东西！",
          resetButtonTitle: "清空查询",
          footer: {
            selectText: "查看",
            navigateText: "切换",
            closeText: "关闭",
          },
        },
      },
    },
  },

  miniSearch: {
    searchOptions: {
      bm25: {
        k: 1.2,
        b: 2,
        d: 0.5,
      },

      prefix: true,
      fuzzy: true,
      fields: ["title", "text"],
      boost: {
        title: 2,
      },
    },
  },

  _render(src, env, md) {
    const html = md.render(src, env);
    if (env.frontmatter?.title && html.indexOf("h1") == -1) {
      return md.render(`# ${env.frontmatter.title}`) + html;
    }
    return html;
  },
};
