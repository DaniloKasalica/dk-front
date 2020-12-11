import {useState,withRouter } from "react";
import './login.css'
import {Link} from 'react-router-dom'
import {auth} from '../../../auth/authseller' 
import {validation} from '../../../services/validation'  
import { useHistory } from "react-router-dom";


import { Input, Space,Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone,UserOutlined  } from '@ant-design/icons';
export const Login = function App(props) {

  let history = useHistory();
    const [values, setValues] =useState({
      email: '',
      password: '',
      error: false
    });
    
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleEmail= (e)=>{
    setValues({ ...values, email:e.target.value});
    console.log(e.target.value)
  }
  const handlePassword = (e)=>{
    setValues({ ...values, password:e.target.value});
  }
  const checkvalues =  (obj)=>{
   if(validation.passvalidation(obj.password)){
   if(validation.emailvalidation(obj.email)===false)
   return Promise.reject('Pogrešan email')
   return Promise.resolve(true)
  }else{
    return Promise.reject('Pogrešan password')
  }
  }
  const sendLogin = async ()=>{
    try{
    await checkvalues(values)
    let body = {email:values.email,password:values.password} 
    await auth.login(body)
    history.push('/')
    }catch(err){
      setValues({...values,
        password: '',
        error: true,
        errormessage: err
      })
    }
  }
    return (
      <div className="login">
        <div className="loginform">
    <Space direction="vertical">
      <h1>Log in</h1>
     <Input onChange={handleEmail} placeholder="Email" prefix={<UserOutlined />} />
     <div className="password">
    <Input.Password onChange={handlePassword}
      placeholder="Password"
      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
    {values.error ? <p>{values.errormessage}</p>: <span></span>}
    <a className="forgetpasswordbtn">zaboravili ste lozinku?</a>
    </div>
    <Button onClick={sendLogin} className="loginbtn" type="primary" >
          Idi dalje!
        </Button> 
  </Space>
  </div>
  </div>
    )
}
