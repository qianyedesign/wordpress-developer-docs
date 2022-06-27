<!--
 * @Author: Janpun
 * @Date: 2022-03-24 17:00:01
 * @LastEditors: Janpun
 * @LastEditTime: 2022-03-24 17:00:02
 * @FilePath: /wordpress-developer-docs/docs/zh/plugins/intro.md
 * @Description:
 *
 * Copyright (c) 2022 Qianye Inc. All Rights Reserved.
-->

# 插件开发简介

[[toc]]

欢迎来到“插件开发者手册”。无论您是编写第一个插件还是第五十个插件，我们希望此资源可帮助您编写最佳插件。

插件开发者手册涵盖了各种主题 - 从插件头中应该是什么，安全最佳实践，以及可用于构建插件的工具。这也是一个正在进行的工作 - 如果您发现遗失或不完整的内容，请编辑并使其更好。

WordPress 有三个主要组件：

- 核心
- 主题
- 插件

这本手册是关于插件和他们如何与 WordPress 的互动。它将帮助您了解他们的工作原理以及如何创建自己的工作。

## 为什么我们做插件

如果在 WordPress 开发中有一个基本规则，那就是：不要触摸 WordPress 核心。这意味着您不会编辑核心 WordPress 文件以向您的网站添加功能。这是因为当 WordPress 更新到新版本时，它会覆盖所有的核心文件。因此，您要添加的任何功能都应通过使用经过批准的 WordPress API 的插件添加。

WordPress 插件可以像您需要的那样简单或复杂，具体取决于您要做什么。最简单的插件是单个 PHP 文件。 Hello Dolly 插件是这样一个插件的例子。插件 PHP 文件只需要一个插件头，几个 PHP 函数，以及一些挂钩来附加你的功能。

插件允许您大大扩展 WordPress 的功能，而不会触及 WordPress 核心本身。
