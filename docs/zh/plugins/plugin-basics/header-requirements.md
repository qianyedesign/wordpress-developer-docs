<!--
 * @Author: Janpun
 * @Date: 2022-03-24 17:10:32
 * @LastEditors: Janpun
 * @LastEditTime: 2022-03-24 17:26:58
 * @FilePath: /wordpress-developer-docs/docs/zh/plugins/plugin-basics/header-requirements.md
 * @Description:
 *
 * Copyright (c) 2022 Qianye Inc. All Rights Reserved.
-->

# 头部要求

[[toc]]

如“入门”中所述，标题注释是什么告诉 WordPress 一个文件是一个插件。

至少，标题注释必须包含插件名称，但可以包括几个（通常应该）：

- Plugin Name: (required) 您的插件的名称，将显示在 WordPress 管理员的插件列表中。
- Plugin URI: 插件的主页，可能在 WordPress.org 或您自己的网站上。 这对您的插件来说必须是唯一的。
- Description: 插件的简短描述，如 WordPress 管理员的插件部分所示。 保持此描述少于 140 个字符。
- Version: 当前版本号的插件，如 1.0 或 1.0.3。
- Alert: 为您的项目分配版本号时，请记住，WordPress 使用 PHP version_compare（）函数来比较插件版本号。 因此，在您发布新版本的插件之前，您应该确保这个 PHP 函数认为新版本比旧版本“更大”。 例如，1.02 实际上大于 1.1。
- Author: 插件作者的名字。 可以使用逗号列出多个作者。
- Author URI: 作者的网站或个人资料在另一个网站，[如 WordPress.org](http://xn--wordpress-k99p.org/)。
- License: 插件的许可证的简称（slug）（例如 GPL2）。 有关许可证的更多信息可以在 WordPress.org 指南中找到。
- License URI: 指向许可证全文的链接（例如https://www.gnu.org/licenses/gpl-2.0.html）。
- Text Domain: 插件的 gettext 文本域。 更多信息可以在“如何国际化您的插件”页面的“文本域”部分找到。
- Domain Path: 域路径让 WordPress 知道在哪里找到翻译。 有关更多信息，请参见“如何使插件国际化”的“域路径”部分。

具有标题注释的有效 PHP 文件可能如下所示：

```php
<?php
/*
Plugin Name: WordPress.org Plugin
Plugin URI:  https://developer.wordpress.org/plugins/the-basics/
Description: Basic WordPress Plugin Header Comment
Version:     20160911
Author:      WordPress.org
Author URI:  https://developer.wordpress.org/
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: wporg
Domain Path: /languages
*/
```
