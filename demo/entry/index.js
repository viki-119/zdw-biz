import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import {Block} from 'zdw-biz';
// import Block from '../../src/block';
import {Menu, Button } from 'antd';
import 'antd/dist/antd.css';

const SubMenu = Menu.SubMenu;

const routes = [
  {
    path: '/',
    component: Block,
  },
  {
    path: '/block',
    component: Block,
    routes: [
      {
        path: "/haha",
        component: Block
      }
    ]
  }
]

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
  </li>
  <Switch>
    {
      routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
          )}
        />
      ))
    }
    <Route exact path="/" component={Block}/>
  </Switch>
</HashRouter>, document.getElementById('root'));
