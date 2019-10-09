"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Block;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

require("./block.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Block(props) {
  var title = props.title;
  var subTitle = props.subTitle;
  var withLine = props.withLine;
  var extra = props.extra || '';
  var className = props.className || '';
  return _react["default"].createElement("div", {
    className: "zdw_block ".concat(className)
  }, _react["default"].createElement("div", {
    className: "zdw_block_title"
  }, _react["default"].createElement("div", {
    className: "zdw_block_title_icon"
  }), _react["default"].createElement("span", {
    className: "zdw_block_title_text"
  }, title), subTitle && _react["default"].createElement("span", {
    className: "zdw_block_subtitle_text"
  }, subTitle), withLine && _react["default"].createElement("div", {
    className: "zdw_block_title_line"
  }), extra && _react["default"].createElement("div", {
    className: "zdw_block_title_extra"
  }, extra)), props.children && _react["default"].createElement("div", {
    className: "zdw_block_wrapper"
  }, props.children));
}

Block.propTypes = {
  title: _propTypes.string.isRequired,
  subTitle: _propTypes.string,
  withLine: _propTypes.bool,
  className: _propTypes.string
};
Block.defaultProps = {
  title: '',
  subTitle: '',
  withLine: false,
  extra: null,
  className: ''
};