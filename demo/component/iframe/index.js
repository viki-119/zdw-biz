import React, { PureComponent } from 'react';
import { array } from 'prop-types';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import { Menu } from 'antd';
import Block from '../../../src/block';
import './index.less';

const { SubMenu } = Menu;

class Iframe extends PureComponent {
  static propTypes = {
    routes: array
  }

  render() {
    const { routes } = this.props;
    return (
      <HashRouter>
        <div id="react-content">
          <div className="frame">
            <div className="head">head</div>
            <div className="content">
              <div className="viewport">
                <div className="menu" style={{ minHeight: 1083 }}>
                  <Menu mode="inline">
                    <Menu.Item>
                      <Link to="/block">block</Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link to="/test">test</Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link to="/canvas">canvas</Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link to="/animate">animate</Link>
                    </Menu.Item>
                    <SubMenu title="子菜单">
                      <Menu.Item>
                        <Link to="/test">test</Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link to="/canvas">canvas</Link>
                      </Menu.Item>
                    </SubMenu>
                  </Menu>
                </div>
                <div className="main-center">
                  <div className="container">
                    <Switch>
                      {
                        routes.map((route, i) => (
                          <Route key={i}
                            path={route.path}
                            render={(props) => (
                              // pass the sub-routes down to keep nesting
                              <route.component {...props} routes={route.routes} />
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
      </HashRouter>);
  }
}

export default Iframe;
