import React, { useState, useEffect, useRef } from "react";

import ImgCrop from 'antd-img-crop';
import {PictureOutlined,FileJpgOutlined,UploadOutlined,PlusCircleOutlined  } from '@ant-design/icons'
import { Rate,Button, Upload, message, } from 'antd';
import apiCall from '../../../services/apicall'
export const Updateproductimages = function App(props) {


const [AddImage,setAddImage]= useState(false)
const [fileList, setFileList] = useState([])

const fileInput = useRef(null);
let images = props.images
let name = props.name
let id = props.id
let imagesnumberbefore = images.length;

const imgselect = (e)=>{
  setFileList((prev)=>{
  return  [...prev,URL.createObjectURL(e.target.files[0])]
  })
}
const Uploatimage = async ()=>{

  console.log('pokusaj')
  const fd = new FormData();
  fd.append('image',fileList,'seller',name)
  await  apiCall.post(`seller/${id}`,fd)
  console.log('ktraj zahtjeva')
}
 const renderimages =  (images,kind)=>{
   return images.map((image)=>{
     if(kind === 'old')
     {
       return (
    <div className="addimageproductparent">
    <img src={`/sellerimage/${image.url}`} alt="#" />
    </div>
     )}else{
       return ( 
        <div className="addimageproductparent">
        <img src={image} alt="#" />
        </div>
       )
     }
    })
}
const check = AddImage

    return ( 
      <div className="addimageproduct">
      <Button 
      type="primary" 
      shape="round"
      className="addimageproductbtn"
       icon={<PictureOutlined />} size="200"  onClick={(e)=>{
        e.preventDefault();
        if(check)
        setAddImage(false)
        else
        setAddImage(true)

      }} type="primary" 
      icon={<FileJpgOutlined />}>Izmjeni slike</Button>
      {AddImage ? 
      <div>
          <div className="displayimagesupdateproduct">
        {renderimages (images,'old') }
        {fileList.length>0 ?
        renderimages(fileList,'true')
        :null}

{imagesnumberbefore+fileList.length <5 ?

         <button onClick={(e)=>{
           e.preventDefault()
            fileInput.current.click()
         }
        }  className="addimageproductparent" ><PlusCircleOutlined /></button>
         : null
} 
        </div>
        {imagesnumberbefore+fileList.length <5 ?
    <div>
    <input
     ref = {fileInput}
     style = {{display:'none'}}
     type = "file" 
     onChange={imgselect}/>
 
    </div>
        : <p>Maskimalan broj slika za domacinstvo je 7</p>
         }
           
    <Button  onClick={Uploatimage}
     type = "primary"
     disabled ={fileList.length ===0  ? 
     true
      :false
      } 
     >Sačuvaj</Button>
      </div>
      :null
      }
      </div>
    )
}

//