import React, { PureComponent } from 'react';
import 'animate.css';
// 参考链接 https://github.com/daneden/animate.css

export default class Animate extends PureComponent {
  render() {
    return (
      <div className="animated pulse delay-2s">
        <div className="animated bounce faster">Example</div>
        <div className="animated lightSpeedIn">Example</div>
      </div>
    );
  }
}
