import apiCall from "../services/apicall";
class AuthService {
    getAuthStatus() {
        console.log('hejehehehhehe')
      let token = localStorage.getItem("rtsdk");
      if(token)
      return true;
      else
      return false;
    }
    setJwt(token) {
      apiCall.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    async login(body) {
      try{
      const data  = await apiCall.post("login",body);
      localStorage.setItem("atsdk", data.data.accesToken);
      localStorage.setItem("rtsdk", data.data.refreshToken);
      this.setJwt(data.data.accesToken);
      return Promise.resolve(true)
      }catch(err){
        return Promise.reject(err.message)
      }
    }
    logout() {
      localStorage.removeItem("atsdk");
      localStorage.removeItem("rtsdk");
      window.location.href = "/login";
    }
  }
   export const auth = new AuthService();