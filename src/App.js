
import React from "react";
import 'antd/dist/antd.css';
import {Nav} from './components/Nav/Nav'
import {Sellernav} from './seller/components/Nav/SellerNav'
import {auth} from './auth/authseller' 
export default function App() {
  console.log(window.location.pathname)
  return (
  <div className="App">
    {window.location.pathname==='/mojaprodavnica'? 
    <Sellernav/>
    :
    <Nav/>
}
</div>
  )
  }