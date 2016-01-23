class Helper extends AngularClass

  @_import = [
    'DEP1',
    'DEP2',
  ]

  @helper: 'HELPER'

describe 'AngularClass.factory', ->

  it 'should return array', ->
    expect(Helper.factory() instanceof Array).toEqual(true)

  it 'should return array with dependecies 1', ->
    expect(Helper.factory()[0]).toEqual('DEP1')

  it 'should return array with dependecies 2', ->
    expect(Helper.factory()[1]).toEqual('DEP2')

  it 'should return array with callback', ->
    expect(typeof Helper.factory()[2]).toEqual('function')

  it 'should return callback that returns object', ->
    expect(typeof Helper.factory()[2]()).toEqual('object')

  it 'should return callback that sets dependecies 1', ->
    expect(Helper.factory()[2]('MODULE')._DEP1).toEqual('MODULE')

  it 'should return callback that sets dependecies 2', ->
    expect(Helper.factory()[2](null, 'MODULE')._DEP2).toEqual('MODULE')

  it 'should return instance of Helper', ->
    expect(Helper.factory()[2]() instanceof Helper).toEqual(true)

describe 'AngularClass.classFactory', ->

  it 'should return array', ->
    expect(Helper.classFactory() instanceof Array).toEqual(true)

  it 'should return callback that returns class', ->
    expect(Helper.classFactory()[2]().helper).toEqual('HELPER')

  it 'should return callback that sets dependencies', ->
    expect(Helper.classFactory()[2]('MODULE')._DEP1).toEqual('MODULE')

  it 'should not sets dependencies to original class', ->
    Helper.classFactory()[2]()
    expect(Helper._DEP1).toEqual(undefined)

