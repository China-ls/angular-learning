> 2015年8月11日， [huguangju](https://github.com/huguangju) 译 
> 译文：Angular 表单 
> 原文：[Angular 表单](https://code.angularjs.org/1.5.7/docs/guide/forms) 
> **注：仅仅是对[Angular 表单 v1.2.8](http://docs.ngnice.com/guide/forms)中文文档的补充** 

- [ ] 待翻译

## 简单的表单

`ngModel` 的值不会被赋值，除非它对应的input字段通过了验证；例如：`email` 类型的文本域的值必须是邮件格式的。


## 使用 CSS 类

为了允许对表单和控件自定义样式， `ngModel` 增加了如下的CSS类：

- `ng-valid`: modal通过验证
- `ng-invalid`: modal验证失败
- `ng-valid-[key]`: 由 `$setValidity` 添加的所有验证通过的值
- `ng-invalid-[key]`: 由 `$setValidity` 添加的所有验证失败的值
- `ng-pristine`: 控件为初始状态
- `ng-dirty`: 控件输入值已变更
- `ng-touched`: 控件已失去焦点
- `ng-untouched`: 控件未失去焦点
- `ng-pending`: 任何未满足 `$asyncValidators` 的情况

## 自定义模型更新触发器

默认情况下，任何内容的变更会触发一个模型更新和表单验证。你可以用 `ngModelOptions` 指令绑定指定的事件列表来覆盖这个行为。例如，`ng-model-options="{ updateOn: 'blur' }"` 仅会在控件失去焦点后更新和验证。你可以用空格分格的列表设置几个事件。例如，`ng-model-options="{ updateOn: 'mousedown blur' }"`

<img alt="animation showing debounced input" src="https://code.angularjs.org/1.4.3/docs/img/guide/forms-update-on-blur.gif">

如果你想保持默认行为，只是在添加新的事件可能触发更新和验证，添加 "default" 作为指定的事件之一。
If you want to keep the default behavior and just add new events that may trigger the model update
and validation, add "default" as one of the specified events.

例如， `ng-model-options="{ updateOn: 'default blur' }"`


## 非及时地(防抖动)模型更新

通过 ```ngModelOptions``` 指令的 'debounce' 属性可以延迟model的更新/验证。这个延迟也可以应用到解析器、验证器和像 `$dirty` 或 `$pristine` 的模型标志上。

<img alt="animation showing debounced input" src="https://code.angularjs.org/1.4.3/docs/img/guide/forms-debounce.gif">

例如，`ng-model-options="{ debounce: 500 }"` 最后一次内容更改后等待半分钟，才会触发模型绑定和表单验证。

如果使用了自定义触发器，可以用 `debounce` 对象分别为每一个事件自定义防抖时间。需要在一些特定的情况下强制立即更新时会很有用（像`blur`事件）。

例如，`ng-model-options="{ updateOn: 'default blur', debounce: { default: 500, blur: 0 } }"`

If those attributes are added to an element, they will be applied to all the child elements and
controls that inherit from it unless they are overridden.

## 自定义验证

Angular提供了一些常用的html5输入控件的验证实现：(text, number, url, email, radio, checkbox), 以及一些用于验证的指令 (required, pattern, minlength, maxlength, min, max)。

可以使用自定义指令，并require `ngModel` ，你可以添加自已的验证函数到 `ngModelController` 的 `$validators` 对象上。示例如下。

`$validators` 对象中的每一个函数接收`modelValue` 和 `viewValue`作为参数。Angular会根据每个函数返回的值(`true`: valid, `false`: invalid)，在内部调用`$setValidity`。验证函数会在每次输入框更改(`$setViewValue` 被调用) 或者绑定的模型更改的时候被调用。`$parsers` 和 `$formatters`各自成功运行时会开始验证。失败的验证存储在`ngModel.NgModelController.$error`中。

另外, `$asyncValidators` 对象处理同步验证, 例如向后端发起 `$http` 请求。Functions added to the object must return
a promise that must be `resolved` when valid or `rejected` when invalid.
In-progress async validations are stored by key in
{@link ngModel.NgModelController#$pending `ngModelController.$pending`}.

In the following example we create two directives:
 * An `integer` directive that validates whether the input is a valid integer. For example,
 `1.23` is an invalid value, since it contains a fraction. Note that we validate the viewValue
 (the string value of the control), and not the modelValue. This is because input[number] converts
 the viewValue to a number when running the `$parsers`.

 * A `username` directive that asynchronously checks if a user-entered value is already taken.
 We mock the server request with a `$q` deferred.

```html
<form name="form" class="css-form" novalidate>
  <div>
    Size (integer 0 - 10):
    <input type="number" ng-model="size" name="size"
           min="0" max="10" integer />{{size}}<br />
    <span ng-show="form.size.$error.integer">The value is not a valid integer!</span>
    <span ng-show="form.size.$error.min || form.size.$error.max">
      The value must be in range 0 to 10!</span>
  </div>
  <div>
    Username:
    <input type="text" ng-model="name" name="name" username />{{name}}<br />
    <span ng-show="form.name.$pending.username">Checking if this name is available...</span>
    <span ng-show="form.name.$error.username">This username is already taken!</span>
  </div>
</form>
```

```js
var app = angular.module('form-example1', []);

var INTEGER_REGEXP = /^\-?\d+$/;
app.directive('integer', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.integer = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (INTEGER_REGEXP.test(viewValue)) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  };
});

app.directive('username', function($q, $timeout) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
    var usernames = ['Jim', 'John', 'Jill', 'Jackie'];

      ctrl.$asyncValidators.username = function(modelValue, viewValue) {

        if (ctrl.$isEmpty(modelValue)) {
          // consider empty model valid
          return $q.when();
        }

        var def = $q.defer();

        $timeout(function() {
          // Mock a delayed response
          if (usernames.indexOf(modelValue) === -1) {
            // The username is available
            def.resolve();
          } else {
            def.reject();
          }

        }, 2000);

        return def.promise;
      };
    }
  };
});
```

## 修改内置验证器

Since Angular itself uses `$validators`, you can easily replace or remove built-in validators,
should you find it necessary. The following example shows you how to overwrite the email validator
in `input[email]` from a custom directive so that it requires a specific top-level domain,
`example.com` to be present.
Note that you can alternatively use `ng-pattern` to further restrict the validation.

<example module="form-example-modify-validators">
  <file name="index.html">
    <form name="form" class="css-form" novalidate>
      <div>
        Overwritten Email:
        <input type="email" ng-model="myEmail" overwrite-email name="overwrittenEmail" />
        <span ng-show="form.overwrittenEmail.$error.email">This email format is invalid!</span><br>
        Model: {{myEmail}}
        </div>
    </form>
  </file>

  <file name="script.js">
    var app = angular.module('form-example-modify-validators', []);

    app.directive('overwriteEmail', function() {
      var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@example\.com$/i;

      return {
        require: 'ngModel',
        restrict: '',
        link: function(scope, elm, attrs, ctrl) {
          // only apply the validator if ngModel is present and Angular has added the email validator
          if (ctrl && ctrl.$validators.email) {

            // this will overwrite the default Angular email validator
            ctrl.$validators.email = function(modelValue) {
              return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
            };
          }
        }
      };
    });
  </file>
</example>


## 实现自定义的表单控件 (用 `ngModel`)
Angular implements all of the basic HTML form controls ({@link ng.directive:input input},
{@link ng.directive:select select}, {@link ng.directive:textarea textarea}),
which should be sufficient for most cases. However, if you need more flexibility,
you can write your own form control as a directive.

In order for custom control to work with `ngModel` and to achieve two-way data-binding it needs to:

  - implement `$render` method, which is responsible for rendering the data after it passed the
  {@link ngModel.NgModelController#$formatters `NgModelController.$formatters`},
  - call `$setViewValue` method, whenever the user interacts with the control and model
  needs to be updated. This is usually done inside a DOM Event listener.

See {@link guide/directive `$compileProvider.directive`} for more info.

The following example shows how to add two-way data-binding to contentEditable elements.

<example module="form-example2">
  <file name="index.html">
    <div contentEditable="true" ng-model="content" title="Click to edit">Some</div>
    <pre>model = {{content}}</pre>

    <style type="text/css">
      div[contentEditable] {
        cursor: pointer;
        background-color: #D0D0D0;
      }
    </style>
  </file>

  <file name="script.js">
    angular.module('form-example2', []).directive('contenteditable', function() {
      return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
          // view -> model
          elm.on('blur', function() {
            ctrl.$setViewValue(elm.html());
          });

          // model -> view
          ctrl.$render = function() {
            elm.html(ctrl.$viewValue);
          };

          // load init value from DOM
          ctrl.$setViewValue(elm.html());
        }
      };
    });
  </file>
</example>
