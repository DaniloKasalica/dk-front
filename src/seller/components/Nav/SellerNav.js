import React from "react";
import { MenuItems } from "./MenuItems";
import {Login} from '../Login/login'
import { PrivateRoute } from "../../PrivateRoute";
import {
  BrowserRouter  as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Menu, Button } from 'antd';
import {Shop} from '../Home/shop'
export const Sellernav = function App() {
    return (
      <div>
      <Router >
      <Menu mode="inline"  style={{ width: 256 }}>
      {MenuItems.map((item, index) => {
                        return (
                          <Menu.Item className="item" key={item.title}>
                                <Link to={item.url}>
                                {item.title}
                                </Link>
                            </Menu.Item>
                        )
                    })}
        </Menu>

<Switch>

<PrivateRoute exact path="/mojaprodanivca" component={Shop} />
<Route exact path="/seller/login" component={Login} />
</Switch>
</Router>

</div>
    )
}