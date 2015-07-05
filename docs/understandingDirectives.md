
> 2015年6月27日， [Carson](https://github.com/huguangju) 译
> 
> 译文：理解AngularJS的指令Directieve
> 
> 原文：[Understanding Scopes](https://github.com/angular/angular.js/wiki/Understanding-Directives)

### [大部分内容来自 AngularUI](https://github.com/angular-ui/angular-ui/blob/master/modules/directives/jq/README.md)

这篇文章试图解释AngularJS指令和编译引擎相关的工作原理（虽然有点偏题），理解它可以让你在初次使用时不至于手足无措。

## Injecting, Compiling, and Linking 函数

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
      // 在你原始未被渲染的模板中，对于每个ui-jq实际理论上执行一次(1)。
      // 作用域不可以仅仅作为模板被缓存。
      // 你可以查看会被用到的变量或表达式的DOM和缓存信息，但你还不能计算出他们的值。
      // Angular会缓存模板，现在是一个好时机去注入新angular模板作为子级或将来的同级去自动运行……

      return function LinkingFunction($scope, $linkElement, $linkAttributes) {

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

你_只能_在**LinkingFunction**内的`$scope`中访问数据。因为模板逻辑可能会删除或复制元素。你_只能_依赖在**LinkingFunction**中的最终的DOM配置。你也_不可以_依赖**children** 或 **following-siblings**，因为它们没有关联。

## Pre vs Post Linking 函数

你可以随时使用`LinkingFunction()`，你也可使用包含pre和post的linking函数。[奇怪](https://github.com/angular/angular.js/issues/2592)的是，一个 `LinkingFunction()` 默认情况下是一个 `PostLinkingFunction()` :
```js
link: function LinkingFunction($scope, $element, $attributes) { ... }
...
link: {
  pre: function PreLinkingFunction($scope, $element, $attributes) { ... },
  post: function PostLinkingFunction($scope, $element, $attributes) { ... },
}
```

所不同的是，`PreLinkingFunction（）`会在先在parent上触发，接着是child，等等。`PostLinkingFunction()` 则相反，它会先在child上触发，接着是parent，等等。这里有一个示例：http://plnkr.co/edit/qrDMJBlnwdNlfBqEEXL2?p=preview

**当我想实现这种反转的 `PostLinking` 行为怎么办？**有时候jQuery插件需要知道子DOM元素（如幻灯片或类似Isotope的布局管理器）的数量和大小。有几个方法来支持这种行为：

* **(不好的用法)** 使用 [$timeout](http://docs.angularjs.org/api/ng.$timeout) 延迟插件的执行  
* 嵌套指令。如果每个child有一个指令，使用 `require: '^parentDirective'` 就可以访问 `parentDirective` 控制器。
  * 如果你在 `parentDirective` 上使用 `PreLinkingFunction()` , 你可以实例如这个容器为空，然后在每次使用它时更新

**这 _不_ 适用于异步更改，像通过AJAX加载 `$scope` **

如果你需要等待 `$scope` 中的数据加载完毕，可以尝使用 [ng-if](http://docs.angularjs.org/api/ng/directive/ngIf) 去延迟DOM块的linking。

## $element === angular.element() === jQuery() === $()

为了让使用DOM操作更容易，AngularJS包含的jQuery的小型化版本，称为jqlite。这模拟一些的jQuery的核心功能，使用_大量_与jQuery相同的API。你看到任何AngularJS DOM元素，等同于一个 `jQuery()` 包裹的DOM元素。


**你 _不必_ 用 `jQuery()` 包裹AngularJS元素**

如果你注意到所有jQuery的数组方法(或插件)在AngularJS元素上无效，那是因为你也许忘记加载jQuery库了，
或者你忘记在AngularJS **之前** 加载它。如果AngularJS加载时没有发现jQuery已经加载，它会用它自身的jqlite库代替。

## $attributes.$observe()

如果你有一个 _同级_ 元素包含`{{}}`，这个元素就需要被解析并且会被多次改变。 **不要手动做这个事！**

用`$attributes.$observe('myOtherAttribute', function(newValue))` 替代你可能会用的`$scope.$watch()`。唯一的区别就是第一个参数是属性名（不是表达式），并且回调函数仅有 `newValue`（已经解析过的）。每次解析变化时它也会重复触发这个回调。

**注意:** 这意味着你仅可以访问 _asynchronously_ 属性

**注意:** 你果你想 _可靠地_ 访问属性的每次预执行，你应该在CompileFunction里做

## 扩展指令

比如说你想用第三方指令，但你想扩展它却不想修改它。有几种做法。

### 全局配置
一些设计良好的指令（例如AngularUI中的那些）可以全局配置，你不必在你的每个实例中传递参数项。
### Require Directives
创建一个新指令，假设第一个指令已经执行。你可以在它父DOM元素上引用它，或者在相同的DOM元素。如果你想在主指令里访问函数，得通过指令控制器暴露它（这可能需要向插件开发者提交一个PR或feature）。
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
您可以创建一个新的指令具有完全相同的名称与原始指令。这两个指令将被执行。但是，您可以使用优先级来首先控制该指令火灾（再次，可能需要pull请求或功能请求）
你可以创建一个与原指令完全同时的新指令。两个指令将被执行。但是，可以指定优先级来控制哪个指令发触发（同样，需要提一个PR或FR）
```js
// <div a></div>
ui.directive('a', ... )
myApp.directive('a', ... )
```
### Templating
你可以利用 `<ng-include>` 或者干脆创建一个指令，生成主指令的附加HTML。
```js
// <div b></div>
ui.directive('a', ... )
myApp.directive('b', function(){
  return {
    template: '<div a="someOptions"></div>'
  }
})
```
### 指令配置指南
有时候，你想创建一个具有不同的配置选项（如templateUrl）的新名称指令的特殊版本，同时保留原有的指令可用。已注册的任何指令，使名称为“指令”附加到它提供的特殊服务。如果您注册 `<my-dir>`（名称为 'myDir'），它会创建一个名为'myDirDirective'服务。如果你是注入到一个新的指令提供函数，你会得到指令配置的数组（通常按优先顺序）。选择你想要的（通常是第一个），对它进行浅拷贝，修改配置，并返回。

```js
// <div b></div>
ui.directive('a', ... )
myApp.directive('b', function(aDirective){
   return angular.extend({}, aDirective[0], { templateUrl: 'newTemplate.html' });
})
```
## 脚注

1. A [transcluding function](http://docs.angularjs.org/guide/directive) is actually a 4th layer, but this is not used by uiJq