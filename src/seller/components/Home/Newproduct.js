import React, { useState, useEffect, useMemo } from "react";
import { Card, Button } from 'antd';
import apiCall from "../../../services/apicallseller";
import {ShoppingCartOutlined,SendOutlined,PictureOutlined,PlusCircleOutlined } from '@ant-design/icons'

import {Updateproductimages} from './updateproductimages'
import {Updateproductdescription} from './Updateproductdescription'
const { Meta } = Card;
export const Newproduct = function App(props) {

const [newproducts,addnewproduct] = useState([
]) 


const addproduct = async ()=>{
  const result  = await apiCall.post(`products/newprod`)

    addnewproduct((prev)=>{
        return [...prev,{
        price:0,
        productimages:[
            {
                url:'/noimage.png'
            }
        ],
        quantity:0,
        unit:'kg',
        name:'Ime proizvoda',
        productid: result.data.productid
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
        src={product.productimages[0].url}
      />
      <PictureOutlined className="imageicon"/>
      </button>
    }
    actions={[
     <Updateproductimages  id = {product.productid} images = {product.productimages} />,
     <Updateproductdescription id ={product.productid} description={product} />
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