import axios from "axios";
import {auth} from "../auth/auth"
const apiUrl = "http://localhost:3001/api/seller/";

const instance= axios.create({
  baseURL: apiUrl
});
instance.interceptors.response.use(function (response) {
    return response;
  }, async (error) => {
    const originalRequest = error.config;  
    if (401 === error.response.status) {
        console.log(error)
      auth.logout()
    } else if (403 === error.response.status) { 
        const res = await instance.post("token", {
        token: localStorage.getItem("rtsdk")
      })
      if(res.status===200){
      localStorage.setItem("atsdk", res.data.accessToken);
      originalRequest.headers["Authorization"] =
      "Bearer " + res.data.accessToken;
      const resp = await axios(originalRequest);
      return resp;
      }else {
        localStorage.removeItem("atsdk");
        localStorage.removeItem("rtsdk");
        return false
      }

    }else if(400 === error.response.status){
      throw new Error(error.response.data.error)
    }
  });

export default instance;