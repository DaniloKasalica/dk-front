import {useState,withRouter } from "react";
import './login.css'
import {Link} from 'react-router-dom'
import {auth} from '../../auth/auth' 
import {validation} from '../../services/validation' 
import { useHistory } from "react-router-dom";
import apiCall from "../../services/apicall";


import { Input, Space,Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone,UserOutlined,MailOutlined  } from '@ant-design/icons';
export const Signup = function App(props) {

  let history = useHistory();
    const [values, setValues] =useState({
      email: '',
      errormail:false,
      password: '',
      errorpass:false,
      username:'',
      errorusername:false,
      number:'',
      errornumber:false,
      errormessage:false
      
    });
    

  const handleUsername = (e)=>{
    let message =''
    if(validation.usernamevalidation(e.target.value)===false)
    message = 'Username mora da sadrži 8 ili više karaktera'
    else
     message = false
    setValues({ ...values, username:e.target.value, errorusername:message });
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
  const checkvalues =  (obj)=>{
   if(validation.passvalidation(obj.password)){
   if(validation.emailvalidation(obj.email)===false){
   if(validation.usernamevalidation(obj.username))
   return Promise.resolve('username')
   return Promise.reject('Pogrešan email ili username')
   }
    return Promise.resolve('email')

  }else{
    return Promise.reject('Pogrešan password')
  }
  }
  const sendSingup= async ()=>{
    try{
        if(values.errorusername===false && values.errormail===false &&   values.errornumber===false &&  values.errorpass===false )
        {
  const data = await apiCall.post('/user/signup',{
        email:values.email,
        username:values.username,
        password: values.password,
        number:values.number
    
    })
    
    localStorage.setItem("atdk", data.data.accesToken);
    localStorage.setItem("rtdk", data.data.refreshToken);
    auth.setJwt(data.data.accesToken)
   history.push('/')
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
     <Input onChange={handleUsername} placeholder="Username" prefix={<UserOutlined />} />
     {values.errorusername ? <p className="errormessage">{values.errorusername}</p> :null}
     <Input onChange={handleEmail} placeholder="Email" prefix={<MailOutlined />} />
     {values.errormail ? <p className="errormessage">{values.errormail}</p> :null}
     <Input onChange={handleNumber} addonBefore="+382"  placeholder="Broj telefona" />

    <Input.Password onChange={handlePassword}
      placeholder="Password"
      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
    {values.errorpass ? <p className="errormessage">{values.errorpass}</p> :null}
    {values.errormessage ? <p className="errormessage">{values.errormessage}</p> : null}
    <Button  onClick={sendSingup} className="loginbtn" type="primary" >
          Registruj se!
        </Button> 
  </Space>
  </div>
  </div>
    )
}
