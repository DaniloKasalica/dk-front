
class Validation {
    emailvalidation(email){
         if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
         return true
         return false
    } 
    usernamevalidation(username){
        if (username.length>7)
        return true
        return false
   }
   passvalidation(password){
    if (password.length>7)
    return true
    return false
}
  }
   export const validation = new Validation();