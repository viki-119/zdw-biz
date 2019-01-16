// exports.showMsg = function () {
//   console.log("This is my first module");
// };

// exports.showName = function() {
//   console.log('showName: 我是张大伟')
// }

'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports.Block = undefined;

var _block = _interopRequireDefault(require('./block'));


function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj};
}

// exports.Block = _block.default;
var zdw = {
  Block: _interopRequireDefault(require('./block'))['default'],
}

module.exports = zdw;