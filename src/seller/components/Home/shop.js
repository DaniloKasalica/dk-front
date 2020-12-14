import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {Products} from './products'
import {Seller} from './seller'
import {MyModal} from './modal'
import apiCall from '../../../services/apicall'
import {LeftOutlined,RightOutlined} from '@ant-design/icons'
import './shop.css'
export const Shop = function App(props) {

  const [seller, setSeller]  = useState(false)
  const [modalinfo,setModalInfo]=useState({
    openmodal:false
  })
  const id = props.id;
  const name = props.name

   const getdata =async()=>{ 
     try{
   const data = await apiCall.get(`products/seller/${id}`);
   setSeller({products:data.data.products,seller:data.data.seller})
  }catch(err){
    return null
  }
   }

   useEffect(()=>{
     getdata()
   },[])
   console.log('usao u shop', seller)
   useEffect(()=>{
     console.log('promjenio se seller u shopu', seller)
  },[seller])

    return ( 
      <div className="container_shop">
      <Seller
         modalinfo = {(images)=>{setModalInfo({
          openmodal:true,
          images:images
        })
        
      }}
      updateseller = {(seller)=>{setModalInfo((prev)=>{
        return{
          ...prev,
          seller:seller
          }
          
        })
    }}

        sellerinfo = {seller.seller ? seller.seller : null}/>
     <Products
     sellerid ={id}
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