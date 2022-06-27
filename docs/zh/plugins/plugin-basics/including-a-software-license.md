<!--
 * @Author: Janpun
 * @Date: 2022-03-24 17:13:05
 * @LastEditors: Janpun
 * @LastEditTime: 2022-03-24 17:14:07
 * @FilePath: /wordpress-developer-docs/docs/zh/plugins/plugin-basics/including-a-software-license.md
 * @Description:
 *
 * Copyright (c) 2022 Qianye Inc. All Rights Reserved.
-->

# 包括软件许可证

[[toc]]

大多数 WordPress 插件是在 GPL 下发布的，这与 WordPress 本身使用的许可证相同。 但是，还有其他选项可用。 总是最好清楚地显示您的插件使用的许可证。

在标题要求部分中，我们简要介绍了如何在插件标题注释中指出插件的许可证。 另一个常见和鼓励的做法是在主插件文件的顶部附近发布许可证块注释（与插件标题注释相同）。

这个许可证块注释通常看起来像这样：

```php
/*
{Plugin Name} is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

{Plugin Name} is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with {Plugin Name}. If not, see {URI to Plugin License}.
*/
```

当与插件头评论结合时：

```php
<?php
/*
Plugin Name: WordPress.org Plugin
Plugin URI:  https://developer.wordpress.org/plugins/the-basics/
Description: Basic WordPress Plugin Header Comment
Version:     20160911
Author:      WordPress.org
Author URI:  https://developer.wordpress.org/
Text Domain: wporg
Domain Path: /languages
License:     GPL2

{Plugin Name} is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

{Plugin Name} is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with {Plugin Name}. If not, see {License URI}.
*/
```
