import {useState,withRouter } from "react";
import './login.css'
import {Link} from 'react-router-dom'
import {auth} from '../../../auth/authseller' 
import {validation} from '../../../services/validation' 
import { useHistory } from "react-router-dom";
import apiCall from "../../../services/apicallseller";


import { Input, Space,Button } from 'antd';

import { EyeInvisibleOutlined, EyeTwoTone,UserOutlined,MailOutlined  } from '@ant-design/icons';

const { TextArea } = Input;
export const Signup = function App(props) {

  let history = useHistory();
    const [values, setValues] =useState({
      email: '',
      errormail:false,
      password: '',
      errorpass:false,
      name:'',
      errorname:false,
      number:'',
      errornumber:false,
      description :'',
      packet:1,
      errormessage:false
      
    });
    

  const handleName = (e)=>{
    setValues({ ...values, name:e.target.value});
  }
  const handleEmail = (e)=>{
      
     let message =''
     if(validation.emailvalidation(e.target.value)===false)
     message = 'Nevalidan email'
     else
      message = false
    setValues({ ...values, email:e.target.value,errormail:message });
  }
  const handleNumber = (e)=>{
    setValues({ ...values, number:e.target.value });
  }
  const handlePassword = (e)=>{
     let message =''
    if(validation.passvalidation(e.target.value)===false)
    message = 'Lozinka mora da sadrži 8 ili više karaktera'
     else
     message = false
    setValues({ ...values, password:e.target.value,errorpass:message});
  }
 
  const handledescription = (e)=>{
    console.log(e.target.value)
   setValues({ ...values,
     description:e.target.value});
 }
  const sendSingup= async ()=>{
    try{
        if( values.errormail===false &&   values.errornumber===false &&  values.errorpass===false )
        {
  const data = await apiCall.post('signup',{
        email:values.email,
        name:values.name,
        password: values.password,
        number:values.number,
        description:values.description,
        packet:values.packet
    })
    
    localStorage.setItem("atsdk", data.data.accesToken);
    localStorage.setItem("rtsdk", data.data.refreshToken);
    auth.setJwt(data.data.accesToken)
   history.push(`/mojaprodavnica/${data.data.name}/${data.data.id}`)
}
    }catch(err){
        setValues({...values,
          errormessage:err.message
        })
    }
  }
    return (
      <div className="login">
        <div className="loginform">
      <Space direction="vertical">
      <h1>Registracija</h1>
     <Input onChange={handleName} placeholder="Ime gazdinstva" prefix={<UserOutlined />} />
     {values.errorusername ? <p className="errormessage">{values.errorusername}</p> :null}
     <Input onChange={handleEmail} placeholder="Email" prefix={<MailOutlined />} />
     {values.errormail ? <p className="errormessage">{values.errormail}</p> :null}
     <Input onChange={handleNumber} addonBefore="+382"  placeholder="Broj telefona" />

    <Input.Password onChange={handlePassword}
      placeholder="Password"
      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
    {values.errorpass ? <p className="errormessage">{values.errorpass}</p> :null}

    <TextArea
          className="textareaupdatedescription"
          showCount maxLength={220}
          onChange={handledescription}
          autoSize={{ minRows: 3, maxRows: 7 }}
          placeholder = 'Dodajte opis vašeg gazdinstva'
        />



    {values.errormessage ? <p className="errormessage">{values.errormessage}</p> : null}
    <Button  onClick={sendSingup} className="loginbtn" type="primary" >
          Registruj gazdinstvo!
        </Button> 
  </Space>
  </div>
  </div>
    )
}
