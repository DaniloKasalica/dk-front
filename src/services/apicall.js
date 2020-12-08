import axios from "axios";
import {auth} from "../auth/auth"
const apiUrl = "http://localhost:3001/api/";

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
        const res = await instance.post("user/token", {
        token: localStorage.getItem("rtdk")
      })
      if(res.status===200){
      localStorage.setItem("atdk", res.data.accessToken);
      originalRequest.headers["Authorization"] =
      "Bearer " + res.data.accessToken;
      const resp = await axios(originalRequest);
      return resp;
      }else {
        localStorage.removeItem("atdk");
        localStorage.removeItem("rtdk");
        return false
      }
    }
  });

export default instance;