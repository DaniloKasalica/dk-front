import React, { useState, useEffect, useMemo } from "react";

export const Slider = function App(props) {

  const [imagenum, setImagenum] = useState(1)
 

  const goleft= ()=>{
    setImagenum((current)=>{
        if(current===1)
        return props.length
        else
        return current-1;
    })

  }
  const goright = ()=>{
    setImagenum((current)=>{
        if(current ===props.length)
        return 0;
        else
        return current+1;
    })

  }
    return ( 
      <div>
          <button className="btn-left" onClick={goleft}>left</button>
          <div className="slider">
              <div className='slide'>
              <img className="galleryimage" src={`/sellerimage/seller[${props.id}]/image[${imagenum}]`} alt='#'/>
              </div>
              </div>
          <button className="btn-right" onClick={goright}>right</button>
    </div>
    )
}