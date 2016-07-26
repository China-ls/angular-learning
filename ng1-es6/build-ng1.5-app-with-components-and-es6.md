https://thinkster.io/angularjs-es6-tutorial

Angular1.5 在之前的基础上引入了Angular2的一些核心概念，即ES6类和组件。这篇文章会教你关于Angular 1.5的一切，以及最佳实践，确保你可以写出干净和模块化的代码，以便更容易地升级到Angualr2

[Angular 1.5新特性](http://angularjs.blogspot.hk/2016/02/angular-150-ennoblement-facilitation.html?view=classic)
[Angular 1.4向1.5迁移](https://docs.angularjs.org/guide/migration#migrating-from-1-4-to-1-5)

包含以下关键点：
- 用ES6 class 写 service和controller
- component API
- 写兼容Angular 2的代码


### 模块化js文件及打包

1. 使用[ES6的 import/export](https://ponyfoo.com/articles/es6-modules-in-depth)功能，让我们可以只在html中引入单一的打包好的js文件

2. 使用 Browserify

### 转换ES6到ES5

Babel

### 打包模板到一起并注入到Angular的$templateCache中

浏览器会在页面加载时获取应用的所有模板页面，避免多次从服务器请求。


### 运行本地服务器并在开发阶段实时变更浏览器页面

BrowserSync

### controller

$ctrl

1. 它是controllerAs的默认值（component语法）
2. 比$scope更短，更直接

### router

### 单向绑定

ou may have noticed the :: in ng-bind="::$ctrl.title"

### HTTP请求Service

### 创建service

```js
export default class User {
  constructor() {
    'ngInject';

  }
}
```

### 注入依赖

无法在constructor之外访问注入的服务

### 在controller中调用service

### 用components & directives复用UI功能
