import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {Products} from './products'
import {Seller} from './seller'
import apiCall from "../../services/apicall";
import {MyModal} from './modal'

import {LeftOutlined,RightOutlined} from '@ant-design/icons'
import './shop.css'
export const Shop = function App(props) {
console.log(props)

  const [seller, setSeller]  = useState({})
  const [modalinfo,setModalInfo]=useState({
    openmodal:false
  })
  
 const id = props.id
  console.log(modalinfo,'<modalinfoooooo')
 

   const getdata =async()=>{ 
     try{
      console.log(id,'<---------id')
    console.log('fetcujemo podatke za id------->',id)
   const data = await apiCall.get(`products/seller/${id}`);
   setSeller({products:data.data.products,seller:data.data.seller})
  }catch(err){
    return null
  }
   }


   useEffect(()=>{
     console.log('ajde')
     getdata()
   },[])

if(seller.seller)
  console.log(seller.seller.sellerimages,'sellerrimages')
    return ( 
      <div className="container_shop">
      <Seller
         modalinfo = {()=>{setModalInfo({
          openmodal:true,
          images:seller.seller.sellerimages
        })
      }}
        sellerinfo = {seller.seller ? seller.seller : null}/>
     <Products
      modalinfo = {(image)=>{setModalInfo({
        openmodal: true,
        images:image
      })
    }}
      products = {seller.products ? seller.products : null} />
      <MyModal modalinfo = {modalinfo}  closemodal = {()=>{setModalInfo({
        openmodal:false
      })}} />
    
    </div>
    )
}