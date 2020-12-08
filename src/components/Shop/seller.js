import React, { useState, useEffect, useMemo } from "react";

import {PictureOutlined } from '@ant-design/icons'
export const Seller = function App(props) {

const [modalinfo,setModalInfo] = useState(false)
    const Mydatarender= ()=>{
        let url =''
        let seller = props.sellerinfo
        seller.sellerimages.forEach(elem => {
          if(elem.main===1)
          url = elem.url
        });
              return (
                <div className = "seller">
             
              <div className="left_seller">
               <h1>{seller.name}</h1>
               <p >{seller.description}</p>
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
              )
              
            }
    return ( 
      <div >
      {props.sellerinfo!==null ? Mydatarender(): <p>nemaproizvoda</p> }
    
    </div>
    )
}

//