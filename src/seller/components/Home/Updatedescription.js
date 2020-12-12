import React, { useState, useEffect, useMemo } from "react";
import { Input } from 'antd';

import {PictureOutlined,FileJpgOutlined,UploadOutlined,InboxOutlined   } from '@ant-design/icons'
import { Button } from 'antd';
import apiCall from '../../../services/apicall'
export const Updatedescription = function App(props) {


const [description, setDescription] = useState(props.description)
const [adddescription, setadddescription] = useState(false)
const id = props.id

const { TextArea } = Input;
 const handledescription  = (e)=>{
    setDescription(e.target.value)
 }
 const senddescription =async ()=>{
     try{
    const result = await apiCall.put(`/seller/description/${id}`,{
        description:description
    })
}catch(err){
}
 }

 const check = adddescription
 const checkdescription = props.description
 console.log(description===checkdescription)
    return ( 
      <div className="changedescription">
          <Button type="primary" onClick={(e)=>{
              e.preventDefault();
              if(check)
              setadddescription(false)
              else
              setadddescription(true)

          }} >Promjeni opis</Button>
          {adddescription ? 
          <div className="updateescription">

          <TextArea
          className="textareaupdatedescription"
          showCount maxLength={220}
          defaultValue = {description}
          value={description}
          onChange={handledescription}
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
          <Button disabled={
              checkdescription ===description ?
              true : false
          } type= "primary" onClick ={(e)=>{
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