
> 2015年8月10日， [huguangju](https://github.com/huguangju) 译
> 
> 译文：AngualrJs路由设计探讨
> 
> 原文：[Routing Design Discussion](https://github.com/angular/angular.js/wiki/Routing-Design-Discussion)

这篇文章来自邮件列表，收集了关于路由系统的主要的讨论、issues和pull requests。请在这里随意添加其它的想法或评论。

## 1. Catch-all routes / route parameters with slashes / regular expressions in routes

Pull Request [#918](https://github.com/angular/angular.js/pull/918):  $route should allow regexps params

Pull Request [#972](https://github.com/angular/angular.js/pull/972): feat($route): regexp support for $route params

Pull Request [#1402](https://github.com/angular/angular.js/pull/1402) fix($resource) Route constructor, updated RegExp

Pull Request [#1560](https://github.com/angular/angular.js/pull/1560): feat(routeProvider): Add support to catch-all parameters in routes

Pull Request [#1634](https://github.com/angular/angular.js/pull/1634): Improved Angular routing in a backwards compatible way.

Pull Request [#2571](https://github.com/angular/angular.js/pull/2571): Added hook for alternative route matching

## 2. 动态路由模板 / 模板路由

[AngularJS] Is it possible to interpolate templateURL in $routeProvider?

[AngularJS] Can we use "template" with $routeProvider to change (one the fly) and load different 
partial.html files inside of NgView ? 

Pull Request [#1534](https://github.com/angular/angular.js/pull/1534): feat($routeProvider): Allow using functions as template params in 'when'

StackOverflow: AngularJS - How to use $routeParams in generating the templateUrl?

## 3. State-charts / State-trees / FSM

[AngularJS] Using a Finite State Machine to control routing

[AngularJS] State charts

## 4. 多重 / 嵌套路由支持

[AngularJS] Nested Routing

[AngularJS] Custom Routing / multiple or no ng-views

[AngularJS] Multi-level views, like <ng-view level='2'></ng-view>?

Pull Request [#1198](https://github.com/angular/angular.js/pull/1198): Multiple named ngView directives and attaching views to routes

AngularUI routing enhancements discussion: https://github.com/angular-ui/router/issues/1#issuecomment-12459983

## 5. 路由更新和触发器

Pull Request [#577](https://github.com/angular/angular.js/pull/577): Escaped "short" word and added ability to stop updatingRoute in beforeUpdateRoute

Pull Request [#975](https://github.com/angular/angular.js/pull/975): Per-route option to trigger $routeUpdate instead of reloading the same controller 

## 6. Misc

Put here whatever doesn't fit in the other categories.