'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _classnames = _interopRequireDefault(require('classnames'));
var _BlockTitle = _interopRequireDefault(require('./BlockTitle'));
require('../index.less')

/** 
 * @class Block
 * @classdesc 内容
 * @example
 * import { Block } from 'zdw-biz';
 * <Block title ="标题" subTitle="子标题">。。。</Block>
 * @hideconstructor
*/

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj};
}

var Block = function Block(props) {
  var title = props.title;
  var subTitle = props.subTitle;
  var withLine =  props.withLine;
  var extra = props.extra; 
  var className = props.className; 
  var style = props.style; 

  return _react.default.createElement('div',
    {
      className: (0, _classnames.default)('zdw_block', className),
      style: style,
    },
    _react.default.createElement(_BlockTitle.default, {
      title: title,
      subTitle: subTitle,
      withLine: withLine,
      extra: extra,
    }),
    props.children &&  _react.default.createElement('div',
    {
      className: 'zdw_block_wrapper'
    },
    props.children
    )
  );
};

Block.prototype = {
  title: _propTypes.default.string.isRequired,
  subTitle: _propTypes.default.string,
  withLine: _propTypes.default.bool,
  className: _propTypes.default.string,
  style: _propTypes.default.object,
};

Block.defaultProps = {
  title: '',
  subTitle: '',
  withLine: false,
  extra: null,
  className: '',
  style: {},
};

exports.default = Block;