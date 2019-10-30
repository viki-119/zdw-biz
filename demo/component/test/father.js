import React, {Component, PureComponent} from 'react';
import PropType from 'prop-types';
import Child from './child'

export default class Father extends PureComponent {
  constructor() {
    super();
    this.state = {
      person: {
        name: 'rrrr'
      }
    };
    console.log('constructor');
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

  changeState = () => {
    let { person } = this.state;
    person.name = 'sxt2';
    this.setState({
      // person,
      person: {...person}
    })
  };
  render() {
    console.log('father render');
    const { person } = this.state;
    return (
      <div>
        <button onClick={this.changeState}>点击</button>
        <Child person={person} />
      </div>
    );
  }
}
