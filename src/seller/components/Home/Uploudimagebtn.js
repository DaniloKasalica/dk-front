import React, { useState, useEffect, useRef } from "react";

import ImgCrop from 'antd-img-crop';
import {PictureOutlined,FileJpgOutlined,UploadOutlined,PlusCircleOutlined  } from '@ant-design/icons'
import { Rate,Button, Upload, message, } from 'antd';
import apiCall from '../../../services/apicallseller'
export const Uploadimagebtn = function App(props) {


const [AddImage,setAddImage]= useState(false)
const [fileList, setFileList] = useState([])

const fileInput = useRef(null);
let images = props.images
let name = props.name
let id = props.id
 let imagesnumberbefore = images.length;

 console.log('usao u uploud images',images,fileList)
const imgselect = (e)=>{
  setFileList((prev)=>{
  return  [...prev,{
    url: URL.createObjectURL(e.target.files[0]),
   blob: e.target.files[0]
  }]
  })
}
const Uploatimage = async ()=>{
  const fd = new FormData();

  fileList.forEach((file,index)=>{
  return fd.append('image',file.blob,`${name}[${index+imagesnumberbefore}].jpg`)
  })
  const urls = await  apiCall.post(`images`,fd)
  console.log('ktraj zahtjeva',urls.data)
  setFileList([])
 props.sellerinfo(urls.data)


}
 const renderimages =  (images,kind)=>{
   return images.map((image)=>{
       return (
    <div className="addimagesellerparent">
    <img src={image.url} alt="#" />
    </div>
       )}
    )
}
const check = AddImage

    return ( 
      <div className="addimage">
      <Button   onClick={(e)=>{
        e.preventDefault();
        if(check)
        setAddImage(false)
        else
        setAddImage(true)

      }} type="primary" 
      icon={<FileJpgOutlined />}>Promjeni ili dodaj sliku svog gazdinstva</Button>
      {AddImage ? 
      <div>
          <div className="displayimagesupdate">
        {renderimages (images,'old') }
        {fileList.length>0 ?
        renderimages(fileList,'true')
        :null}

{imagesnumberbefore+fileList.length <5 ?

         <button onClick={(e)=>{
           e.preventDefault()
            fileInput.current.click()
         }
        }  className="addimagesellerparent" ><PlusCircleOutlined /></button>
         : null
} 
        </div>
        {imagesnumberbefore+fileList.length <5 ?
    <div>
    <input
     ref = {fileInput}
     style = {{display:'none'}}
     multiple
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