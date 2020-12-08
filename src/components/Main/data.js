import React, { useEffect, useReducer, useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

export const Data =  function App(props) {

  let history = useHistory();
  const [sellers,setSellers] = useState([])

useEffect(()=>{  
  console.log('fetcujemo sa podacima ------>',props.selinfo)
  async function fetchsellersinf (){

  const sellersinfo =  await axios({
   method: 'POST',
   url: 'http://localhost:3001/api/seller',
   data: {
       latitude:props.selinfo.latitude,
       longitude:props.selinfo.longitude,
       location:props.selinfo.location,
       sort:props.selinfo.sort,
       type:props.selinfo.type

   }
 })
 console.log(sellersinfo.data)
 if(sellersinfo.data.proizvodjaci[0])
  props.settown(sellersinfo.data.proizvodjaci[0].town)
  setSellers(sellersinfo.data.proizvodjaci)
  
  
  //settown(sellersinfo.data.proizvodjaci[0].town)
  return sellersinfo.data.proizvodjaci
}
fetchsellersinf()
},[props.selinfo]) 

let url= ''
const mydatarender= sellers.map((seller)=>{
seller.sellerimages.forEach(elem => {
  if(elem.main===1)
  url = elem.url
});
      return (
        <div className="sellercard">
        <div className= "left">
          <div  className="sellerimage">
      <img src={'/sellerimage'+url}  alt={seller.name}/>
      </div>
      </div>
      <div className="right">
       <h1>{seller.name}</h1>
       <p className="sellerdescription">{seller.description}</p>
       <button className = 'seemorebtn' onClick ={ (e)=>{
         e.preventDefault()

         console.log(seller)
         history.push({
           pathname:`/prodavnica/${seller.id}`,
           state:{seller:seller}
          })
       }}>Posjeti prodavnicu</button>

      </div>
      </div>
      )
      
    })
  

  
    return ( 
      
        <div className="data">
           {mydatarender}
      </div>
      
    )
           }