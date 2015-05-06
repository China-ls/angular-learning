# angular-learning
AngularJs Learning stuffs ( Docs &amp; Resources &amp; Examples )

+ 文档
  + [概述](#概述)
  + [核心概念](#核心概念)
    + [模板](#模板)
    + [程序结构](#程序结构)
+ 资源
  + [资源](资源)
  + [电子书](电子书)
  + [教程](#教程)
  + [基础项目](#基础项目)
  + [编码风格/设计模式/最佳实践](#编码风格/设计模式/最佳实践)
  + [组件库](#组件库)

# 概述

[什么是angularJs?]

# 核心概念

## 模板

  *把通过数据填充页面模板的工作从后端移到了前端，使要动态更新的页面有了更好的代码结构*

  + [初始化(Bootstrap)]
  + [数据绑定(Data Binding)]
  + 作用域(Scopes)
  + [编译(Compiler)]
  + [表达式(Expression)]
  + [指令(Directive)]
  + 视图(View)和路由(Route)
  + 过滤器(Filter)
  + 服务/供应商(Services/Providers)
  + 表单(Form) 和 AngularJS的表单概念

## 程序结构

+ 组织架构(Code Organization)
  + 始码组织架构
  + 代码组织
    + [angular-classy](https://github.com/davej/angular-classy)
+ 程序装载: 依赖注入(DI, Dependency injection)
+ 把数据模型(Model)导出给视图(View): 作用域(Scope)
+ 和服务器通讯: $http, $resource
  + 拦截器
  + [restangular](https://github.com/mgonto/restangular) - AngularJS service to handle Rest API Restful Resources properly and easily
  + [angular-restmod](https://github.com/platanus/angular-restmod) - Rails inspired REST-API ORM for Angular
+ 路由
  + ui-router
+ 常量
  + [grunt-ng-constant](https://github.com/werk85/grunt-ng-constant)
+ 承诺/递延(Promises/Deferred)
  + [angular-promise-tracker](https://github.com/ajoslin/angular-promise-tracker) - Easily add spinners or general request tracking to your angular app
+ 认证(Authentication)
  + [angular-client-side-auth](https://github.com/fnakstad/angular-client-side-auth)
+ Collections (& ngRepeat Stuff)
+ 测试(Testing)
  + [angular-test-patterns](https://github.com/daniellmb/angular-test-patterns) - A High-Quality Guide for Testing Angular 1.x Applications

## UI
+ 动画

## 性能优化
+ 缓存(Cache)
  + 数据缓存
    + $cacheFactory
    + [angular-cache](https://github.com/jmdobry/angular-cache) - a very useful replacement for Angular's $cacheFactory
  + 视图缓存
    + $templateCache
  + Cookie
    + [angular-local-storage](https://github.com/grevory/angular-local-storage)
+ 延迟加载
  + [overmind](https://github.com/geddski/overmind)

## 综合
+ Utils
  + [angular-underscore](https://github.com/floydsoft/angular-underscore)
  + [angular-collection](https://github.com/tomkuk/angular-collection)
+ 整合其他语言/框架
  + 高德地图
  + 谷歌地图
+ 后端代管 Hosted Backends
+ 权限
  + [angular-client-side-auth](https://github.com/fnakstad/angular-client-side-auth) - One way to implement authentication/authorization in Angular applications
+ [angular-cms](https://github.com/jonniespratley/angular-cms) - A light weight CMS built with Angular.js and Yeoman
+ [ngSocket](https://github.com/angular/ngSocket) - WebSocket support for angular

----------------

## 资源
[AngularJs1.x Github](https://github.com/angular/angular.js)  
[AngularJs2.x Github](https://github.com/angular/angular)  
[AngularJS中文社区](http://angularjs.cn/)  
[官方文档](https://docs.angularjs.org/api)  
[官方指南](https://docs.angularjs.org/guide) - [中文版](http://docs.ngnice.com/guide)
[awesome-angularjs](https://github.com/gianarb/awesome-angularjs) - AngularJs 服务,指令,实用工具资源  
[AngularJS-Learning](https://github.com/jmcunningham/AngularJS-Learning/blob/master/ZH-CN.md) - AngularJs学习资源  
[frontend-resources#angular](https://github.com/JonathanZWhite/frontend-resources#angular)
[angular-resources](https://github.com/distilledhype/angular-resources)
[破狼博客园 AngularJs](http://www.cnblogs.com/whitewolf/category/404298.html)
[ng-newsletter](http://www.ng-newsletter.com/)

## 电子书
[angular-phonecat教程中文版](http://xdsnet.gitbooks.io/angular-phonecat-book-zhcn/content/)  
[restangular](http://wohugb.gitbooks.io/restangular/content/) 

## 教程
[AngularJS学习笔记](http://www.zouyesheng.com/angular.html)  
[AngularJS体验式编程系列文章](http://blog.fens.me/series-angular/)  
[A Better Way to Learn AngularJS](https://thinkster.io/angulartutorial/a-better-way-to-learn-angularjs/)  
[使用AngularJS构建大型Web应用](http://www.infoq.com/cn/news/2013/02/angular-web-app)  
[Angular土豆视屏教程](http://www.tudou.com/plcover/AURJrOM6ntc/)
[angular-phonecat](https://github.com/angular/angular-phonecat) - 官方示例项目
[ng-demos](https://github.com/johnpapa/ng-demos) - variety of angular demos
[angularjs-up-and-running](https://github.com/shyamseshadri/angularjs-up-and-running) - All the source code for the AngularJS Up & Running Book for O'Reilly
[sailng](https://github.com/ryancp/sailng) - Sails.js + Angular = Awesome

## 基础项目(seed)
[angular-seed](https://github.com/angular/angular-seed) - angular种子文件（基础结构）  
[generator-angular](https://github.com/yeoman/generator-angular)  
[generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular)  
[angular-requirejs-seed](https://github.com/tnajdek/angular-requirejs-seed)
[angularjs-gulp-browserify-boilerplate](https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate)
[angular-express-seed](https://github.com/btford/angular-express-seed)  
[ng-boilerplate](https://github.com/ngbp/ngbp) - 成熟的web apps构建管理系统  
[angular-kickstart](https://github.com/vesparny/angular-kickstart) - 基于 AngularJS，GulpJS 和 Bower 的完整可伸缩构建系统，能加快 AngularJS 应用的开发  
[angular-app](https://github.com/angular-app/angular-app) - Reference application for AngularJS, CURD application demo
[angular-sailsjs-boilerplate](https://github.com/tarlepp/angular-sailsjs-boilerplate)

## 编码风格/设计模式/最佳实践 
[AngularJS风格指南](https://github.com/johnpapa/angularjs-styleguide/blob/master/i18n/zh-CN.md)  
[AngularJS应用的最佳实践和风格指南](https://github.com/mgechev/angularjs-style-guide/blob/master/README-zh-cn.md)  
[Angular风格指南](https://github.com/gocardless/angularjs-style-guide)  
[AngularJS styleguide](https://github.com/toddmotto/angularjs-styleguide)
[ng-showcase](https://github.com/angular-cn/ng-showcase) - Angular指令及组件的全面范例

## 组件库
[Angular UI](https://github.com/angular-ui/) —— [angularjs-ui-bootstrap](https://github.com/angular-ui/bootstrap)
[angular-common](https://github.com/michaeljcalkins/angular-common)
[angular-strap](https://github.com/mgcrea/angular-strap) - AngularJS 1.2+ native directives for Bootstrap 3.
[textAngular](https://github.com/fraywing/textAngular) - A radically powerful Text-Editor/Wysiwyg editor for Angular.js!
[angular-ui-tree](https://github.com/angular-ui-tree/angular-ui-tree) - A tree component for AngularJS, without jQuery as dependency.
[angular-xeditable](http://vitalets.github.io/angular-xeditable/) - Edit in place for AngularJS :+1:
[famous-angular](https://github.com/Famous/famous-angular) - Bring structure to your Famo.us apps with the power of AngularJS.
[angular-hotkeys](https://github.com/chieffancypants/angular-hotkeys) - Configuration-centric keyboard shortcuts for your Angular apps.
[angular-filter](https://github.com/a8m/angular-filter) - Bunch of useful filters for AngularJS (with no external dependencies!)
[angular-moment](https://github.com/urish/angular-moment) - Moment.JS directives for Angular.JS (timeago and more)
[angular-file-upload](https://github.com/nervgh/angular-file-upload) - Angular File Upload is a module for the AngularJS framework
[mobile-angular-ui](https://github.com/mcasimir/mobile-angular-ui) - Angular.js Mobile UI Framework with Bootstrap 3
[ngProgress](https://github.com/VictorBjelkholm/ngProgress) - Angular provider for slim loading bar at the top of the page
[ngFx](https://github.com/Hendrixer/ngFx) - Simple, Beautiful animation library for Angular
[ngDialog](https://github.com/likeastore/ngDialog) - Modals and popups provider for Angular.js applications
[ngReact](https://github.com/davidchang/ngReact) - Use React Components in Angular
[angular-scroll](https://github.com/oblador/angular-scroll) - Scrollspy, animated scrollTo and scroll events for angular.js
[angular-schema-form](https://github.com/Textalk/angular-schema-form) - Generate forms from a JSON schema, with AngularJS!
[angular-validation](https://github.com/huei90/angular-validation) - Client Side Validation for AngularJS
[forms-angular](https://github.com/forms-angular/forms-angular) - Probably the most opinionated framework in the world
[angular-form-for](https://github.com/bvaughn/angular-form-for) - Set of Angular directives to simplify creating and validating HTML forms.
[ng-tasty](https://github.com/Zizzamia/ng-tasty) - A tasty collection of reusable UI components for Angular
[AngularAgility](https://github.com/AngularAgility/AngularAgility) - A set of useful Angular.js extensions implementing common UX patterns to improve productivity.
[angular-datepicker](https://github.com/alongubkin/angular-datepicker)
[ngDroplet](https://github.com/Wildhoney/ngDroplet)
[angular-parallax](https://github.com/oblador/angular-parallax)
[angular-media-player](https://github.com/mrgamer/angular-media-player)