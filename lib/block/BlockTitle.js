'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = _interopRequireDefault(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj};
}

/** 
 * @class BlockTitle
 * @hideconstructor
*/

var BlockTitle = function BlockTitle(props) {
  var title = props.title,
    withLine = props.withLine,
    extra = props.extra,
    style = props.style,
    subTitle = props.subTitle;

  return _react.default.createElement('h3',
    {
      className: 'zdw_block_title',
      style: style,
    },
    _react.default.createElement('div',
      {className: 'zdw_block_title_icon',}
    ),
    _react.default.createElement('span',
      {
        className: 'zdw_block_title_text',
      },
      title
    ),
    subTitle && _react.default.createElement('span',
      {
        className: 'zdw_block_subtitle_text'
      },
      subTitle
    ),
    withLine && _react.default.createElement('div',
      {
        className: 'zdw_block_title_line'
      }
    ),
    extra && _react.default.createElement('div',
      {
        className: 'zdw_block_title_extra'
      },
      extra
    )
  )
};

BlockTitle.prototype = {
  title: _propTypes.default.string,
  subTitle: _propTypes.default.string,
  withLine: _propTypes.default.bool,
  extra: _propTypes.default.element,
  style: _propTypes.default.object,
};

BlockTitle.defaultProps = {
  title: '',
  subTitle: '',
  withLine: false,
  extra: null,
  style: {},
};

exports.default = BlockTitle;