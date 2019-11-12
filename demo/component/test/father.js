import React, { PureComponent } from 'react';
import PropType from 'prop-types';
import {CSSTransition, TransitionGroup,} from 'react-transition-group';
import { Button } from 'antd';
import Child from './child';
import MyQrCode from '../../../src/my-qrcode';
import './style.less';

export default class Father extends PureComponent {
  constructor() {
    super();
    this.state = {
      person: {
        name: 'rrrr'
      },
      age: 1,
      enable: true,
      enableB: false
    };
    console.log('constructor');
  }

  componentDidMount() {
    // document.getElementById('pattern').addEventListener('mouseleave', this.mouseleave)
  }

  // 这种写法和constructor 的写法是一样的,如果constructor中定义了this.state, 则下面这种写法将失效
  // state = {
  //   age: 18,
  //   person: {
  //     name: 'sxt'
  //   }
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('nextProps, nextState', nextProps, nextState)
  //   return true
  // }

  // UNSAFE_componentWillMount() {
  //   console.log('xxxxx', this.state)
  // }

  // componentDidMount() {
  //   console.log('ddddd', this.state)
  // }

  onMouseOver = () => {
    console.log('onMouseOver');
    this.setState({
      enable: false,
      enableB: true
    });
  }

  onMouseOut = () => {
    console.log('onMouseOut');
    this.setState({
      enable: true,
      enableB: false
    });
  }

  changeState = () => {
    let { person } = this.state;
    person.name = 'sxt2';
    this.setState({
      person,
      // person: {...person}
      age: '1' // 这里的浅比较用的是=== 而非==
    });
  }

  render() {
    console.log('father render');
    const { person, enable, enableB } = this.state;
    return (
      <div id="father">
        <Child person={person} />
        <Button type="primary" onClick={this.changeState}>点击</Button>
        <div id="pattern"
          onMouseOver={this.onMouseOver}
          onMouseLeave={this.onMouseOut} onFocus={() => {}} className="pattern"
        >
          <CSSTransition
            // 组件名，提供css选择器使用，必填参数，如果缺少了，程序会崩溃报错，注意这个参数带's'
            classNames="animation"
            // 组件是否展示,true为显示
            in={enable}
            // 动画持续时间，需要和css的设置保持一致
            timeout={1000}
            // 当in的属性变为false之后，卸载组件，过程可设置动画
            unmountOnExit
          >
            {/* CSSTransition的子组件，必须是个函数，或者组件 */}
            <div>开奖号码</div>
          </CSSTransition>
          <CSSTransition classNames="animation"
            in={enableB}
            timeout={1000}
            unmountOnExit
          >
            <div className="enableB">未中奖</div>
          </CSSTransition>
          <MyQrCode />
        </div>
      </div>
    );
  }
}
