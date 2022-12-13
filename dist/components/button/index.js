"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Button;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Button(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: "px-3 py-2 rounded-lg bg-black text-white"
  }, children || "This is button from affinitely-package-test");
}