Angular Class
=============

Coffeescript classes support for angular. Makes possible to use coffescript
classes instead of callbacks in angular.


Features
--------

  * Classes are simpler than large callbacks
  * Controllers/resources can be inherited; it is usefull for deduplication
  * It is easier to isolate classes and to do unit-testing
  * There is no dependecies duplucation


Installation
------------

`npm install angular-class-coffee --save`


Usage
-----

Basic usage:

```
# create class
class MyApp.MyCtrl < AngularClass

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

```
# inherit class from your own class
class MyApp.MyChildCtrl < MyApp.MyCtrl

  # note that you should append dependencies
  @_import = _.extend({}, MyApp.MyCtrl._import, [
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


Example
-------

```
app.controller(['$scope', '$http', ($scope, $http) ->
  setStatus = ((response) ->
    $scope.status = response.result
  )

  $http.get('/api/status').then(setStatus)
])
```

Becomes:

class MyApp.StatusCtrl < AngularClass

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
