[![Build Status](https://travis-ci.org/shagabutdinov/angular-class-coffee.svg?branch=master)](https://travis-ci.org/shagabutdinov/angular-class-coffee)

Angular Class
=============

Coffeescript classes support for angular. Makes possible to use coffescript
classes instead of callbacks in angular.

![demo](https://cloud.githubusercontent.com/assets/1635613/16680398/04500d98-4510-11e6-8eea-b2903b9795c9.png)

Features
--------

  * Avoid dependecies duplication
  * Classes easier to percept than large callbacks
  * Controllers/resources can be inherited; it is usefull for deduplication
  * It is easier to isolate classes and to do unit-testing


Installation
------------

`npm install angular-class-coffee --save`


Usage
-----

Basic usage:

```coffeescript
# create class
class App.MyCtrl extends AngularClass

  # add dependecies to @_import
  @_import = [
    '$scope',
  ]

  # create factory callback and inject it to angular
  app.controller('MyCtrl', @factory())

  # if you want plain class instead of instance in angular it also possible by
  # calling `classFactory`:
  #
  # app.factory('MyResource', @classFactory())

  # add `initialize` method that will be called right after dependecies will
  # be injected to object:
  initialize: () ->
    # all dependecies are available as instance variables that starts with
    # underscore
    @_scope.hello = 'HELLO WORLD'
```

Inheritance:

```coffeescript
# inherit class from your own class
class App.MyChildCtrl extends App.ParentCtrl

  # note that you should append dependencies
  @_import = App.ParentCtrl._import.concat([
    '$http',
  ])

  app.controller('MyChildCtrl', @factory())

  # add `initialize` method that will be called right after dependecies will
  # be injected to object:
  initialize: () ->
    super()
    $http.get('/status', @_setStatus)

  _setStatus: (response) =>
    @_scope.status = response.result
```

Directive:

```coffeescript
# create normal class
class App.MyChildCtrl extends AngularClass

  # import dependecies as normal ones
  @_import: [
    '$scope',
    '$http',
  ]

  # set template url and scope to class
  @templateUrl: '/link/to/template.html'
  @scope: {
    data: '=data',
  }

  # use @directive to specify the directive
  app.directive('myDirective', @directive())

  # use link to setup stuff on element
  link: (element) ->
    # link element here
```


Example
-------

```coffeescript
app.controller('StatusCtrl', ['$scope', '$http', ($scope, $http) ->
  setStatus = ((response) ->
    $scope.status = response.result
  )

  $http.get('/api/status').then(setStatus)
])
```

Becomes:

```coffeescript
class App.StatusCtrl extends AngularClass

  @_import: [
    '$scope',
    '$http',
  ]

  app.controller('StatusCtrl', @factory())

  initialize: () ->
    @_http.get('/api/status').then(@_setStatus)

  _setStatus: (response) =>
    @_scope.status = response.result
```


License
-------

The MIT License (MIT)


Authors
-------

[Leonid Shagabutdinov](http://github.com/shagabutdinov)
