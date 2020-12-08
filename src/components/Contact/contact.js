import React from "react";
import apiCall from "../../services/apicall";
export const Contact = function App() {

    const fetchapi = async(e)=>{
        e.preventDefault();
        console.log('je')
       const res =  await apiCall('user/comment')
       console.log(res)

    }
    return (
      <div>
          <button onClick={fetchapi} >Fetch protected route on das dsa dsa asd asddas asd asd ads asd api</button>
        </div>

    )
}