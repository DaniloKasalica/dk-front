import apiCall from "../services/apicall";
class AuthService {
    getAuthStatus() {
      let token = localStorage.getItem("rtdk");
      console.log(token)
      if(token)
      return true;
      else
      return false;
    }
    setJwt(token) {
      console.log(token)
      apiCall.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    async login(body) {
      try{
      const data  = await apiCall.post("login",body);
      localStorage.setItem("atdk", data.data.accesToken);
      localStorage.setItem("rtdk", data.data.refreshToken);
      this.setJwt(data.data.accesToken);
      return Promise.resolve(true)
      }catch(err){
        return Promise.reject(err.message)
      }
    }
    logout() {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
  }
   export const auth = new AuthService();