import React from "react";

import Layout from "../../Dcomponents/Layout";
export default function Dashbord(){
   
   const clearLocalStorage = () => {
    localStorage.clear();
};
const users = localStorage.getItem('auth_user');
const user = JSON.parse(users)
console.log(users);

    return(
       <Layout>
        <p onClick={clearLocalStorage} className="btn btn-danger">clear</p>
        {/* <h2>Hashbord</h2>
        <p>{user.name}</p>
        <p>{user.email}</p> */}
      
       </Layout>
    )
}