import React, { useState, useEffect, useMemo } from "react";
import { Card, Button } from 'antd';
import apiCall from "../../../services/apicallseller";
import {ShoppingCartOutlined,SendOutlined,PictureOutlined } from '@ant-design/icons'
import {Newproduct} from './Newproduct'
import {Updateproductdescription} from './Updateproductdescription'
import {Updateproductimages} from './updateproductimages'
import './shop.css'
const { Meta } = Card;
export const Products = function App(props) {


  const products = props.products 
  const sellerid = props.sellerid
  const Renderdata = ()=>{
    return products.map((product,index)=>{
     return ( 
      <div className="product">

<Card
    cover={
      <button onClick={()=>{props.modalinfo(product.productimages)}}>
      <img
        alt={product.productid}
        src={products.productsimages?product.productimages[0].url
        : '/noimage.png'}
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
       
      }
    
  
    return ( 
      <>
      <h1 className="yourproductsheading">Vasi proizvodi: </h1>
      <div className="seller_products">
      {props.products!==null ? <Renderdata products = {props.products}/> : <p>nemaproizvoda</p> }
      <Newproduct sellerid = {sellerid}/> 
    </div>
    </>
    )
}