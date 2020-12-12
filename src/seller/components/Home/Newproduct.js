import React, { useState, useEffect, useMemo } from "react";
import { Card, Button } from 'antd';
import apiCall from "../../../services/apicall";
import {ShoppingCartOutlined,SendOutlined,PictureOutlined,PlusCircleOutlined } from '@ant-design/icons'
const { Meta } = Card;
export const Newproduct = function App(props) {

const [newproducts,addnewproduct] = useState([
])




const addproduct = ()=>{
    addnewproduct((prev)=>{
        return [...prev,{
        price:0,
        productimages:[
            {
                url:'/homeheader.jpg'
            }
        ],
        quantity:0,
        unit:'kg',
        name:'Ime proizvoda'
        }]
    })
}
  const Renderdata =newproducts.map((product,index)=>{
     return ( 
      <div className="product">

<Card
    cover={
      <button onClick={()=>{props.modalinfo(product.productimages)}}>
      <img
        alt={product.productid}
        src={'/sellerimage'+product.productimages[0].url}
      />
      <PictureOutlined className="imageicon"/>
      </button>
    }
    actions={[


      <Button type="primary" shape="round" icon={<ShoppingCartOutlined />} size="200" onClick={async(e)=>{
        e.preventDefault();


      }}>Izmjeni slike</Button> ,
    <Button type="primary" 
    className="buynow"
     icon={<SendOutlined />} shape="round"
      size="200">Promjeni detalje</Button> 
    ]}
  >
    <Meta
      title={product.name}
  description={<div><p>mozda neki opis kratkio proizvodu samo oko 20ak rijeci</p>
  <p>Cijena: {product.price}€</p>
  <p>Količina: {product.quantity}{product.unit}</p></div>}
    />
  </Card>
  
     </div>
     )
      })
       
    
  
    return ( 
        <>
      {newproducts.length>0 ?
         Renderdata : null }

<div className="product">

<Card
    cover={
        <button className="btnaddprod" onClick={e=>{
            e.preventDefault();
            addproduct();
        }
    }>
      <PlusCircleOutlined />
      </button>
    }>
  </Card>
  
     </div>


         </>
      
    )
}