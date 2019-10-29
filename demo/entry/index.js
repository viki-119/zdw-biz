import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {
	HashRouter, Route, Switch, Link
} from 'react-router-dom';
// import {Block} from 'zdw-biz';
import { Menu, Button } from 'antd';
import Block from '../../src/block';
import Blank from '../../src/blank';
import Test from '../component/test/father';

// import 'antd/dist/antd.css';

const { SubMenu } = Menu;

const routes = [
	{
		path: '/',
		component: Test
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

ReactDom.render(
  <HashRouter>
    <Menu>
    <Menu.Item>菜单项</Menu.Item>
    <SubMenu title="子菜单">
        <Menu.Item>子菜单项</Menu.Item>
      </SubMenu>
      </Menu>
    <li>
      <Link to="/block">block</Link>
      <Block title='标题' subTitle='副标题' withLine extra={'哈哈'} />
      <Blank height={40} />
    </li>
    <Switch>
    {
      routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          render={(props) => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes}/>
          )}
        />))
    }
      <Route exact path="/" component={Block} />
    </Switch>
	</HashRouter>, document.getElementById('root')
);
