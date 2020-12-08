import {useState,withRouter } from "react";
import './login.css'
import {Link} from 'react-router-dom'
import {auth} from '../../auth/auth' 
import {validation} from '../../services/validation' 
import { useHistory } from "react-router-dom";
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

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleUsername = (e)=>{
    setValues({ ...values, email:e.target.value,username:e.target.value });
  }
  const checkvalues =  (obj)=>{
    console.log(obj)
   if(validation.passvalidation(obj.password)){
   if(validation.emailvalidation(obj.email)===false){
     console.log('nijeemail')
   if(validation.usernamevalidation(obj.username))
   return Promise.resolve('username')
   return Promise.reject('Pogrešan email ili password')
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
    body = {email:values.username,password:values.password} 
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
      <h1></h1>
    )
}
