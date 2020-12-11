import React, { useState, useEffect, useMemo } from "react";

import ImgCrop from 'antd-img-crop';
import {PictureOutlined,FileJpgOutlined,UploadOutlined,InboxOutlined   } from '@ant-design/icons'
import { Rate,Button, Upload, message, } from 'antd';
export const Seller = function App(props) {


const [modalinfo,setModalInfo] = useState(false)
const [AddImage,setAddImage]= useState(false)
const [fileList, setFileList] = useState([
  {
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
])


const imagesnumberbefore = props.sellerimages.length()


const onChange = ({ fileList: newFileList }) => {
  setFileList(newFileList);
};






    const Mydatarender= ()=>{
        let url =''
        let seller = props.sellerinfo
        seller.sellerimages.forEach(elem => {
          if(elem.main===1)
          url = elem.url
        });
              return (
                <div className = "seller">
             
              <div className="left_seller">
               <h1>{seller.name}</h1>
               <p >{seller.description}</p>
               <Rate disabled
                defaultValue={5} 
                allowHalf ={true} />
                <p>Broj komentara: 30(4.7)</p><a>pogledaj sve</a>
               </div>


               <div className="right_seller">
                  <div className="seller_image">
                    <button onClick={()=>{props.modalinfo()}}>
              <img src={'/sellerimage'+url}  alt={seller.name}/>
            <PictureOutlined className="imageicon"/>
              </button>
              </div>
              <div className="addimage">
                <Button onClick={(e)=>{
                  e.preventDefault();
                  setAddImage(true)
                }} type="primary" icon={<FileJpgOutlined />}>Promjeni ili dodaj sliku svog gazdinstva</Button>
                {AddImage ? 
                <div>
                  {seller.sellerimages.map((image)=>{
                    <div className="addimagesellerparent">
                      <img src={image.url} alt="#" />
                      </div>
                  })}
                  {imagesnumberbefore <5 ?
                  <ImgCrop rotate>
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                  >
                    {fileList.length < 5 && '+ Upload'}
                  </Upload>
                </ImgCrop>
                  : <p>Maskimalan broj slika za domacinstvo</p>
                   }
                </div>
                :null
                }
                </div>
              </div>
             
               </div>
              )
              
            }
    return ( 
      <div >
      {props.sellerinfo!==null ? Mydatarender(): <p>nemaproizvoda</p> }
    
    </div>
    )
}

//