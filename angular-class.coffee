class @AngularClass

  @factory: () ->
    return @_createFactory(() => return new this)

  @classFactory: () ->
    return @_createFactory(() => return (class extends this))

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
