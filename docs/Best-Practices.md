
> 2015年8月10日， [huguangju](https://github.com/huguangju) 译
> 
> 译文：Angular最佳实践
> 
> 原文：[Best Practices](https://github.com/angular/angular.js/wiki/Best-Practices)

### 最佳实践
* **用命名空间组织代码**  
  You shouldn't worry about prefixing internal code, but anything you plan to OpenSource should be namespaced
  * The `ng-` is reserved for core directives.
  * Purpose-namespacing (`i18n-` or `geo-`) is better than owner-namespacing (`djs-` or `igor-`)
  * Checkout [ui-alias](https://github.com/angular-ui/ui-alias) to remove 3rd party prefixes
* **仅在原子性事件(atomic events)上使用 `.$broadcast()`, `.$emit()` 和 `.$on()`**  
  Events that are relevant globally across the entire app (such as a user authenticating or the app closing). If you want events specific to modules, services or widgets you should consider Services, Directive Controllers, or 3rd Party Libs
  * `$scope.$watch()` should replace the need for events
  * Injecting services and calling methods directly is also useful for direct communication
  * Directives are able to directly communicate with each other through directive-controllers
* **尽可能让用户使用表达式**  
  * `ng-href` and `ng-src` are plaintext attributes that support `{{}}`
  * Use `$attrs.$observe()` since expressions are _async_ and could change
* **通过指令的控制器扩展指令**  
  You can place methods and properties into a directive-controller, and access that same controller from other directives. You can even override methods and properties through this relationship
* **向controllers 和 directives中添加销毁代码**  
  Controller and directives emit an event right before they are destroyed. This is where you are given the opportunity to tear down your plugins and listeners and pretty much perform garbage collection.
  * Subscribe to the `$scope.$on('$destroy', ...)` event
* **_适当地_利用模块**  
  Instead of slicing your app across horizontals that can't be broken up, group your code into related bundles. This way if you remove a module, your app still works.
  * Checkout [angular-app/angular-app](https://github.com/angular-app/angular-app/tree/master/client/src/app) for a good example
  * `app.controllers`, `app.services`, etc will break your app if you remove a module
  * `app.users`, `app.users.edit`, `app.users.admin`, `app.projects`, etc allows you to group and nest related components together and create loose coupling
  * Spread route definitions across multiple module `.config()` methods
  * Modules can have their own dependencies (including external)
  * **Folder structure _should_ reflect module structure**
* **添加NPM 和 Bower 支持**  
  This has become the standard for AngularJS so it's a good idea to familiarize yourself

### [反面模式（Anti-Patterns）](https://github.com/angular/angular.js/wiki/Anti-Patterns)

1. 不要用 `$()` 包裹 `element` 。所有的 AngularJS 元素已经是jQuery对象了
2. 不要用 `if (!$scope.$$phase) $scope.$apply()`, it means your $scope.$apply() isn't high enough in the call stack
3. 不要用jQuery去创建模板或DOM
4. 在没有尝试查找、fork和pull request已存在的项目之前，不要创建新的插件(不要随意造新的轮子)
5. 不要在独立作用域中用scalar variable (null is scalar) 作为一个modal(就像ng-if)。(例子: http://embed.plnkr.co/qRhLfw/preview)