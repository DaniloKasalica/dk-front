import React, { useEffect, useState } from "react";
import {Detalist} from './detalist'
import {Location} from './location'
import axios from 'axios'
export const Search = function App(props) {
 
  const [sellerinfo, setselerinfo] = useState({
   
    location:null,
    sort:null,
    type:null
  })
    return ( 
      
      <div className="my-form">
    <form onSubmit={(e)=> {e.preventDefault(); props.fetchsellers(sellerinfo)}} >
    <Location town={props.town} setLocation={town=> setselerinfo( prevState => ({
            ...prevState,
            location :town
         }))}  />

    <Detalist setSort = {seller=> setselerinfo( prevState => ({
                 ...prevState,
                 "sort" :seller.sort,
                 "type" :seller.type // 'your updated value here'
              }))} />
    <button type="submit">Search</button>
      </form>
      </div>
    )
 }