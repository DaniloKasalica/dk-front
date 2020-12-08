import {useState,withRouter } from "react";
import './login.css'
import {Link} from 'react-router-dom'
import {auth} from '../../auth/auth' 
import {validation} from '../../services/validation' 
import { useHistory } from "react-router-dom";


import { Input, Space,Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone,UserOutlined  } from '@ant-design/icons';
export const Login = function App(props) {

  let history = useHistory();
    const [values, setValues] =useState({
      email: '',
      password: '',
      username:'',
      showPassword: false,
      error: false,
    });
    
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleUsername = (e)=>{
    setValues({ ...values, email:e.target.value,username:e.target.value });
    console.log(e.target.value)
  }
  const handlePassword = (e)=>{
    console.log(e.target.value)
    setValues({ ...values, password:e.target.value});
  }
  const checkvalues =  (obj)=>{
   if(validation.passvalidation(obj.password)){
   if(validation.emailvalidation(obj.email)===false){
     console.log('nijeemail')
   if(validation.usernamevalidation(obj.username))
   return Promise.resolve('username')
   return Promise.reject('Pogrešan email ili username')
   }
    return Promise.resolve('email')

  }else{
    return Promise.reject('Pogrešan password')
  }
  }
  const sendLogin = async ()=>{
    try{
   let body = {}
   let check =  await checkvalues(values)
   if(check === 'email')
    body = {email:values.email,password:values.password} 
   else
    body = {username:values.username,password:values.password} 
    await auth.login(body)
    history.push('/')
    }catch(err){
      setValues({...values,
        password: '',
        showPassword: false,
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
     <Input onChange={handleUsername} placeholder="Email/Username" prefix={<UserOutlined />} />
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
