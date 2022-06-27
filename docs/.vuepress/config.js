/*
 * @Author: Janpun
 * @Date: 2022-03-24 14:48:31
 * @LastEditors: Janpun
 * @LastEditTime: 2022-03-24 17:34:07
 * @FilePath: /wordpress-developer-docs/docs/.vuepress/config.js
 * @Description:配置文件
 *
 * Copyright (c) 2022 Qianye Inc. All Rights Reserved.
 */

// import { zhSidebar } from "./config/sidebar";

module.exports = {
  // 站点配置
  lang: "zh-CN",
  title: "WordPress开发文档",
  description: "WordPress开发文档",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/images/logo.png",
    locales: {
      "/zh/": {
        selectLanguageName: "简体中文",
        sidebar: [
          // SidebarItem
          {
            text: "插件开发简介",
            link: "/zh/plugins/intro/",
            children: [
              {
                text: "什么是插件？",
                link: "/zh/plugins/intro/what-is-a-plugin/",
                children: [],
              },
            ],
          },
          {
            text: "插件基础",
            link: "/zh/plugins/plugin-basics/",
            children: [
              {
                text: "头部要求",
                link: "/zh/plugins/plugin-basics/header-requirements",
                children: [],
              },
              {
                text: "包括软件许可证",
                link: "/zh/plugins/plugin-basics/including-a-software-license",
                children: [],
              },
            ],
          },
        ],
        navbar: [
          {
            text: "首页",
            link: "/",
          },
          {
            text: "插件",
            link: "/zh/plugins/",
          },
          {
            text: "主题",
            link: "/zh/themes/",
          },
          {
            text: "常用文档",
            children: [
              {
                text: "WordPress",
                link: "https://wordpress.open-docs.cn",
              },
            ],
          },
          {
            text: "文档库",
            link: "https://www.open-docs.cn",
          },
        ],
      },
      "/en/": {
        selectLanguageName: "English",
        sidebar: [
          // SidebarItem
          {
            text: "Introduction to Plugin Development",
            link: "intro/",
            children: [
              {
                text: "What is a Plugin?",
                link: "intro/what-is-a-plugin",
                children: [],
              },
            ],
          },
          {
            text: "Plugin Basics",
            link: "plugin-basics/",
            children: [
              {
                text: "Header Requirements",
                link: "plugin-basics/header-requirements",
                children: [],
              },
            ],
          },
        ],
        navbar: [
          // NavbarGroup
          {
            text: "Plugins",
            link: "/en/plugins/",
          },
          // NavbarGroup
          {
            text: "Themes",
            link: "/en/themes/",
          },
          // NavbarGroup
          {
            text: "常用文档",
            children: [
              {
                text: "WordPress",
                link: "https://wordpress.www.open-docs.cn",
              },
            ],
          },
          // NavbarItem
          {
            text: "文档库",
            link: "https://www.open-docs.cn",
          },
        ],
      },
    },
    // 我们会将它作为一个 GitHub 仓库
    repo: "qianyedesign/wordpress-developer-docs",
    docsBranch: "master",
    docsDir: "/docs/",
    lastUpdated: true,
    lastUpdatedText: "Last Updated",
    navbar: [
      {
        text: "文档库",
        link: "https://www.open-docs.cn",
      },
    ],
  },
  plugins: [
    [
      "@vuepress/plugin-google-analytics",
      {
        id: "G-K5ZBGZTFSF",
      },
    ],
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/zh/": {
            placeholder: "搜索",
          },
          "/en/": {
            placeholder: "Search",
          },
        },
      },
    ],
    [
      "@vuepress/plugin-prismjs",
      {
        preloadLanguages: [
          "bash",
          "js",
          "php",
          "vue",
          "html",
          "css",
          "sass",
          "less",
        ],
      },
    ],
  ],
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "WordPress开发文档",
      description: "Vue 驱动的静态网站生成器",
    },
    "/en/": {
      lang: "en-US",
      title: "WordPress Developer Documents",
      description: "Vue-powered Static Site Generator",
    },
  },
};
