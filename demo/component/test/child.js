import React, {Component, PureComponent} from 'react';
import PropType from 'prop-types';

export default class Child extends PureComponent {
  // componentDidCatch(err, info) {
  //   console.log('ddddd', err, info)
  // }

  render() {
    console.log('Child render');
    const { person } = this.props;
    return(
      <div>
        {person.name}
      </div>
    );
  }
}
