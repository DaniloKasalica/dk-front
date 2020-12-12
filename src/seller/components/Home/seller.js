import React, { useState, useEffect, useMemo } from "react";

import ImgCrop from 'antd-img-crop';
import {PictureOutlined,FileJpgOutlined,UploadOutlined,InboxOutlined   } from '@ant-design/icons'
import { Rate,Button, Upload, message, } from 'antd';
import apiCall from '../../../services/apicall'
import {Uploadimagebtn} from './Uploudimagebtn'
import {Updatedescription} from './Updatedescription'
export const Seller = function App(props) {


const [modalinfo,setModalInfo] = useState(false)


let seller = props.sellerinfo

    const Mydatarender= ()=>{
        let url =''
        seller.sellerimages.forEach(elem => {
          if(elem.main===1)
          url = elem.url
        });
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
                    <button onClick={()=>{props.modalinfo()}}>
              <img src={'/sellerimage'+url}  alt={seller.name}/>
            <PictureOutlined className="imageicon"/>
              </button>
              </div>
         
              </div>
        
               </div>
               <div className="updatesellerarea">
               <Updatedescription id = {seller.id} description={seller.description}/>
               <Uploadimagebtn id = {seller.id} name = {seller.name} images= {seller.sellerimages}/>
               </div>
               </div>
              )
              
            }
    return ( 
      <div >
      {props.sellerinfo!==null ? Mydatarender(): <p>loader</p> }
    
    </div>
    )
}

//