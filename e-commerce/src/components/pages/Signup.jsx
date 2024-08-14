import React from "react";
import { useState } from "react";
// import { useNavigate,Link } from "react-router-dom";
// import swal from "sweetalert";
// import axios from "axios";
import From from "../Allinput/From";
import TextInput from "../Allinput/TextInput";
// import Chakbox from "../Allinput/Chakbox";
import Buttons from "../Allinput/Button";
// import Lodding from "../personal/Lodding";
export default function Signup(){
//     const navigate = useNavigate()
// const [fromData , setfromData] = useState({
//     name : '',
//     email : '',
//     password : '',
//     error_list : [],

// })

// const [loadding,setlodding] = useState(false)


// const handelChange = (e) =>{
//     console.log(e.target.name);
//     console.log(e.target.value);
//     setfromData({...fromData, [e.target.name] : e.target.value })
   
// }

// const Fromsubmit = (e) => {
//     e.preventDefault();
//     setlodding(true)
//     const data = {
//         name : fromData.name,
//         email : fromData.email,
//         password : fromData.password,
//     }
//     // const config =  {
//     //    headers:{
//     //     'Content-Type': 'application/json',
//     //     'X-Requested-With': 'XMLHttpRequest',
//     //    }
//     //    ,
//     //    timeout:5000,
//     // };
//     axios.get(`http://localhost:8000/sanctum/csrf-cookie`).then((response) => {
//         axios.post(`http://localhost:8000/api/signup`,data)
//         .then((res) => {
//             setlodding(false)
//            if(res.data.status ===true){
//             localStorage.setItem('auth_token' , res.data.token);
//             // localStorage.setItem('auth_user' , res.data.user);
//             localStorage.setItem('auth_user', JSON.stringify(res.data.user));
//             swal('Success',res.data.message,'success');
//             navigate("/dashbord")
//            }
//         }).catch((err)=>{
//             setlodding(true)
//             if (err.response && err.response.status === 401) {
//                 setfromData({
//                 ...fromData,
//                     error_list: err.response.data.errors 
//               });
//             }
//           });
          
//     })
// }
    return (
        <>
          <div className="main">
            <div className="container">
                    <div className="form-container">
                    {/* onSubmit={Fromsubmit} */}
                    <From  style={{width:'45%',padding:'30px'}}>
                        <h2 className="text-center bg-white">SignUp</h2>
                        <TextInput
                            Label = "Name"
                           // OnChange={handelChange}
                            name="name"
                         //   Value={fromData.name}
                            type = "text"
                            placeholder = "Enter Name"  
                        />
                        <span className="text-danger">
                        {/* {fromData.error_list[0]} */}
                       </span>
                        <TextInput 
                            Label = "Email"
                          //  OnChange={handelChange}
                           // Value={fromData.email}
                            name="email"
                            type = "email"
                            placeholder = "Enter Email"
                        />
                        <span className="text-danger">
                        {/* {fromData.error_list[1]} */}
                       </span>
                        <TextInput 
                            Label = "Password"
                          //  OnChange={handelChange} 
                          //  Value={fromData.password} 
                            name="password"
                            type = "password" 
                            placeholder = "Enter Password" 
                        />
                        <span className="text-danger">
                        {/* {fromData.error_list[2]} */}
                       </span>
                       {/* {!loadding ? <Buttons 
                            Text = "SignUp"
                            ClassName ="btn-primary "
                        /> : <Lodding />} */}
                        <Buttons 
                            Text = "SignUp"
                            ClassName ="btn-primary "
                        /> 
                    </From>
                    </div>
                </div>
            </div>
        </>
    )
}