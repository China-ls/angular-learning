
> 2015年8月10日， [huguangju](https://github.com/huguangju) 译
> 
> 译文：Angular 答疑
> 
> 原文：[FAQ](https://github.com/angular/angular.js/wiki/FAQ)

#### 相关文章：[AngularJs 最佳实践](Best-Practices.md)

1. **为什么会报jQuery插件找不到?**  
**Remember:** load jQuery _before_ AngularJS if you are using jQuery plugins!

2. **在控制器中我该怎么访问DOM?**  
**DO NOT** perform DOM selection/traversal from the controller. The HTML hasn't rendered yet. Look up 'directives'.

3. **为什么angular会提示controllers、directives等等找不到?**  
Calling `angular.module('myApp', [])` will ALWAYS create a new module (and wipe out your existing one). Instead, make sure to call `angular.module('myApp')` with only 1 parameter to refer to an already created module.

4. **如何呈现未转义的数据?**  
[$sce.trustAsHtml](http://stackoverflow.com/a/19705096/775359)

5. **如何监听array/object/$resource-result是否发生变化?**  
`$scope.$watch` has a third parameter to monitor changes by value ([and not by reference](http://snook.ca/archives/javascript/javascript_pass)).

6. **如何序列化用于提交的表单数据?**  
**Don't**. Don't try to collect input values manually. Just attach `ng-model="data.myField"` onto every form input and take a gander at `$scope.data` when you finally need it.

7. **应当总是以 '.' 间隔命名你的ng-modal**  
[Misko best practice](http://www.youtube.com/watch?v=ZhfUv0spHCY&feature=youtu.be&t=30m).

8. **应该如何从service中访问scope?**  
`$rootScope` is equivalent to the `ng-app` tag and can be injected into your bootstrap or services to add functions and values accessible on all scopes.  
**NOTE: avoid doing this - it's the equivalent to defining global variables**

9. **`module().factory()` 和 `module().service()`之间的差别是什么?**  
[Checkout this discussion thread](https://groups.google.com/forum/?fromgroups#!topic/angular/56sdORWEoqg).

10. **如何避免文档样式闪烁（**F**lash **O**f **U**nstyled **C**ontent (FOUC)） (和curly braces)?**  
Leverage [`ng-bind`](http://docs.angularjs.org/api/ng.directive:ngBind) instead of `{{...}}` and [`ng-cloak`](http://docs.angularjs.org/api/ng.directive:ngCloak) in a few places

11. **为何不能这样写 `<a ng-click="go({{myVal}})">` ?**  
The only `ng-*` attributes that require `{{...}}` is `ng-src` and `ng-href` because the final result must be a string, _not_ an expression. All others will work without.

11. **嵌套路由 / 视图?**  
[Maybe...](https://github.com/angular-ui/ui-router)

12. **可以指定模板文件或行内模板吗?**  
**Yes!** You can always do `<script id="some/partial.html" type="text/ng-template">` and angular will use it instead!

13. **如何在 `ngResource` 的url中使用端口?**  
Escape it: `$resource('example.com\\:8080')`

14. **为什么一些插件触发 `change` 事件却无效?**  
Angular watches the [input](https://developer.mozilla.org/en-US/docs/DOM/DOM_event_reference/input) event, not the 'change' event.

15. **Don't use jQuery to toggle crap. Just use a lot of variable flags inline**
`<a ng-click="flags.open=!flags.open">...<div ng-class="{active:flags.open}">` 

16. **如何从审查元素中查看scope?**  
**Google Chrome:** install the [Batarang extension](https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk?utm_source=chrome-ntp-icon), inspect a DOM element, _then_ type `$scope` in the console  
**Firefox / Firebug:** inspect a DOM element, _then_ type `angular.element($0).scope()` (or `$($0).scope()`) in the console  
**IE 10+:** Using the F12 tool, inspect a DOM element, _then_ type `angular.element($0).scope()` (or `$($0).scope()`) in the console.

17. **有什么好的指令示例或库吗?**  
[AngularUI](http://angular-ui.github.com) is an awesome collection of AngularJS tools (and even BETTER example code).

18. **IE浏览器!?!**  
For IE v8.0 or earlier you may want to [read this](http://docs.angularjs.org/guide/ie) and [use this](http://angular-ui.github.com/#ieshiv).

19. **必须用在路由中使用'#'吗?**  
[`$locationProvider`](http://docs.angularjs.org/api/ng.$locationProvider)

20. 在尝试自已把jQuery插件包装成指令之前，你应该使用 [AngularUI Passthru Directive (uiJq)](http://angular-ui.github.com/#directives-jq)。 

21. **为什么我的 `$scope.$watch()` 被递归触发?**  
If you change `newVal` inside your `$scope.$watch(newVal, oldVal)` it could fire again (recursively?). After a `$watch()` is runs, the `$scope` is re-evaluated and relevant watchers will be re-triggered.

22. **什么时候该使用 `$scope.$apply()`?**  
[You should **ONLY** use `$scope.$apply` in non-angular events/callbacks. It _usually_ doesn't belong anywhere else.](https://github.com/angular/angular.js/wiki/When-to-use-$scope.$apply())

23. **开启 `html5mode` 后, 该如何获取`<a href>`的回退行为?**  
If you want a link to cause a full page refresh then add `target="_self"` to your `<a>` tag

24. **该如何使用 [`.preventDefault()`](http://api.jquery.com/event.preventDefault/) 或 [`.stopPropagation()`](http://api.jquery.com/event.stopPropagation/)?**  
All `ng-click` and related bindings inject a `$event` object that you can call things like `.preventDefault()` or even pass the object to your methods

25. **AngularJS 在我的Chrome扩展中不能正常使用!**  
You want to use [`ng-csp`](http://docs.angularjs.org/api/ng.directive:ngCsp)

26. **如何去除 $http 和 html 局部模板的缓存?**  
```js
myAppModule.config(function($routeProvider, $provide) {
  $provide.decorator('$http', function($delegate){
    var get = $delegate.get;
    $delegate.get = function(url, config){
      url += (url.indexOf('?') !== -1) ? '?' : '&';
      url += 'v=' + cacheBustVersion;
      return get(url, config);
    };
    return $delegate;
  });
});
```

## Testing

1. **Rejecting / Resolving a `$q.defer()` doesn't go through**  
You must add a `$scope.$apply()` for these to process

2. **Jasmine `spyOn()` is not executing the spy'd function**  
Not necessarily an AngularJS question, but you need to append `.andCallThrough()`

3. **How do I test async code?**  
Focus on creating mocks (fake objects / functions) that let you flush the async stuff synchronously. `$timeout` has a `.flush()` method specifically for this reason, just remember to add a `$scope.$apply()` too.   If that still doesn't work, look up Jasmine's `runs()` and `waits()` functions.

4. **How does `module()` and `inject()` work?**  
You can call `module()` as many times as you want, and spin up as many unrelated modules as you want at time **BEFORE** your very first `inject()` is called. All subsequent calls to `module()` afterwards will either behave incorrectly or fail. If you load modules that contain assets with the same name, the last module to have loaded for that specific test will take precedence. This is a useful and simplistic way to load mock assets.

5. **How can I mock or modify services?**  
Call `module()` and pass [`$provide`](http://docs.angularjs.org/api/AUTO.$provide) to a callback. Use [`$provide.decorator()`](http://docs.angularjs.org/api/AUTO.$provide#decorator) as an easy way to manipulate or replace services before they get injected into other services! Alternatively, you could just create `myApp.mocks.myService` modules that contain mock services with the identical names to their originals and load it on-demand. The last module you load will take precedence.