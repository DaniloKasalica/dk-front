import React, { useState, useEffect, useMemo } from "react";

import ImgCrop from 'antd-img-crop';
import {PictureOutlined,FileJpgOutlined,UploadOutlined,InboxOutlined   } from '@ant-design/icons'
import { Rate,Button, Upload, message, } from 'antd';
import apiCall from '../../../services/apicallseller'
import {Uploadimagebtn} from './Uploudimagebtn'
import {Updatedescription} from './Updatedescription'
export const Seller = function App(props) {

  const [sellerinfo,setSellerinfo] = useState(null)

useEffect(()=>{
if(props.sellerinfo!==null){
console.log(props.sellerinfo)
setSellerinfo(props.sellerinfo)
}
},[props.sellerinfo])

console.log('usao u seller', sellerinfo)

useEffect(()=>{
  console.log('Promjenio se selerinfo u selleru',sellerinfo)
  props.updateseller((sellerinfo))
},[sellerinfo])


let seller = sellerinfo

    const Mydatarender= ()=>{
      let url = ''
      if(seller.sellerimages[0])
         url =seller.sellerimages[0].url
         else
         url = '/noimage.png'
        /*
        seller.sellerimages.forEach(elem => {
          if(elem.main===1)
          url = elem.url
        });
        */
              return (
                <div className="updateseller">
                <div className = "seller">
             
              <div className="left_seller">
               <h1>{seller.name}</h1>
               <p >{seller.description}</p>
               <Rate disabled
                defaultValue={5} 
                allowHalf ={true} />
                <p>Broj komentara: 30(4.7)</p><a>pogledaj sve</a>
               </div>


               <div className="right_seller">
                  <div className="seller_image">
                    <button onClick={()=>{props.modalinfo(seller.sellerimages)}}>
              <img src={url}  alt='dodaj sliku gazdinstva'/>
            <PictureOutlined className="imageicon"/>
              </button>
              </div>
         
              </div>
        
               </div>
               <div className="updatesellerarea">
               <Updatedescription id = {seller.id} description={seller.description}/>
               <Uploadimagebtn 
                sellerinfo = {(images)=>{setSellerinfo((prev)=>{

                  return{
                  ...prev,
                  sellerimages:[...prev.sellerimages,...images]
                  }
                })
              }}
                 id = {seller.id}
                 name = {seller.name} 
                 images= {seller.sellerimages}/>
               </div>
               </div>
              )
              
            }
    return ( 
      <div >
      {seller!==null ?  Mydatarender(): <p>loader</p> }
    
    </div>
    )
}

//