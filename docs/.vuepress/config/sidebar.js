/*
 * @Author: Janpun
 * @Date: 2022-03-24 17:16:07
 * @LastEditors: Janpun
 * @LastEditTime: 2022-03-24 17:16:07
 * @FilePath: /wordpress-developer-docs/docs/.vuepress/config/sidebar.js
 * @Description:
 *
 * Copyright (c) 2022 Qianye Inc. All Rights Reserved.
 */
export const zhSidebar = [
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
];
