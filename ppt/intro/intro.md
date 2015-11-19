title: angular经验分享
speaker: 胡广举
url: https://github.com/huguangju/angular-learning
transition: move
files: /js/demo.js,/css/demo.css,/js/zoom.js
theme: moon

[slide]

# angular经验分享 {:&.flexbox.vleft}
> 演讲者：胡广举

[slide]

# 样式展示 {:&.flexbox.vright}
> angular入门

[slide]
## 为什么选择nodePPT
----
* 基于GFM的markdown语法编写 {:&.rollIn}
* 支持html混排，再复杂的demo也可以做！
* 导出网页或者pdf更容易分享
* 支持18种转场动画，可以设置单页动画
* 支持单页背景图片
* 多种模式：overview模式，双屏模式，socket远程控制，摇一摇换页
* 可以使用画板，可以使用note做备注
* 支持语法高亮，自由选择highlight样式
* 可以单页ppt内部动画，单步动画
* 支持进入/退出回调，做在线demo很方便

[slide]
## 基本语法指南
----

<pre><code class="markdown">/* 先写总的配置 */
title: 这是title，网页名称
speaker: 演讲者名称
url: https://github.com/ksky521/nodePPT
transition: 全局转场动画
files: 引入的js和css文件，多个以半角逗号隔开
hightStyle: 代码高亮样式，默认monokai_sublime

/* 以&#91;slide&#93; 隔开每个ppt页面 */
&#91;slide&#93;
## 二级标题
这里写内容即可

&#91;slide&#93;
...
</code>
</pre>

