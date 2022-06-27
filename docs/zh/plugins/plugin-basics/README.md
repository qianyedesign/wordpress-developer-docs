<!--
 * @Author: Janpun
 * @Date: 2022-03-24 17:10:15
 * @LastEditors: Janpun
 * @LastEditTime: 2022-03-24 17:25:32
 * @FilePath: /wordpress-developer-docs/docs/zh/plugins/plugin-basics/README.md
 * @Description:
 *
 * Copyright (c) 2022 Qianye Inc. All Rights Reserved.
-->

# 插件基础

[[toc]]

## 入门

最简单的一个 WordPress 插件是一个带有 WordPress 插件标题注释的 PHP 文件。 强烈建议您创建一个目录来保存您的插件，以便您的所有插件的文件整齐地组织在一个地方。

要开始创建一个新的插件，请按照以下步骤操作。

- 浏览到您的 WordPress 安装的 wp-content 目录。
- 打开 plugins 目录。
- 创建一个新的目录，并在您的插件（例如 plugin-name）之后命名它。
- 打开你的新插件的目录。
- 创建一个新的 PHP 文件（在您的插件后面命名此文件也很好，例如 plugin-name.php）。

以下是 Unix 命令行上的进程：

```bash
wordpress$ cd wp-content
wp-content$ cd plugins
plugins$ mkdir plugin-name
plugins$ cd plugin-name
plugin-name$ vi plugin-name.php
```

在上面的例子中，“vi”是文本编辑器的名称。 使用适合您的编辑器。

现在您正在编辑您的新插件的 PHP 文件，您需要添加插件标题注释。 这是一个特别格式的 PHP 块注释，其中包含有关您的插件的元数据，例如其名称和作者。 至少，插件标题注释必须包含插件的名称。 插件文件夹中只有一个文件应该有标题注释 - 如果您的插件有多个 PHP 文件，那么这些文件中只有一个应该有注释。

```php
<?php
/*
Plugin Name: YOUR PLUGIN NAME
*/
```

保存文件后，您应该能够看到您的 WordPress 站点中列出的插件。 登录您的 WordPress 站点，然后单击 WordPress 管理员左侧导航窗格中的插件。 此页面显示您的 WordPress 网站所有插件的列表。 您的新插件现在应该在该列表中！

## Hooks: Actions 和 Filters

WordPress 钩子允许您在特定点点击 WordPress，以更改 WordPress 的行为，而无需编辑任何核心文件。

WordPress 中有两种类型的钩子：动作和过滤器。 操作允许您添加或更改 WordPress 功能，而过滤器允许您更改内容，因为它被加载并显示给网站用户。

钩子不只是插件开发人员; 钩子广泛用于通过 WordPress 核心本身提供默认功能。 其他挂钩是未使用的占位符，当您需要更改 WordPress 的工作原理时，您可以直接使用它们。 这就是 WordPress 如此灵活。

## 基本 hook

创建插件时需要的 3 个基本钩子是`register_activation_hook()`，`register_deactivation_hook()`和`register_uninstall_hook()`。

- 激活插件时，激活钩子就会运行。 您将使用它来提供设置插件的功能 - 例如，在选项表中创建一些默认设置。
- 当您停用插件时，会停用停用挂钩。 您将使用它来提供一个功能，可以通过插件清除任何临时数据存储。
- 使用 WordPress Admin 删除插件后，这些卸载方法将被用来清理。 您可以使用它来删除插件创建的所有数据，例如添加到选项表中的任何选项。

## 添加 Hooks

您可以添加自己的自定义钩子与 do_action()，这将允许开发人员通过传递函数通过你的钩子来扩展你的插件。

## 删除 Hooks

您还可以使用 invoke remove_action()来删除之前定义的函数。 例如，如果您的插件是另一个插件的插件，则可以使用与之前插件使用 add_action()添加的相同函数回调的 remove_action()。 在这些情况下，动作的优先级很重要，因为 remove_action()将需要在初始 add_action()之后运行。

从钩子中删除操作时，以及更改优先级时，您应该小心，因为这些更改可能难以看到这些更改将如何影响与同一个钩子的其他交互。 我们强烈建议经常进行测试。

您可以在本手册的“钩子”部分中了解更多关于创建钩子和与之互动的信息。

## WordPress APIs

您是否知道 WordPress 提供了一些应用程序编程接口（API）？ 这些 API 可以大大简化您在插件中编写的代码。 你不想重新发明，特别是当这么多人为你做了大量的工作和测试时。

最常见的是选项 API，它可以轻松地将数据存储在数据库中，用于插件。 如果您正在考虑在插件中使用 cURL，那么您可能会感兴趣的是 HTTP API。

由于我们在谈论插件，您需要学习插件 API。 它具有多种功能，可帮助您开发插件。

## WordPress 如何加载插件

当 WordPress 在 WordPress 管理员的插件页面上加载安装的插件列表时，它将通过 plugins 文件夹（及其子文件夹）来搜索带有 WordPress 插件头注释的 PHP 文件。 如果您的整个插件只包含一个单一的 PHP 文件，如 Hello Dolly，该文件可以直接位于 plugins 文件夹的根目录下。 但更常见的是，插件文件将驻留在自己的文件夹中，以插件命名。

## 共享您的插件

有时您创建的插件仅适用于您的网站。 但是很多人喜欢与 WordPress 其他社区分享他们的插件。 在分享您的插件之前，您需要做的一件事是选择许可证。 这样可以让您的插件的用户知道如何使用您的代码。 为了保持与 WordPress 核心的兼容性，建议您选择使用 GNU 通用公共许可证（GPLv2 +）的许可证。
