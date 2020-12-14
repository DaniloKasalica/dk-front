import React, { useState, useEffect, useMemo } from "react";
import { Card, Button,Avatar } from 'antd';
import apiCall from "../../services/apicall";
import {ShoppingCartOutlined,SendOutlined,PictureOutlined } from '@ant-design/icons'
import './cart.css'

export const Cart = function App(props) {

    const [products, setproducts] =useState([])
    const [showcart, setshowcart] = useState(false)
    const color = 'orange';
const user = props.username
const getproducts = async()=>{
const result = await apiCall('cart')
 setproducts(result.data.cart)
}
useEffect(()=>{
    getproducts()
},[])

let newproduct = props.product;


if(newproduct&& products.filter(e => e.productid === newproduct.productid).length === 0 ){

    props.removeprops()
    setproducts((prev)=>{
    return [...prev,props.product]
})
}
let totalprice = 0
const removeproduct = async (productid)=>{
    try{
        let arr = [...products];
        console.log(arr,'1')
        await apiCall.delete(`cart/${productid}`)
        
        let index = 0
         arr.forEach((elem,i)=>{
            if(elem.productid===productid)
            index=i
        })
        console.log(arr,'2')
        arr.splice(index,1)
        console.log(index)
        console.log(arr,'3')
        setproducts(arr)
    }catch(err)
    {
        console.log(err)
    }

}
const rendercart = ()=>{
    console.log(products)
    return products.map((product)=>{
        totalprice +=product.price
        return (
            <div className="cartproductrow">
            <p className="productname">{product.name}</p>
            <p className="prodcutprice">{product.price}</p>
            <Button className="removeproductbtn" onClick={(e)=>{
                e.preventDefault();
                removeproduct(product.productid)
            }}  type='danger'>X</Button>
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
          <Card className="cardcart" title="Korpa" 
          extra={
          <Button type="primary" size="small"
            onClick={(e)=>{
                e.preventDefault();
                setshowcart(false)
            }}
             >X <p></p></Button>}
              style={{ width: 300 }}>
              {rendercart()}
              <div classNama="fotercart">
              <Avatar style={{ backgroundColor: color }} className="cartavatar" size="large" gap={1}>
            
            Danilo12
          </Avatar>
      <div className="totalprice">
           
        <p className="priceparagraph">{totalprice}€</p>
        <Button type="primary" size="middle "
            onClick={(e)=>{
                e.preventDefault();
                setshowcart(false)
            }}
             >Kupi<p></p></Button>

      </div>
      </div>
        </Card>

        }
    </div>
    )
}