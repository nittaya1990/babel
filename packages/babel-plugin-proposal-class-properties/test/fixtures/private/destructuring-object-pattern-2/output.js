var _client = /*#__PURE__*/new WeakMap();

var Foo = function Foo(props) {
  "use strict";

  babelHelpers.classCallCheck(this, Foo);
  babelHelpers.classPrivateFieldInitSpec(this, _client, {
    writable: true,
    value: void 0
  });
  ({
    x,
    ...babelHelpers.classPrivateFieldDestructureSet(this, _client).value
  } = props);
};
