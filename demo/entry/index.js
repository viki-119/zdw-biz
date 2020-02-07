import React from 'react';
import ReactDom from 'react-dom';
// import {Block} from 'zdw-biz';
import Block from '../../src/block';
import Iframe from '../component/iframe';
// import Blank from '../../src/blank';
import Test from '../component/test/father';
import Animate from '../component/test/animate';
import Canvas from '../component/test/canvas';

const routes = [
  {
    path: '/test',
    component: Test
  },
  {
    path: '/canvas',
    component: Canvas
  },
  {
    path: '/animate',
    component: Animate
  },
  {
    path: '/block',
    component: Block,
    routes: [
      {
        path: '/haha',
        component: Block
      }
    ]
  }
];

ReactDom.render(<Iframe routes={routes} />, document.getElementById('root'));
