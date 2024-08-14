import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

export default function PostDelete() {
    const navigate = useNavigate();
    const { id } = useParams();
    const authToken = localStorage.getItem('auth_token');
    
    // useEffect(() => {
    //     axios.delete(`http://localhost:8000/api/posts/${id}`,
    //         {
    //             'method' : `delete`,
    //             headers:{
    //                 'Authorization': `Bearer ${authToken}`,
    //             }
    //         }
    //     ).then((res) => {
    //         console.log(res);
    //     }).catch((error)=>{
    //         console.log(error);
    //     })
    // })32|7rrJHqwTprI1x57CM4MOhbWHtz6KOFnT8itM0nH2f9fcff09
   
console.log(authToken);
    useEffect(() => {
            axios.delete(`http://localhost:8000/api/posts/${id}`,{
                headers:{
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                if (res.status === 200 && res.data.status === true) {
                    swal('Success', res.data.message, 'success');
                    navigate('/post');
                }
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.status === 401) {
                        
                      //  swal('Error', error.response.data.message || 'Unauthorized access', 'error');
                        navigate('/post');
                    } else if (error.response.status === 404) {
                        
                       // swal('Error', error.response.data.message || 'Post not found', 'error');
                        navigate('/post');
                    } else if (error.response.status === 500) {
                       
                      //  swal('Error', error.response.data.message || 'Server error', 'error');
                        navigate('/post');
                    } else {
                        
                       // swal('Error', 'An unknown error occurred', 'error');
                        navigate('/post');
                    }
                } else {
                    swal('Error', 'Failed to connect to the server', 'error');
                    
                    navigate('/post');
                }
                return null
            });
       
        
    
    }, [id,navigate,authToken]);
   
     // Return null as there's no UI in this component
}
