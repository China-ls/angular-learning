> 2015年6月27日， [huguangju](https://github.com/huguangju) 译
> 
> 译文：状态管理
> 
> 原文：[State Manager](https://github.com/angular-ui/ui-router/wiki)

[[下一篇 (嵌套状态和嵌套视图) ►|Nested States and Nested Views]]

##### 这个指南会让你深入了解UI-Router的组件和选项的方方面面。如果你仅仅需要一个快速参考指南，可以访问 [API Reference](http://angular-ui.github.io/ui-router/site)

## 状态管理
新的$stateProvider服务类似于Angular第一版的router，但是它仅专注于状态。
* 就整体的UI和导航而言，一个状态(```state```)相当于应用中的一个 "位置" 
* 一个状态描述 (通过 控制器 / 模版 / 视图属性) UI是怎样的外观和位于何处. 
* States often have things in common, and the primary way of factoring out these commonalities in this model is via the state hierarchy, i.e. parent/child states aka nested states. 

### 状态最简单的形式
状态最简单的形式就是它可以像这样被添加 (通常在module.config):
```html
<!-- in index.html -->
<body ng-controller="MainCtrl">
<section ui-view></section>
</body>
```
```javascript
// 在 app-states.js （或者起其它的名字）
$stateProvider.state('contacts', {
  template: '<h1>My Contacts</h1>'
})
```

#### 模板从哪里获取插入的内容? 
当一个状态被激活, 它的模板被自动插入到它的父状态的模板中的 `ui-view` 。如果它提一个顶级状态, 就像 'contacts', 因为它没有父状态, 那么它的父模板就是index.html。  

现在, contacts' 状态永远不会被激活。我们来看看如何激活一个状态。

#### 激活状态
激活状态有3种主要的方式:

1. 调用 `$state.go()` 。高级便利方法。[了解更多](https://github.com/angular-ui/ui-router/wiki/Quick-Reference#stategoto--toparams--options)
2. 点击一个包含 `ui-sref` 指令的链接。 [了解更多](https://github.com/angular-ui/ui-router/wiki/Quick-Reference#ui-sref)
3. 导航到 `url`关联的状态。 [[了解更多|URL Routing]].

***

### 模板

配置状态模板有几种方式。

正如上边看到的，设置模板最简单的方式就是通过 `template` 配置属性。
```javascript
$stateProvider.state('contacts', {
  template: '<h1>My Contacts</h1>'
})
```

除了写行内模板，也可以加载页面片段。（大多数时间会用这种方式设置模板。）
```javascript
$stateProvider.state('contacts', {
  templateUrl: 'contacts.html'
})
```
`templateUrl` 也可以是一个返回url的函数。它可以获取一个预设置的参数stateParams（非注入的）。
```javascript
$stateProvider.state('contacts', {
  templateUrl: function ($stateParams){
    return '/partials/contacts.' + $stateParams.filterBy + '.html';
  }
})
```
或者你可以像这样使用一个模板提供商函数，可提供注入以供函数内部使用，并且必须返回HTML模板：
```javascript
$stateProvider.state('contacts', {
  templateProvider: function ($timeout, $stateParams) {
    return $timeout(function () {
      return '<h1>' + $stateParams.contactId + '</h1>'
    }, 100);
  }
})
```
如果你想在 `<ui-view>` 被激活的状态填充前放一些默认内容，你也可以那么做。一旦状态被激活默认内容就会被替换，并填充以模板。
```html
<body>
    <ui-view>
        <i>Some content will load here!</i>
    </ui-view>
</body>
```

### Controllers
你可以给模板分配一个控制器。**注意:** 如果模板没定义，控制器不会被实例化。

你可以这样设置 `controller` ：
```javascript
$stateProvider.state('contacts', {
  template: '<h1>{{title}}</h1>',
  controller: function($scope){
    $scope.title = 'My Contacts';
  }
})
```

或者，你已经在本模块定义了一个 `controller` ，就这样用：
```javascript
$stateProvider.state('contacts', {
  template: ...,
  controller: 'ContactsCtrl'
})
```

或者把上边的代码用 `controllerAs` 语法来写：
```javascript
$stateProvider.state('contacts', {
  template: '<h1>{{contact.title}}</h1>',
  controller: function(){
    this.title = 'My Contacts';
  },
  controllerAs: 'contact'
})
```
和

```javascript
$stateProvider.state('contacts', {
  template: ...,
  controller: 'ContactsCtrl as contact'
})
```

另外，在有更高需求的情况下，可以使用 `controllerProvider` 来动态返回一个控制器或字符串：
```javascript
$stateProvider.state('contacts', {
  template: ...,
  controllerProvider: function($stateParams) {
      var ctrlName = $stateParams.type + "Controller";
      return ctrlName;
  }
})
```

控制器可以用$scope.$on()方法监听状态改变触发的事件。

控制器在需的时候被实例化，即当它对应的作用域创建的时候。当用户通过URL手动导航动一个状态，stateProvider会加载正确的模板到视图中，然后绑定控制器到模板的作用域。

#### Resolve
你可以用`resolve`为控制器提供定制的内容或数据到状态。`resolve`is an optional map of dependencies，可以被注入到控制器中。

任何是promise的依赖，会在控制器被实例化**之前**，stateChangeSuccess事件被触发后，被解析且转换成一个值。

`resolve`属性是一个map对象，包含这些键值对：
* key – {字符串}: 被注入到控制器中的一个依赖的名字。
* factory - {字符串|函数}: 
    * 如果是字符串，它就是一个服务的别名. 
    * 否则如果它是函数，它就会被注入并返回一个值当作依赖。如果结果是promise，它会在控制器被实例化之前被解析并返回一个值注入到控制器中。

**示例:**

下面`resolve`中的每个对象必须在`controller`被实例化之前被解析(如果是promise就通过 `deferred.resolve()`解析)。注意每个解析对象是如何作为参数注入到控制器中的。

```javascript
$stateProvider.state('myState', {
      resolve:{

         // 返回简单值的函数的例子。因为它不是promise，所以会立刻解析。
         simpleObj:  function(){
            return {value: 'simple!'};
         },

         // 返回promise的函数的例子。这是解析的典型用例。你可以注入任何你需要使用的服务，例如本例中的$http
         promiseObj:  function($http){
            // $http returns a promise for the url data
            return $http({method: 'GET', url: '/someUrl'});
         },

         // 另一个promise的例子。如果你需要对结果做一些处理，使用.then，并且你的promise可以随意链式调用。
         // 是一另一个解析的典型用例。
         promiseObj2:  function($http){
            return $http({method: 'GET', url: '/someUrl'})
               .then (function (data) {
                   return doSomeStuffFirst(data);
               });
         },        

         // 把名称作为字符串使用服务的例子。
         // 这会在模块内查找一个叫做'translations'的服务并返回它。
         // 注意：此服务会返回一个promise并会像上边的例子一样工作
         translations: "translations",

         // 展示服务注入到解析函数的例子。服务会返回一个promise。
         // 提示：注入$stateParams以获取url参数
         translations2: function(translations, $stateParams){
             // 假设getLang是一个服务的方法，通过$http获取翻译。
             // 同时假设我们的url是"/:lang/home"。
             return translations.getLang($stateParams.lang);
         },

         // 展示返回自定义promise的例子
         greeting: function($q, $timeout){
             var deferred = $q.defer();
             $timeout(function() {
                 deferred.resolve('Hello!');
             }, 1000);
             return deferred.promise;
         }
      },
 
      // 控制器实例化之前会等上边每一项都解析完成。
      // 例如，控制器不会被实例化，除非promiseObj的promise已经被解析
      // 然后那些对象被注入到控制器中以供使用。
      controller: function($scope, simpleObj, promiseObj, promiseObj2, translations, translations2, greeting){
          $scope.simple = simpleObj.value;

          // 可以确定promiseObj已经可以愉快地使用了！
          $scope.items = promiseObj.data.items;
          $scope.items = promiseObj2.items;

          $scope.title = translations.getLang("english").title;
          $scope.title = translations2.title;

          $scope.greeting = greeting;
      }
   })
```

[了解更多](https://github.com/angular-ui/ui-router/wiki/Nested-States-%26-Nested-Views#inherited-resolved-dependencies) about how resolved dependencies are inherited down to child states.

#### 在状态对象附带自定义数据
你可以附带自定义数据到状态对象（我们建议使用`data`属性以避免冲突）。
```javascript
// 展示一个基于对象状态和基于字符串状态的例子
var contacts = { 
    name: 'contacts',
    templateUrl: 'contacts.html',
    data: {
        customData1: 5,
        customData2: "blue"
    }  
}
$stateProvider
  .state(contacts)
  .state('contacts.list', {
    templateUrl: 'contacts.list.html',
    data: {
        customData1: 44,
        customData2: "red"
    } 
  })
```
在上面的例子中的状态你可以像下边这样访问数据：
```javascript
function Ctrl($state){
    console.log($state.current.data.customData1) // outputs 5;
    console.log($state.current.data.customData2) // outputs "blue";
}
```

[了解更多](https://github.com/angular-ui/ui-router/wiki/Nested-States-%26-Nested-Views#inherited-custom-data) about how custom data properties are inherited down to child states.

### onEnter 和 onExit 回调
还有'onEnter' 和 'onExit'两个回调，当状态分别变成激活和休眠时被调用。这两个回调也可以访问所有已解析的依赖。
```javascript
$stateProvider.state("contacts", {
  template: '<h1>{{title}}</h1>',
  resolve: { title: 'My Contacts' },
  controller: function($scope, title){
    $scope.title = 'My Contacts';
  },
  onEnter: function(title){
    if(title){ ... do something ... }
  },
  onExit: function(title){
    if(title){ ... do something ... }
  }
})
```

### 状态改变事件

所有的事件在`$rootScope`级别被触发。

* **$stateChangeStart** - **开始**转变时触发.
```javascript
$rootScope.$on('$stateChangeStart', 
function(event, toState, toParams, fromState, fromParams){ ... })
```
**注意:** 用 event.preventDefault() 来阻止转变的发生。
```javascript
$rootScope.$on('$stateChangeStart', 
function(event, toState, toParams, fromState, fromParams){ 
    event.preventDefault(); 
    // transitionTo() promise will be rejected with 
    // a 'transition prevented' error
})
```
* **$stateNotFound** - `v0.3.0` - 当在转换期间用提供的状态名请求状态**没有找到**时触发。The event is broadcast allowing any handlers a single chance to deal with the error (usually by lazy-loading the unfound state). 一个特殊的 `unfoundState` 对象会被传入监听处理器，可以在下面的例子中看见它的3个属性。 用 `event.preventDefault()` 可以中断转换 (transitionTo() promise 会不接受 'transition aborted' 错误). 了解更多深入的延迟加载的例子，查看 [How To: Lazy load states](https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-lazy-load-states)

```javascript
// 假设lazy.state没有在某个地方被定义
$state.go("lazy.state", {a:1, b:2}, {inherit:false});

// 在某处使用
$rootScope.$on('$stateNotFound', 
function(event, unfoundState, fromState, fromParams){ 
    console.log(unfoundState.to); // "lazy.state"
    console.log(unfoundState.toParams); // {a:1, b:2}
    console.log(unfoundState.options); // {inherit:false} + default options
})
```
* **$stateChangeSuccess** - 一旦状态转换**完成**时触发。
```javascript
$rootScope.$on('$stateChangeSuccess', 
function(event, toState, toParams, fromState, fromParams){ ... })
```
* **$stateChangeError** - 当在转换期间**发生错误**时触发。 需要特别注意的是，如果在`resolve`函数中发生了任何错误（javascript错误，服务不存在，等等），不会以传统的方式抛出错误。你只有监听$stateChangeError事件来捕获所有错误。 Use `event.preventDefault()` to prevent the $UrlRouter from reverting the URL to the previous valid location (in case of a URL navigation).
```javascript
$rootScope.$on('$stateChangeError', 
function(event, toState, toParams, fromState, fromParams, error){ ... })
```

### 视图加载事件

* **$viewContentLoading** - 一旦视图**开始**加载时, DOM被渲染**之前**触发。'$rootScope' 来广播这个事件。
```javascript
$rootScope.$on('$viewContentLoading', 
function(event, viewConfig){ 
    // 访问所有的视图配置属性。
    // 还有一个特殊的属性 'targeView'， viewConfig.targetView 
});
```

* **$viewContentLoaded** - 一旦视图**加载完成**, DOM渲染完成**之后**触。视图的'$scope'发送事件。
```javascript
$scope.$on('$viewContentLoaded', 
function(event){ ... });
```

[[下一篇 (嵌套状态和嵌套视图) ►|Nested States and Nested Views]]