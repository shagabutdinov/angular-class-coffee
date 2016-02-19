class @AngularClass

  @factory: () ->
    return @_createFactory(() =>
      return new this()
    )

  @classFactory: () ->
    console.log('angular-class-coffee: @classFactory is deprecated; use ' +
      '@class() instead')
    return @class()

  @class: () ->
    return @_createFactory(() => return (class extends this))

  @directive: () ->
    return (() =>
      object = {}

      for key, value of this
        if key == '__super__'
          continue

        object[key] = value

      object.controller = @factory()
      object.link = ((_scope, element, _attrs, controller) ->
        if controller.link
          controller.link(element)
      )

      return object
    )

  @_createFactory: (resultCallback) ->
    imports = this._import || []

    factory = () =>
      args = Array.prototype.concat.apply([], arguments)

      result = resultCallback()

      for name, index in imports
        result[@_prepareImportName(name)] = args[index]

      if result.initialize != undefined
        result.initialize()

      return result

    return imports.concat([factory])

  @_prepareImportName = (name) ->
    if name.substr(0, 1) == '$'
      name = name.slice(1)

    name = '_' + name

    return name
