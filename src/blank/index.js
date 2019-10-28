import React from 'react';
import { number } from 'prop-types';

export default function Blank(props) {
  const { height, ...rest } = props;
  const styleObj = {
    height: `${height}px`,
    width: '100%'
  }

  return (
    <div style={styleObj} {...rest} />
  );
}

Blank.propTypes = {
  height: number.isRequired,
};

Blank.defaultProps = {
  height: 0,
};
