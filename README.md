# angular-learning
AngularJs Learning stuffs ( Docs &amp; Resources &amp; Examples )

+ 文档
  + [概述](#概述)
  + [核心概念](#核心概念)    
  + [程序结构](#程序结构)  
+ [资源](#资源)  
  + [电子书](#电子书)
  + [教程](#教程)
  + [基础项目](#基础项目(seed))
  + [编码风格/设计模式/最佳实践](#编码风格/设计模式/最佳实践)
  + [组件库](#组件库)
  + [Angular Gulp插件](#Angular Gulp插件)
  + [源码解析](#源码解析)  
  + [更多AngularJs资源](#更多AngularJs资源)

# 概述
 
[有jQuery背景的开发者如何建立起AngularJS的思维模式?](http://www.infoq.com/cn/news/2013/11/how-to-think-angularjs)  

## 核心概念

  + 初始化(Bootstrap)
  + 数据绑定(Data Binding)
  + 作用域(Scopes)
    + [理解AngularJS的作用域Scope](https://github.com/zensh/jsgen/blob/master/static/src/md/UnderstandingScopes.md)  
  + 编译(Compiler)
  + 表达式(Expression)
  + 指令(Directive)
    + [理解AngularJS的指令Directieve](docs/understandingDirectives.md)  
  + 视图(View)和路由(Route)
    + [多个命名视图](http://bubkoo.com/2014/01/01/angular/ui-router/guide/multiple-named-views/)  
    + [ui-router]  
      + [嵌套状态和嵌套视图](docs/ui-router/README.md)  
  + 过滤器(Filter)
  + 服务/供应商(Services/Providers)
  + 表单(Form) 和 AngularJS的表单概念

## 程序结构

+ 组织架构(Code Organization)
  + 目录组织结构
    [angularjs-structure-styleguide](https://github.com/srph/angularjs-structure-styleguide) - AngularJs应用的结构最佳实践  
  + 代码组织
    + [angular-classy](https://github.com/davej/angular-classy)
+ 程序装载: 依赖注入(DI, Dependency injection)
+ 把数据模型(Model)导出给视图(View): 作用域(Scope)
+ 和服务器通讯: $http, $resource
  + 拦截器
  + [restangular](https://github.com/mgonto/restangular) - AngularJS service to handle Rest API Restful Resources properly and easily
  + [angular-restmod](https://github.com/platanus/angular-restmod) - Rails inspired REST-API ORM for Angular  
  + [以更RESTful的方式使用ngResource](http://my.oschina.net/buwei/blog/185082)  
+ 路由
  + ui-router  
    [Angular路由深入浅出](http://div.io/topic/1096)  
    [ui-router-extras](https://github.com/christopherthielen/ui-router-extras) - AngularJs ui-router增强版  
    [angular-breadcrumb](https://github.com/ncuillery/angular-breadcrumb) - 根据ui-router的state创建面包屑  
+ 常量
  + [grunt-ng-constant](https://github.com/werk85/grunt-ng-constant)
+ 承诺/递延(Promises/Deferred)
  + [angular-promise-tracker](https://github.com/ajoslin/angular-promise-tracker) - Easily add spinners or general request tracking to your angular app
+ 认证(Authentication)
  + [satellizer](https://github.com/sahat/satellizer) - 基于Token的AngularJs的认证  
  + [angular-client-side-auth](https://github.com/fnakstad/angular-client-side-auth)
+ Collections (& ngRepeat Stuff)
+ 测试(Testing)
  + [angular-test-patterns](https://github.com/daniellmb/angular-test-patterns) - A High-Quality Guide for Testing Angular 1.x Applications

## UI
+ 动画
  + [angular-fx](https://github.com/720kb/angular-fx) - Angular CSS3 animation directives

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
 + [angular-authentication-example](https://github.com/cornflourblue/angular-authentication-example) - AngularJS Basic HTTP Authentication Example  
+ [angular-cms](https://github.com/jonniespratley/angular-cms) - A light weight CMS built with Angular.js and Yeoman
+ [ngSocket](https://github.com/angular/ngSocket) - WebSocket support for angular
+ 加密解密
  + [angularjs-crypto](https://github.com/pussinboots/angularjs-crypto) - decrytion/encryption of json in http requests/responses

----------------

# 资源
[AngularJs1.x Github](https://github.com/angular/angular.js)  
[AngularJs2.x Github](https://github.com/angular/angular)  
[AngularJS中文社区](http://angularjs.cn/)  
[官方文档](https://docs.angularjs.org/api)  
[官方指南](https://docs.angularjs.org/guide) - [中文版](http://docs.ngnice.com/guide)  
[awesome-angularjs](https://github.com/gianarb/awesome-angularjs) - AngularJs 服务,指令,实用工具资源  
[AngularJS-Learning](https://github.com/jmcunningham/AngularJS-Learning/blob/master/ZH-CN.md) - AngularJs学习资源  
[frontend-resources#angular](https://github.com/JonathanZWhite/frontend-resources#angular)  
[angular-resources](https://github.com/distilledhype/angular-resources)  
[angular-education](https://github.com/timjacobi/angular-education) - A collection of useful resources to learn and improve your AngularJS skills.  
[stackoverflow上的angularjs问题](http://stackoverflow.com/questions/tagged/angularjs)  
[破狼博客园 AngularJs](http://www.cnblogs.com/whitewolf/category/404298.html)  
[ng-newsletter.com](http://www.ng-newsletter.com/)   
[ngmodules.org](http://ngmodules.org/) - 流行的Angular模块、插件和指令     
[angular-js.in](http://angular-js.in/)  - 优秀Angular指令集合   


## 电子书
[angular-phonecat教程中文版](http://xdsnet.gitbooks.io/angular-phonecat-book-zhcn/content/)  
[restangular](http://wohugb.gitbooks.io/restangular/content/)  
[Web Component Architecture & Development with AngularJS](https://leanpub.com/web-component-development-with-angularjs/read)  
[Practical AngularJS](https://leanpub.com/Practical_AngularJS/read)  
[Pro AngularJs](http://pan.baidu.com/s/1mglBAyO)  
[AngularJs By Example](http://pan.baidu.com/s/19CAyM)  

## 教程
[AngularjsTutorial_cn](https://github.com/zensh/AngularjsTutorial_cn) - AngularJS入门教程     
[AngularJS学习笔记](http://www.zouyesheng.com/angular.html)  
[AngularJS体验式编程系列文章](http://blog.fens.me/series-angular/)  
[angularjshub.com](http://www.angularjshub.com/) - Angularjs示例    
[codecademy.com Angular教程](http://www.codecademy.com/learn/learn-angularjs) - Learn AngularJS  
[A Better Way to Learn AngularJS](https://thinkster.io/angulartutorial/a-better-way-to-learn-angularjs/)  
[使用AngularJS构建大型Web应用](http://www.infoq.com/cn/news/2013/02/angular-web-app)  
[Angular土豆视屏教程](http://www.tudou.com/plcover/AURJrOM6ntc/)  
[angular-phonecat](https://github.com/angular/angular-phonecat) - 官方示例项目  
[ng-demos](https://github.com/johnpapa/ng-demos) - variety of angular demos  
[angularjs-up-and-running](https://github.com/shyamseshadri/angularjs-up-and-running) - All the source code for the AngularJS Up & Running Book for O'Reilly  
[AngularJS in 60 Minutes](http://fastandfluid.com/publicdownloads/AngularJSIn60MinutesIsh_DanWahlin_May2013.pdf)  
[material-start](https://github.com/angular/material-start) - Angular Material入门教程  
[learning-angular](https://github.com/zafarali/learning-angular) - 学习Angular的教程(代码)    
[angularjs-up-and-running](https://github.com/shyamseshadri/angularjs-up-and-running) - AngularJS Up & Running Book for O'Reilly 源码    

## 基础项目(seed) 
[generator-hottowel](https://github.com/johnpapa/generator-hottowel) - Yo generator that creates an Angular app via HotTowel    
[angular-seed](https://github.com/angular/angular-seed) - angular种子文件（基础结构）  
[generator-angular](https://github.com/yeoman/generator-angular)  
[generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular)  
[angular-requirejs-seed](https://github.com/tnajdek/angular-requirejs-seed)  
[angularjs-gulp-browserify-boilerplate](https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate)  
[angular-express-seed](https://github.com/btford/angular-express-seed)  
[ng-boilerplate](https://github.com/ngbp/ngbp) - 成熟的web apps构建管理系统  
[angular-kickstart](https://github.com/vesparny/angular-kickstart) - 基于 AngularJS，GulpJS 和 Bower 的完整可伸缩构建系统，能加快 AngularJS 应用的开发  
[angular-app](https://github.com/angular-app/angular-app) - Reference application for AngularJS, CURD application demo  
[sailng](https://github.com/ryancp/sailng) - Sails.js + Angular = Awesome  
[angular-sailsjs-boilerplate](https://github.com/tarlepp/angular-sailsjs-boilerplate)  
[ngbp](https://github.com/ngbp/ngbp) - A sophisticated build management system for web apps (formerly ng-boilerplate) 
[angular-login-example](https://github.com/mrgamer/angular-login-example) - 独立的项目，展示了如何建立一个稳健的angular应用, 用于提供服务器的访问权限  

## 编码风格/设计模式/最佳实践 
[AngularJS风格指南](https://github.com/johnpapa/angularjs-styleguide/blob/master/i18n/zh-CN.md)  
[AngularJS应用的最佳实践和风格指南](https://github.com/mgechev/angularjs-style-guide/blob/master/README-zh-cn.md)  
[Angular风格指南](https://github.com/gocardless/angularjs-style-guide)  
[AngularJS styleguide](https://github.com/toddmotto/angularjs-styleguide)  
[angularjs-in-patterns](https://github.com/mgechev/angularjs-in-patterns) - 以不同的视角看AngularJS  
[recipes-with-angular-js](https://github.com/fdietz/recipes-with-angular-js) - AngularJs技巧  

## 组件库
*AngularJs扩展*  
[Angular UI](https://github.com/angular-ui/) —— [angularjs-ui-bootstrap](https://github.com/angular-ui/bootstrap)  
[angular-foundation](http://pineconellc.github.io/angular-foundation/)  
[mobile-angular-ui](https://github.com/mcasimir/mobile-angular-ui) - Angular.js Mobile UI Framework with Bootstrap 3  
[angular-strap](https://github.com/mgcrea/angular-strap) - AngularJS 1.2+ native directives for Bootstrap 3.  
[ng-showcase](https://github.com/angular-cn/ng-showcase) - Angular指令及组件的全面范例  
[famous-angular](https://github.com/Famous/famous-angular) - Bring structure to your Famo.us apps with the power of AngularJS.  
[angular-moment](https://github.com/urish/angular-moment) - Moment.JS Angular.JS 指令 (timeago and more)  
[angular-hotkeys](https://github.com/chieffancypants/angular-hotkeys) - Configuration-centric keyboard shortcuts for your Angular apps.  
[angular-common](https://github.com/michaeljcalkins/angular-common)  
[angular-filter](https://github.com/a8m/angular-filter) - Bunch of useful filters for AngularJS (with no external dependencies!)  
[ngReact](https://github.com/davidchang/ngReact) - 在Angular中使用React  
[AngularAgility](https://github.com/AngularAgility/AngularAgility) - A set of useful Angular.js extensions implementing common UX patterns to improve productivity.  
[angularUtils](https://github.com/michaelbromley/angularUtils) - 收集有用的、可重用的Angular组件  

*Table / Grid*  
[Smart-Table](https://github.com/lorenzofox3/Smart-Table) - bootstrap风格的table/grid    
[angular-deckgrid](https://github.com/akoenig/angular-deckgrid) - 轻量级的网格，支持AngularJS，它的指令不依赖于视觉表现    

*表单相关*  
[angular-validation](https://github.com/huei90/angular-validation) - Client Side Validation for AngularJS  
[angular-form-for](https://github.com/bvaughn/angular-form-for) - 简单地创建和验证HTML表单的Angular指令集。  
[angular-schema-form](https://github.com/Textalk/angular-schema-form) - 用JSON schema生成Form表单  
[forms-angular](https://github.com/forms-angular/forms-angular) - Probably the most opinionated framework in the world  

*文件上传*  
[ng-file-upload](https://github.com/danialfarid/ng-file-upload) - 轻量级的 AngularJS 文件上传工具，为不支持浏览器的 FileAPI polyfill 设计，使用 HTML5 直接进行文件上传    
[angular-file-upload](https://github.com/nervgh/angular-file-upload) - Angular File Upload is a module for the AngularJS framework  
[ngDroplet](https://github.com/Wildhoney/ngDroplet) - 可拖拽的HTML5 文件上传, 可预览图片/文件   

*按钮*  
[angular-promise-buttons](https://github.com/johannesjo/angular-promise-buttons) - 带加载状态的按钮   

*模态框、消息提示*  
[angular-dialog-service](https://github.com/m-e-conroy/angular-dialog-service) - 增强angular-ui-bootstrap的modal指令      
[ngDialog](https://github.com/likeastore/ngDialog) - Modals and popups provider for Angular.js applications   
[angular-sweetalert](https://github.com/leftstick/angular-sweetalert) - 通过angular的方式暴露的sweetalert angular 指令  
[ng-tasty](https://github.com/Zizzamia/ng-tasty) - A tasty collection of reusable UI components for Angular  

*Loading*  
[ngProgress](https://github.com/VictorBjelkholm/ngProgress) - 页面顶部的进度条 Angular provider  
[angular-busy](https://github.com/cgross/angular-busy) - 当$http请求时，在任意元素(或promise中)上显示 ```正在处理/加载``` 指示器。   
[ng-notify](https://github.com/matowens/ng-notify) - 简单、轻量级模块A simple, lightweight module for displaying notifications in your AngularJS app.  
[angular-spinner](https://github.com/urish/angular-spinner) -  显示动画loading的Angular指令(封装spin.js)     

*Icon*  
[angular-material-icons](https://github.com/klarsys/angular-material-icons) - Material 风格的自定义颜色和大小的图标的 AngularJS directive。    

*UI相关*  
[lumX](https://github.com/lumapps/lumx) - 基于AngularJS和Google Material Design规范的第一个响应前端的框架    
[angular-perfect-scrollbar](https://github.com/itsdrewmiller/angular-perfect-scrollbar) - 美化滚动条的小指令(封装perfect-scrollbar jQuery插件)  
[angular-parallax](https://github.com/oblador/angular-parallax) - 轻量、高性能的视差滚动  
[ngFx](https://github.com/Hendrixer/ngFx) - 简单, 漂亮的Angular动画库  

*Widgets*  
[angular-datepicker](https://github.com/alongubkin/angular-datepicker) - 日期/时间选择   
[angular-ui-tree](https://github.com/angular-ui-tree/angular-ui-tree) - A tree component for AngularJS, without jQuery as dependency.  
[angular-xeditable](http://vitalets.github.io/angular-xeditable/) - Edit in place for AngularJS :+1:  
[angular-scroll](https://github.com/oblador/angular-scroll) - Scrollspy, animated scrollTo and scroll events for angular.js  
[angular-intro.js](https://github.com/mendhak/angular-intro.js) - 封装intro.js的AngularJs指令  
[textAngular](https://github.com/fraywing/textAngular) - 文本编辑器  
[angular-elastic](https://github.com/monospaced/angular-elastic) -  自动伸缩的文本域  
[malhar-angular-dashboard](https://github.com/DataTorrent/malhar-angular-dashboard) - AngularJS通用仪表盘/小部件功能(指令)     

*多媒体*  
[angular-media-player](https://github.com/mrgamer/angular-media-player) -  包装&lt;audio&gt; 或 &lt;video&gt; 标签的指令, 暴露方法和属性来操作你的播放器  

## Angular Gulp插件  
[gulp-angular-templatecache](https://github.com/miickel/gulp-angular-templatecache) - 在$templateCache中串联和注册AngularJs模板  

## 源码解析  
[ui.router源码解析](http://www.html-js.com/article/Front-end-source-code-analysis-original-uirouter-source-code-analysis)  
[AngularJS源码分析](http://www.ngnice.com/posts/1ba1b9b59cd3b5)  

## 更多AngularJs资源  
[awesome-angularjs](https://github.com/gianarb/awesome-angularjs)  

