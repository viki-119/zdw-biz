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
import './index.less';

// import 'antd/dist/antd.css';

const { SubMenu } = Menu;

const routes = [
	{
		path: '/test',
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
    <div id="react-content">
      <div className="frame">
        <div className="head">head</div>
        <div className="content">
          <div className="viewport">
            <div className="menu" style={{minHeight: 1083}}>
              <Menu mode='inline'>
                <Menu.Item>
                  <Link to="/block">block</Link>
                </Menu.Item>
                <SubMenu title="子菜单">
                  <Menu.Item>
                    <Link to="/test">test</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </div>
            <div className="main-center">
              <div className="container">
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
              </div>
            </div>
          </div>
        </div>
        <div className="foot">foot</div>
      </div>
    </div>
	</HashRouter>, document.getElementById('root')
);
