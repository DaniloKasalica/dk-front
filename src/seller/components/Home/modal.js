import React, { useState } from 'react';
import { Modal} from 'antd';
import {LeftOutlined,RightOutlined} from '@ant-design/icons'
export const MyModal = (props) => {
  const [current, setCurrent] = useState(0);

  const images = props.modalinfo.images

  const goleft = ()=>{
      setCurrent((current)=>{
          if(images[0]===undefined)
          return current
          else if(current===0)
          return images.length-1;
          return current-1
      })
  }
  const goright = ()=>{
      setCurrent((current)=>{
        if(images[0]===undefined)
        return current
         else if(current===images.length-1)
          return 0;
          return current+1;
      })
  }
  const handleOk = () => {
   props.closemodal();
  };

  const handleCancel = () => {
      props.closemodal();
  };
  return (
      <Modal
        visible={props.modalinfo.openmodal}
        footer={null}
        onCancel={handleCancel}
      >
      {
          images ? 
          <div>
          <div className="seller_image"> 
      <img  src={images[current]!==undefined ? images[current].url : '/noimage.png' }  alt={images[current] ? images[current].url : 'noimage'} />
      </div>
     <LeftOutlined onClick={goleft} />
      <RightOutlined onClick={goright} /> 
      </div>
      : <span></span>
    }
      </Modal>
  );
}
