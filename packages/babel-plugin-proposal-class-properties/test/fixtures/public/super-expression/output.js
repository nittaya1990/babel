var Foo = /*#__PURE__*/function (_Bar) {
  "use strict";

  babelHelpers.inherits(Foo, _Bar);
  var _super = babelHelpers.createSuper(Foo);
  function Foo() {
    var _this;
    babelHelpers.classCallCheck(this, Foo);
    foo((_this = _super.call(this), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "bar", "foo"), babelHelpers.assertThisInitialized(_this)));
    return _this;
  }
  return babelHelpers.createClass(Foo);
}(Bar);
