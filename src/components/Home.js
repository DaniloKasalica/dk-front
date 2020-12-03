import React, {useState, useEffect} from "react";
import './home.css'
import {Main} from './Main/Main.js'

export const Home = function App() {

    const [width,setWitdh]=useState(window.innerWidth)
    
    const handleResize = ()=>{
        setWitdh(window.innerWidth)
    }
    useEffect(()=>{
    window.addEventListener('resize',handleResize)
    return()=>{
        window.removeEventListener('resize',handleResize)
    }
},[])
    return ( 
        <div>
        <img className="homeimage" src={width>390 ? '/homeheader.jpg' : '/homemobile.jpg'} alt='homeimage'/>
        <Main/>
        </div>
        
    )
 }