import React, {Component, PureComponent} from 'react';
import PropType from 'prop-types';
import Child from './child'

export default class Father extends PureComponent {
  constructor() {
    super();
    this.state = {
      person: {
        name: 'sxt'
      }
    };
    console.log('constructor');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('nextProps, nextState', nextProps, nextState)
  //   return true
  // }

  changeState = () => {
    let { person } = this.state;
    person.name = 'sxt2';
    this.setState({
      person
    })
  };
  render() {
    console.log('IndexPage render');
    const { person } = this.state;
    return (
      <div>
        <button onClick={this.changeState}>点击</button>
        <Child person={person} />
      </div>
    );
  }
}
