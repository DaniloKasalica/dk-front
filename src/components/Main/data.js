import React, { useEffect, useState } from "react";
import {Detalist} from './detalist'
import {Location} from './location'
import axios from 'axios'
export const Data =  function App({selinfo,settown,town }) {


  const [sellers,setSellers] = useState([])


useEffect(()=>{  
  console.log('fetcujemo sa podacima ------>',selinfo)
  async function fetchsellersinf (){

    console.log(selinfo)
  const sellersinfo =  await axios({
   method: 'POST',
   url: 'http://localhost:3001/api/seller',
   data: {
       latitude:selinfo.latitude,
       longitude:selinfo.longitude,
       location:selinfo.location,
       sort:selinfo.sort,
       type:selinfo.type

   }
 })
 if(sellersinfo.data.proizvodjaci[0])
  settown(sellersinfo.data.proizvodjaci[0].town)
  setSellers(sellersinfo.data.proizvodjaci)
  
  
  //settown(sellersinfo.data.proizvodjaci[0].town)
  return sellersinfo.data.proizvodjaci
}
fetchsellersinf()
},[selinfo]) 


    const mydatarender= sellers.map((seller)=>{
      return<li>{JSON.stringify(seller.name)}</li>
    })
  

  
    return ( 
      
        <div className="data">
           <ul>{mydatarender}</ul>
    
      </div>
      
    )
           }