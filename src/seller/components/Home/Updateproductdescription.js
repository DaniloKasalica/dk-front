import React, { useState, useEffect, useMemo } from "react";
import { Input } from 'antd';

import {PictureOutlined,FileJpgOutlined,UploadOutlined,SendOutlined} from '@ant-design/icons'
import { Button } from 'antd';
import apiCall from '../../../services/apicallseller'
export const Updateproductdescription = function App(props) {


const [description, setDescription] = useState({
    name : props.description.name,
    unit: props.description.unit,
    quantity:props.description.quantity,
    price:props.description.price,
    town:[props.description.town],
    description:props.description.description
})
const [adddescription, setadddescription] = useState(false)
const id = props.id

 const hendledescription  = (e)=>{
    setDescription((prev)=>{
       return{ 
           ...prev,
           description: e.target.value

       }
        
    })
 }

const hendleunit = (e)=>{
    setDescription((prev)=>{

        return{ 
            ...prev,
            unit: e.target.value
 
        }
         
     })
  }
const hendlquantity = (e)=>{
    setDescription((prev)=>{
        return{ 
            ...prev,
            quantity: e.target.value
 
        }
         
     })
  }
 const hendlename =(e)=>{
    setDescription((prev)=>{
        return{ 
            ...prev,
            name: e.target.value
 
        }
         
     })
  }
 const hendleprice =(e)=>{
    setDescription((prev)=>{
        return{ 
            ...prev,
            price: e.target.value
 
        }
         
     })
  }
 
 




 const senddescription =async ()=>{
     try{
    const result = await apiCall.put(`/seller/products/updateprod/${id}`,{
        description:description
    })
}catch(err){
}
 }

 const check = adddescription
 const checkdescription = props.description


    return ( 
      <div className="changedescriptionproduct">
          
          <Button type="primary" 
          className="adddescriptionproduct"
           icon={<SendOutlined />} shape="round"
           size="200" onClick={(e)=>{
              e.preventDefault();
              if(check)
              setadddescription(false)
              else
              setadddescription(true)

          }} >Promjeni detalje</Button>
          {adddescription ? 
          <div className="updateproductdescription">

         <Input onChange={hendlename}  addonBefore='Naziv proizvoda:' defaultValue={description.name} type='text'/>
         <Input onChange={hendledescription} addonBefore='Kratak opis:' defaultValue={description.description} type='text'/>
         <Input onChange={hendleprice} addonBefore='Cijena:' defaultValue={description.name} type='number'/>
         <Input onChange={hendlquantity} addonBefore='Količina:' defaultValue={description.quantity} type='number'/>
         <Input onChange={hendleunit} addonBefore='Jedinica:(kg/gr/l)' defaultValue={description.unit} type='text'/>
          <Button disabled={false}
           type= "primary" onClick ={(e)=>{
              e.preventDefault();
              senddescription()
          }
          }>Sačuvaj opis</Button>
          </div>
          : null
          }
      </div>
    )
}

//