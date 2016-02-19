(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  this.AngularClass = (function() {
    function AngularClass() {}

    AngularClass.factory = function() {
      return this._createFactory((function(_this) {
        return function() {
          return new _this();
        };
      })(this));
    };

    AngularClass.classFactory = function() {
      console.log('angular-class-coffee: @classFactory is deprecated; use ' + '@class() instead');
      return this["class"]();
    };

    AngularClass["class"] = function() {
      return this._createFactory((function(_this) {
        return function() {
          return ((function(superClass) {
            extend(_Class, superClass);

            function _Class() {
              return _Class.__super__.constructor.apply(this, arguments);
            }

            return _Class;

          })(_this));
        };
      })(this));
    };

    AngularClass.directive = function() {
      return ((function(_this) {
        return function() {
          var key, object, value;
          object = {};
          for (key in _this) {
            value = _this[key];
            if (key === '__super__') {
              continue;
            }
            object[key] = value;
          }
          object.controller = _this.factory();
          object.link = (function(_scope, element, _attrs, controller) {
            if (controller.link) {
              return controller.link(element);
            }
          });
          return object;
        };
      })(this));
    };

    AngularClass._createFactory = function(resultCallback) {
      var factory, imports;
      imports = this._import || [];
      factory = (function(_this) {
        return function() {
          var args, i, index, len, name, result;
          args = Array.prototype.concat.apply([], arguments);
          result = resultCallback();
          for (index = i = 0, len = imports.length; i < len; index = ++i) {
            name = imports[index];
            result[_this._prepareImportName(name)] = args[index];
          }
          if (result.initialize !== void 0) {
            result.initialize();
          }
          return result;
        };
      })(this);
      return imports.concat([factory]);
    };

    AngularClass._prepareImportName = function(name) {
      if (name.substr(0, 1) === '$') {
        name = name.slice(1);
      }
      name = '_' + name;
      return name;
    };

    return AngularClass;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ3VsYXItY2xhc3MuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7O0VBQU0sSUFBQyxDQUFBOzs7SUFFTCxZQUFDLENBQUEsT0FBRCxHQUFVLFNBQUE7QUFDUixhQUFPLElBQUMsQ0FBQSxjQUFELENBQWdCLENBQUEsU0FBQSxLQUFBO2VBQUEsU0FBQTtBQUNyQixpQkFBVyxJQUFBLEtBQUEsQ0FBQTtRQURVO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFoQjtJQURDOztJQUtWLFlBQUMsQ0FBQSxZQUFELEdBQWUsU0FBQTtNQUNiLE9BQU8sQ0FBQyxHQUFSLENBQVkseURBQUEsR0FDVixrQkFERjtBQUVBLGFBQU8sSUFBQyxDQUFBLE9BQUEsQ0FBRCxDQUFBO0lBSE07O0lBS2YsWUFBQyxDQUFBLE9BQUEsQ0FBRCxHQUFRLFNBQUE7QUFDTixhQUFPLElBQUMsQ0FBQSxjQUFELENBQWdCLENBQUEsU0FBQSxLQUFBO2VBQUEsU0FBQTtBQUFNLGlCQUFPOzs7Ozs7Ozs7YUFBZSxNQUFmO1FBQWI7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWhCO0lBREQ7O0lBR1IsWUFBQyxDQUFBLFNBQUQsR0FBWSxTQUFBO0FBQ1YsYUFBTyxDQUFDLENBQUEsU0FBQSxLQUFBO2VBQUEsU0FBQTtBQUNOLGNBQUE7VUFBQSxNQUFBLEdBQVM7QUFFVCxlQUFBLFlBQUE7O1lBQ0UsSUFBRyxHQUFBLEtBQU8sV0FBVjtBQUNFLHVCQURGOztZQUdBLE1BQU8sQ0FBQSxHQUFBLENBQVAsR0FBYztBQUpoQjtVQU1BLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLEtBQUMsQ0FBQSxPQUFELENBQUE7VUFDcEIsTUFBTSxDQUFDLElBQVAsR0FBYyxDQUFDLFNBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsTUFBbEIsRUFBMEIsVUFBMUI7WUFDYixJQUFHLFVBQVUsQ0FBQyxJQUFkO3FCQUNFLFVBQVUsQ0FBQyxJQUFYLENBQWdCLE9BQWhCLEVBREY7O1VBRGEsQ0FBRDtBQUtkLGlCQUFPO1FBZkQ7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUQ7SUFERzs7SUFtQlosWUFBQyxDQUFBLGNBQUQsR0FBaUIsU0FBQyxjQUFEO0FBQ2YsVUFBQTtNQUFBLE9BQUEsR0FBVSxJQUFJLENBQUMsT0FBTCxJQUFnQjtNQUUxQixPQUFBLEdBQVUsQ0FBQSxTQUFBLEtBQUE7ZUFBQSxTQUFBO0FBQ1IsY0FBQTtVQUFBLElBQUEsR0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUF2QixDQUE2QixFQUE3QixFQUFpQyxTQUFqQztVQUVQLE1BQUEsR0FBUyxjQUFBLENBQUE7QUFFVCxlQUFBLHlEQUFBOztZQUNFLE1BQU8sQ0FBQSxLQUFDLENBQUEsa0JBQUQsQ0FBb0IsSUFBcEIsQ0FBQSxDQUFQLEdBQW9DLElBQUssQ0FBQSxLQUFBO0FBRDNDO1VBR0EsSUFBRyxNQUFNLENBQUMsVUFBUCxLQUFxQixNQUF4QjtZQUNFLE1BQU0sQ0FBQyxVQUFQLENBQUEsRUFERjs7QUFHQSxpQkFBTztRQVhDO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQTtBQWFWLGFBQU8sT0FBTyxDQUFDLE1BQVIsQ0FBZSxDQUFDLE9BQUQsQ0FBZjtJQWhCUTs7SUFrQmpCLFlBQUMsQ0FBQSxrQkFBRCxHQUFzQixTQUFDLElBQUQ7TUFDcEIsSUFBRyxJQUFJLENBQUMsTUFBTCxDQUFZLENBQVosRUFBZSxDQUFmLENBQUEsS0FBcUIsR0FBeEI7UUFDRSxJQUFBLEdBQU8sSUFBSSxDQUFDLEtBQUwsQ0FBVyxDQUFYLEVBRFQ7O01BR0EsSUFBQSxHQUFPLEdBQUEsR0FBTTtBQUViLGFBQU87SUFOYTs7Ozs7QUFwRHhCIiwiZmlsZSI6ImFuZ3VsYXItY2xhc3MuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBAQW5ndWxhckNsYXNzXG5cbiAgQGZhY3Rvcnk6ICgpIC0+XG4gICAgcmV0dXJuIEBfY3JlYXRlRmFjdG9yeSgoKSA9PlxuICAgICAgcmV0dXJuIG5ldyB0aGlzKClcbiAgICApXG5cbiAgQGNsYXNzRmFjdG9yeTogKCkgLT5cbiAgICBjb25zb2xlLmxvZygnYW5ndWxhci1jbGFzcy1jb2ZmZWU6IEBjbGFzc0ZhY3RvcnkgaXMgZGVwcmVjYXRlZDsgdXNlICcgK1xuICAgICAgJ0BjbGFzcygpIGluc3RlYWQnKVxuICAgIHJldHVybiBAY2xhc3MoKVxuXG4gIEBjbGFzczogKCkgLT5cbiAgICByZXR1cm4gQF9jcmVhdGVGYWN0b3J5KCgpID0+IHJldHVybiAoY2xhc3MgZXh0ZW5kcyB0aGlzKSlcblxuICBAZGlyZWN0aXZlOiAoKSAtPlxuICAgIHJldHVybiAoKCkgPT5cbiAgICAgIG9iamVjdCA9IHt9XG5cbiAgICAgIGZvciBrZXksIHZhbHVlIG9mIHRoaXNcbiAgICAgICAgaWYga2V5ID09ICdfX3N1cGVyX18nXG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBvYmplY3Rba2V5XSA9IHZhbHVlXG5cbiAgICAgIG9iamVjdC5jb250cm9sbGVyID0gQGZhY3RvcnkoKVxuICAgICAgb2JqZWN0LmxpbmsgPSAoKF9zY29wZSwgZWxlbWVudCwgX2F0dHJzLCBjb250cm9sbGVyKSAtPlxuICAgICAgICBpZiBjb250cm9sbGVyLmxpbmtcbiAgICAgICAgICBjb250cm9sbGVyLmxpbmsoZWxlbWVudClcbiAgICAgIClcblxuICAgICAgcmV0dXJuIG9iamVjdFxuICAgIClcblxuICBAX2NyZWF0ZUZhY3Rvcnk6IChyZXN1bHRDYWxsYmFjaykgLT5cbiAgICBpbXBvcnRzID0gdGhpcy5faW1wb3J0IHx8IFtdXG5cbiAgICBmYWN0b3J5ID0gKCkgPT5cbiAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcmd1bWVudHMpXG5cbiAgICAgIHJlc3VsdCA9IHJlc3VsdENhbGxiYWNrKClcblxuICAgICAgZm9yIG5hbWUsIGluZGV4IGluIGltcG9ydHNcbiAgICAgICAgcmVzdWx0W0BfcHJlcGFyZUltcG9ydE5hbWUobmFtZSldID0gYXJnc1tpbmRleF1cblxuICAgICAgaWYgcmVzdWx0LmluaXRpYWxpemUgIT0gdW5kZWZpbmVkXG4gICAgICAgIHJlc3VsdC5pbml0aWFsaXplKClcblxuICAgICAgcmV0dXJuIHJlc3VsdFxuXG4gICAgcmV0dXJuIGltcG9ydHMuY29uY2F0KFtmYWN0b3J5XSlcblxuICBAX3ByZXBhcmVJbXBvcnROYW1lID0gKG5hbWUpIC0+XG4gICAgaWYgbmFtZS5zdWJzdHIoMCwgMSkgPT0gJyQnXG4gICAgICBuYW1lID0gbmFtZS5zbGljZSgxKVxuXG4gICAgbmFtZSA9ICdfJyArIG5hbWVcblxuICAgIHJldHVybiBuYW1lXG4iXX0=
