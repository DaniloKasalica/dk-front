import React, { useState, useEffect, useMemo } from "react";
import { Card, Button } from 'antd';
import apiCall from "../../services/apicall";
import {ShoppingCartOutlined,SendOutlined,PictureOutlined } from '@ant-design/icons'
import './cart.css'

export const Cart = function App(props) {

    const [products, setproducts] =useState([])
    const [showcart, setshowcart] = useState(false)

const getproducts = async()=>{
console.log('trazimo korpu')
const result = await apiCall('user/cart')
console.log('proizvodi u korpu---->',result.data.cart)
 setproducts(result.data.cart)
}
useEffect(()=>{
    getproducts()
},[])

console.log(products)
  
const rendercart = ()=>{
    return products.map((product)=>{
        return (
            <div>
            <p>Ime: {product.name}</p>
            <p>Cijena:{product.price}</p>
            </div>
        )
    })
}
  
    return ( 
      <div className="cart">
          {
              showcart ===false ?
          <Button className="cartbtn" onClick={(e)=>{
              e.preventDefault();
              setshowcart(true);
          }} type="primary" icon={<ShoppingCartOutlined />}></Button>
          : 
          <Card title="Default size card" 
          extra={
          <Button type="primary" size="small"
            onClick={(e)=>{
                e.preventDefault();
                setshowcart(false)
            }}
             >X</Button>}
              style={{ width: 300 }}>
              {rendercart}
        </Card>

        }
    </div>
    )
}