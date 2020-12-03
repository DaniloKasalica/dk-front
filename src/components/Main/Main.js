import React, { useState, useEffect, useMemo } from "react";
import './main.css'
import {Data} from './data'
import {Search} from './Search'//
export const Main = function App() {
 

  const [selinfo, setInfo] = useState({
      
    location:null,
    latitude: null,
    longitude: null,
    sort: null,
    type: null
  })

  const [check, setCheck] = useState(false)
  const [town, setTown]  = useState(null)
  useEffect(()=>{
    if(navigator.geolocation && check==false )
    {
      console.log(navigator)
            navigator.geolocation.getCurrentPosition((position)=>{ 
              setInfo((prevstate)=>{
                setCheck(true)
             return {
                ...prevstate,
                latitude: position.coords.latitude,
                longitude:position.coords.longitude
  
              }
            })
          
          })
        
        }
          else{
             if(check==false)
             setCheck(true)
        }

  },[])
    return ( 
      <div>
        <div className="my-search ">
      <div className="signature"><h1>Pronadji Kvalitet!</h1> </div>
    <Search town = {town}  fetchsellers = {seller=> setInfo(prevState=> ({
            ...prevState,
            location :seller.location,
            sort:seller.sort,
            type:seller.type
         })
    )} />
      </div>
    <Data town={town} selinfo={selinfo} settown = {town=> setTown(town)} /> 
    </div>
    )
}