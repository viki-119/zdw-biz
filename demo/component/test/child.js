import React, { PureComponent } from 'react';
import { object } from 'prop-types';
// import cc from 'eslint-config-elemefe';
// import yy from 'eslint-config-airbnb';

export default class Child extends PureComponent {
  static propTypes = {
    person: object
  }

  componentDidCatch(err, info) {
    console.log('ddddd', err, info);
  }

  render() {
    console.log('Child render');
    const { person } = this.props;
    return (
      <div className="child-render">
        {person.name}
      </div>
    );
  }
}
