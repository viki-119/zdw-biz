import React from 'react';
import { number } from 'prop-types';

export default function Blank(props) {
  const { height, ...rest } = props;

  return (
    <div style={{height: `${height}px`}} {...rest} />
  );
}

Blank.propTypes = {
  height: number.isRequired,
};

Blank.defaultProps = {
  height: 0,
};
