import React, { useState } from 'react'
import apiCall from '../../../services/apicall'
import { API_URL } from './config'
import './App.css'

const formData = new FormData()
class Productsimages {
  
  
  
  
  addimagetoproduct =async(file,productid)=>{
  formData.append(1, file)
  const image = await apiCall.post(`seller/products/newprodimg/${productid}`,{
      data:formData
  }).data.image
  return{
    url :image.url,
    id: image.id
  }
  }
    
  
 updateimagetoproduct =async(file,productid,imageid)=>{
 formData.append(1, file)
 const image = await apiCall.put(`seller/products/newprodimg/${productid}/${imageid}`,{
    data:formData
 }).data.image
 return{
   url :image.url,
   id: image.id
 }
 }

   removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    })
  }
  
    

}

export const auth = new Productsimages();