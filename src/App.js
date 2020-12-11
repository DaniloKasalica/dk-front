
import React from "react";
import 'antd/dist/antd.css';
import {Nav} from './components/Nav/Nav'
import {Sellernav} from './seller/components/Nav/SellerNav'
import {auth} from './auth/authseller' 
export default function App() {
  return (
  <div className="App">
    {auth.getAuthStatus() ? 
    <Sellernav/>
    :
    <Nav/>
}
</div>
  )
  }