import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MenuItems } from "./MenuItems";
import {About} from '../About'
import {Home} from '../Home'
import './nav.css'



export const Nav = function App() {
    return (
      <Router>
            <div className="navbar navbar-expand-lg navbar-light ">
  <Link to="/" className="navbar-brand" href="#">Logo</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">



      {MenuItems.map((item, index) => {
                        return (
                            <li key={index} className={item.cName} >
                                <Link to={item.url} className="nav-link">
                                {item.title}
                                </Link>
                            </li>
                        )
                    })}

    </ul>
    <div className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </div>
  </div>
</div>




<Switch>


<Route exact path="(/|/home)" render={() => <Home></Home>} />


<Route path="/about" component={About} />


</Switch>
</Router>
    )
}