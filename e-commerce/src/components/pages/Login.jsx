import TextInput from '../Allinput/TextInput'
import From from '../Allinput/From'
import Buttons from '../Allinput/Button'
import { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate,Link } from 'react-router-dom'
import Lodding from '../personal/Lodding'
export default function Login(){
const navigate = useNavigate()
    const [fromData,setfromData] = useState({
        email:'',
        password:'',
        error_list:''
    })

    const [loadding,setlodding] = useState(false)

    const handelChange = (e) => {
      setfromData({
        ...fromData,[e.target.name] : e.target.value
      })
    }
    const Fromsubmit = (e) => {
        e.preventDefault()
        setlodding(true)
        const data = {
            email:fromData.email,
            password : fromData.password

        }
axios.get('http://localhost:8000/sanctum/csrf-cookie').then((response) => {
    axios.post('http://localhost:8000/api/login',data).then((res) => {
        setlodding(false)
        console.log(res.data.token);
       if(res.data.status === true){
           localStorage.setItem('auth_token',res.data.token);
          
           swal('Success',res.data.message,'success');
           navigate("/dashbord")
       }
    })
    .catch((e) => {
       setlodding(false)
       
        if(e.response && e.response.status === 401){
            
            setfromData({
                
                ...fromData,error_list:e.response.data.errors
            }
        )
        }
       else if(e.response && e.response.status === 403){
            swal('Error',e.response.data.message,'error')
        }

    })
})

    }
    return (
            <>
              <div className="main">
                <div className="container">
                        <div className="form-container">
                        <From onSubmit={Fromsubmit} style={{width:'45%',padding:'30px'}}>
                            <h2 className="text-center bg-white">SignUp</h2>
                            <span className="text-danger">
                            {fromData.error_list[0]}
                           </span>
                            <TextInput 
                                Label = "Email"
                                OnChange={handelChange}
                                Value={fromData.email}
                                name="email"
                                type = "email"
                                placeholder = "Enter Email"
                            />
                            <span className="text-danger">
                            {fromData.error_list.email}
                           </span>
                            <TextInput 
                                Label = "Password"
                                OnChange={handelChange} 
                                Value={fromData.password} 
                                name="password"
                                type = "password" 
                                placeholder = "Enter Password" 
                            />
                            <span className="text-danger">
                            {fromData.error_list.password}
                           </span>
                           {!loadding ? <Buttons 
                            Text = "LogIn"
                            ClassName ="btn-primary "
                        /> : <Lodding />}
                        
                        </From>
                        </div>
                    </div>
                </div>
            </>
        
    )
}