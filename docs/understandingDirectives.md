
> 2015年6月27日， [Carson](https://github.com/huguangju) 译
> 
> 译文：理解AngularJS的指令Directieve
> 
> 原文：[Understanding Scopes](https://github.com/angular/angular.js/wiki/Understanding-Directives)

### [大部分内容来自 AngularUI](https://github.com/angular-ui/angular-ui/blob/master/modules/directives/jq/README.md)

This document is a (tangential) attempt to explain how AngularJS directives and the related compiling engine works so that you're not flailing around like a noodle the first time you try to tackle it yourself.
这篇文章试图解释AngularJS指令和编译引擎相关的工作原理（虽然有点偏题），理解它可以让你在初次使用时不至于手足无措。

## Injecting, Compiling, and Linking 函数

When you create a directive, there are essentially up to 3 function layers for you to define[ [1]](#footnotes):
当创建一个指令时，可以最多为它定义3个函数层[ [1]](#footnotes):

```js
myApp.directive('uiJq', function InjectingFunction(){

  // === InjectingFunction === //
  // Logic is executed 0 or 1 times per app (depending on if directive is used).
  // Useful for bootstrap and global configuration
  // 理论上在每个应用中会被执行0或1次（取决于指令是否被使用）。
  // 对于程序引导和全局配置很有用。

  return {
    compile: function CompilingFunction($templateElement, $templateAttributes) {

      // === CompilingFunction === //
      // Logic is executed once (1) for every instance of ui-jq in your original UNRENDERED template.
      // Scope is UNAVAILABLE as the templates are only being cached.
      // You CAN examine the DOM and cache information about what variables
      //   or expressions will be used, but you cannot yet figure out their values.
      // Angular is caching the templates, now is a good time to inject new angular templates 
      //   as children or future siblings to automatically run..
      
      // === CompilingFunction === //
      // 在你原始未被渲染的模板中，对于每个ui-jq实际理论上执行一次(1)。
      // 作用域不可以仅仅作为模板被缓存。
      // 你可以查看会被用到的变量或表达式的DOM和缓存信息，但你还不能计算出他们的值。
      // Angular会缓存模板，现在是一个好时机去注入新angular模板作为子级或将来的同级去自动运行……

      return function LinkingFunction($scope, $linkElement, $linkAttributes) {

        // === LinkingFunction === //
        // Logic is executed once (1) for every RENDERED instance.
        // Once for each row in an ng-repeat when the row is created.
        // Note that ng-if or ng-switch may also affect if this is executed.
        // Scope IS available because controller logic has finished executing.
        // All variables and expression values can finally be determined.
        // Angular is rendering cached templates. It's too late to add templates for angular
        //  to automatically run. If you MUST inject new templates, you must $compile them manually.

        // === LinkingFunction === //
        // 对于每个已渲染的模板理论上执行一次(1)。
        // 在ng-repeat中的每一行被创建时。
        // 注意ng-if或者ng-switch也许会在影响执行。
        // 作用域是可用的，因为理论上已以执行完毕。
        // 所有的变量和表达式的值最终可以确定。
        // Angular已经渲染缓存的模板。这时添加模板到angular让它自动运行就太晚了。
        // 如果你一定要注入新模板，你就必须用$compile手动编译它。

      };
    }
  };
})
```

You can _only_ access data in `$scope` inside the **LinkingFunction**. Since the template logic may remove or duplicate elements, you can _only_ rely on the final DOM configuration in the **LinkingFunction**. You still _cannot_ rely upon **children** or **following-siblings** since they have not been linked yet.
你_只能_在**LinkingFunction**内的`$scope`中访问数据。因为模板逻辑可能会删除或复制元素。你_只能_依赖在**LinkingFunction**中的最终的DOM配置。你也_不可以_依赖**children** 或 **following-siblings**，因为它们没有关联。

## Pre vs Post Linking 函数
Anywhere you can use a `LinkingFunction()`, you can alternatively use an object with a pre and post linking function. [Oddly enough](https://github.com/angular/angular.js/issues/2592), a `LinkingFunction()` is a `PostLinkingFunction()` by default:
你可以随时使用`LinkingFunction()`，你也可使用包含pre和post的linking函数。[奇怪](https://github.com/angular/angular.js/issues/2592)的是，一个 `LinkingFunction()` 默认情况下是一个 `PostLinkingFunction()` :
```js
link: function LinkingFunction($scope, $element, $attributes) { ... }
...
link: {
  pre: function PreLinkingFunction($scope, $element, $attributes) { ... },
  post: function PostLinkingFunction($scope, $element, $attributes) { ... },
}
```

The difference is that `PreLinkingFunction()` will fire on the parent first, then child, and so on. A `PostLinkingFunction()` goes in reverse, firing on the child first, then parent, and so on. Here's a demo: http://plnkr.co/edit/qrDMJBlnwdNlfBqEEXL2?p=preview
所不同的是，`PreLinkingFunction（）`会在先在parent上触发，接着是child，等等。`PostLinkingFunction()` 则相反，它会先在child上触发，接着是parent，等等。这里有一个示例：http://plnkr.co/edit/qrDMJBlnwdNlfBqEEXL2?p=preview

**When do I want this reverse `PostLinking` behavior?** Sometimes jQuery plugins need to know the number and size of children DOM element's (such as slideshows or layout managers like Isotope). There are a few ways to support these:
**当我想实现这种反转的 `PostLinking` 行为怎么办？**有时候jQuery插件需要知道子DOM元素（如幻灯片或类似Isotope的布局管理器）的数量和大小。有几个方法来支持这种行为：

* **(Worst)** Delay the plugin's execution using [$timeout](http://docs.angularjs.org/api/ng.$timeout)
* Nested directives. If each child has a directive, it can  `require: '^parentDirective'` which will give you access to the `parentDirective` controller.
  * If you use the `PreLinkingFunction()` on `parentDirective`, you can instantiate the container empty, and use then update it every time the 
* **(不好的用法)** 使用 [$timeout](http://docs.angularjs.org/api/ng.$timeout) 延迟插件的执行  
* 嵌套指令。如果每个child有一个指令，使用 `require: '^parentDirective'` 就可以访问 `parentDirective` 控制器。
  * 如果你在 `parentDirective` 上使用 `PreLinkingFunction()` , 你可以实例如这个容器为空，然后在每次使用它时更新

**This does _NOT_ accomodate for async changes such as loading `$scope` data via AJAX**
**这 _不_ 适用于异步更改，像通过AJAX加载 `$scope` **

If you need to wait till your `$scope` data finishes loading try using [ng-if](http://docs.angularjs.org/api/ng/directive/ngIf) to defer linking of a block of DOM.
如果你需要等待 `$scope` 中的数据加载完毕，可以尝使用 [ng-if](http://docs.angularjs.org/api/ng/directive/ngIf) 去延迟DOM块的linking。

## $element === angular.element() === jQuery() === $()

To make working with the DOM easier, AngularJS contains a miniaturized version of jQuery called jqlite. This emulates some of the core features of jQuery using an _almost_ identical API as jQuery. Any time you see an AngularJS DOM element, it will be the equivalent to a `jQuery()` wrapped DOM element.

**You do _NOT_ have to wrap AngularJS elements in `jQuery()`**

If you are noticing that the full array of jQuery methods (or plugins) aren't available on an AngularJS element, it's because you either forgot to load the jQuery lib, or you forgot to load it **BEFORE** loading AngularJS. If AngularJS doesn't see jQuery already loaded by the time AngularJS loads, it will use its own jqlite library instead.

## $attributes.$observe()

If you have a _sibling_ attribute that will contain `{{}}` then the attribute will need to be evaluated and could even change multiple times. **Don't do this manually!**

Instead use `$attributes.$observe('myOtherAttribute', function(newValue))` exactly as you would have used `$scope.$watch()`. The only difference in the first argument is the attribute name (not an expression) and the callback function only has `newValue` (already evaluated for you). It will re-fire the callback every single time the evaluation changes too.

**NOTE:** This means that you can only access this attribute _asynchronously_

**NOTE:** If you want to _reliably_ access the attribute pre-evaluation then you should do it in the CompileFunction

## Extending Directives

Lets say you want to use a 3rd-party directive, but you want to extend it without modifying it. There are several ways you can go about doing this.

### Global Configurations
Some well-designed directives (such as those found in AngularUI) can be configured globally so that you do not have to pass in your options into every instance.
### Require Directives
Create a new directive that assumes the first directive has already been applied. You can require it on a parent DOM element, OR on the same DOM element. If you need to access functionality found in the primary directive, make it exposed via the directive controller (this may require submitting a Pull Request or feature request to the plugin developer).  
```js
// <div a b></div>
ui.directive('a', function(){
  return {
    controller: function(){
      this.data = {}
      this.changeData = function( ... ) { ... }
    },
    link: ($scope, $element, $attributes, controller) {
      controller.data = { ... }
    }
  }
})
myApp.directive('b', function(){
  return {
    require: 'a',
    link: ($scope, $element, $attributes, aController) {
      aController.changeData()
      aController.data = { ... }
    }
  }
})
```
### Stacking Directives
You can create a new directive with the exact same name as the original directive. Both directives will be executed. However, you can use the priority to control which directive fires first (again, may require a Pull Request or feature request)
```js
// <div a></div>
ui.directive('a', ... )
myApp.directive('a', ... )
```
### Templating
You can leverage `<ng-include>` or simply create a directive that generates the HTML with the primary directive attached.
```js
// <div b></div>
ui.directive('a', ... )
myApp.directive('b', function(){
  return {
    template: '<div a="someOptions"></div>'
  }
})
```
### Specialized the Directive Configuration
Sometimes you want create a specialized version of a directive with a new name that has different configuration options (such as templateUrl), while leaving the original directive available. Any directive that is registered makes available a special service with the name 'Directive' appended to it. If you registered `<my-dir>` (with the name 'myDir') it will create a service called 'myDirDirective'. If you inject that into a new directive provider function, you will get an array of directive configurations (in priority order, presumably).  Choose the one you want (usually the first), make a shallow copy of it, modify the configuration and return it.
```js
// <div b></div>
ui.directive('a', ... )
myApp.directive('b', function(aDirective){
   return angular.extend({}, aDirective[0], { templateUrl: 'newTemplate.html' });
})
```
## Footnotes

1. A [transcluding function](http://docs.angularjs.org/guide/directive) is actually a 4th layer, but this is not used by uiJq