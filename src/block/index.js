import React from 'react';
import { string } from 'prop-types';
import './block.less';

// const { string, bool, object } = React.propTypes;

export default function Block(props) {
	// console.log('122','ccc')
	return (
  <div id="block">
    <div className="title">{props.title}</div>
      {props.name}
      {props.tt}
		</div>
	);
}

Block.propTypes = {
	title: string
};
