import React from "react";
import {
  BrowserRouter  as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MenuItems } from "./MenuItems";
import {About} from '../About'
import {Home} from '../Home'
import { Menu } from 'antd';
import './nav.css'
import {Login} from '../Login/login'
import {Signup} from '../Login/signup'
import {Contact} from '../Contact/contact'
import { PrivateRoute } from "../../PrivateRoute";
import {Shop} from '../Shop/shop'
export const Nav = function App() {
    return (
      <Router >
      <Menu   mode="horizontal">

      <Link className="logo" to='/home'>
          LOGO
        </Link>
      {MenuItems.map((item, index) => {
                        return (
                          <Menu.Item className="item" key={item.title}>
                                <Link to={item.url}>
                                {item.title}
                                </Link>
                            </Menu.Item>
                        )
                    })}


<Switch>


<Route exact path="(/|/home)" component={Home} />
<Route exact path="/about" component={About} />
<Route exact path="/login" component={Login}/>
<Route exact path="/signup" component={Signup}/>
<Route exact path = '/contact' component={Contact}/>
<Route path="/prodavnica/:id" component={Shop} />
<PrivateRoute  exact path="/prodavnica/" component={About}/>

</Switch>
</Menu>
</Router>
    )
}