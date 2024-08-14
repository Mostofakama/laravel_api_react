import classes from '../../styles/Dstyle/SinglePost.module.css';
import Layout from "../../Dcomponents/Layout";
import img from '../../../assets/img/img.jpg';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/skeleton/skeleton.css';     
import '../../styles/skeleton/skeletonTow.css';     
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
export default function SinglePost(){
    const navigate = useNavigate()
    const [SinglePost,setSinglePost] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,seterror] = useState(true)
    const { id } = useParams(); 
    const authToken = localStorage.getItem('auth_token');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/posts/${id}`,{
            headers:{
                'Authorization': `Bearer ${authToken}`,
            }
        }).then((res) => {
            if(res.data.status === true){
                setSinglePost(res.data.data.post[0])
            }
            setLoading(false)
          
        }).catch((error) => {
            
            if( error.response.status === 404){
                swal('error',error.response.data.message,'error');
                navigate('/post')
            }
            setLoading(false)
        })
    }, [id])

    return(
        <>
        <Layout> 
            {loading ?
             (
<div className="border">
                <h2 className='text-center  p-3 m-0'><Skeleton className="skeleton" width={500} /></h2>
                <div className="single-card-post">
                    <div className="single-img-post w-100 d-flex justify-content-center">
                    <Skeleton className='skeleton rounded-circle' width={500} height={500} />
                    </div>
                    <div className="text-post p-4">
                        <h2 className=''><Skeleton className="skeleton" width={500} /></h2>
                        <p className=''>
                            
                            <Skeleton className="skeleton" width={1250} height={10}/>
                            <Skeleton className="skeleton" width={1270} height={10}/>
                            <Skeleton className="skeleton" width={1290} height={10}/>
                            <Skeleton className="skeleton" width={1320} height={10}/>
                        </p>
                    </div>
                </div>
            </div>
             ) 
             :
             (<div className="border">
                <h2 className='text-center bg-primary p-3 m-0'>Single Post</h2>
                <div className="single-card-post">
                    <div className="single-img-post w-100 d-flex justify-content-center">
                        <img className='w-50 ' src={`http://localhost:8000/uploads/${SinglePost.image}`} alt="" />
                    </div>
                    <div className="text-post p-4">
                        <h2 className=''>{SinglePost.title}</h2>
                        <p className=''>{SinglePost.description}</p>
                    </div>
                </div>
            </div>)
              }
            
        </Layout>
       
        </>
    )
}