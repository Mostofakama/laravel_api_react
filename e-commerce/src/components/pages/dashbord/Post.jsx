import Layout from "../../Dcomponents/Layout";
import { Link } from "react-router-dom";
import ContentTitle from "../../dContent/ContentTitle";
import { useState,useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import '../../styles/skeleton/skeleton.css';
import '../../styles/skeleton/skeletonTow.css';
import PostDelete from "./PostDelete";
export default function Post(){
  const [postss, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); 
    const [posts,setposts] = useState([]);
    const [error, setError] = useState(null);
const authToken = localStorage.getItem('auth_token');
    useEffect(()=>{
      axios.get(`http://localhost:8000/api/posts`,{
        headers :{
          'Authorization': `Bearer ${authToken}`,
        }
      }).then((res) => {
        if(res.data.status === true){
          setposts(res.data.data.posts)
          console.log('auth not 2');
        }
// console.log(res.data.message);
console.log(res.data.data.posts);
setLoading(false); 
      }).catch((error) => {
        setError(`Post can't fetch `)
        setLoading(false); 
      })
    },[authToken])
    const handlePostDelete = () => {
     console.log('jth');
  };
    return (
        <Layout>
            <div className="post">
                <ContentTitle content_title="All Post" create_content="Create Post" to="/post/create" loading={loading}/>
                <div className="All_content">
                <table className="table table-striped">
                    <thead>
                      {loading ? ( <tr>
                        <th scope="col"><Skeleton className="skeleton skeleton-table-cell" width={40} /></th>
                        <th scope="col"><Skeleton className="skeleton skeleton-table-cell" width={40} /></th>
                        <th scope="col"><Skeleton className="skeleton skeleton-table-cell" width={40} /></th>
                        <th scope="col"><Skeleton className="skeleton skeleton-table-cell" width={40} /></th>
                        <th scope="col"><Skeleton className="skeleton skeleton-table-cell" width={40} /></th>
                        <th scope="col"><Skeleton className="skeleton skeleton-table-cell" width={40} /></th>
                        <th scope="col"><Skeleton className="skeleton skeleton-table-cell" width={40} /></th>
                      </tr>) 
                      : 
                      (<tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">description</th>
                        <th scope="col">Image</th>
                        <th scope="col">Show</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                      </tr>)
                      
                      }
                      
                    </thead>
                    <tbody>
                    {loading ? (
                // Render skeleton loader when loading
                Array(10).fill().map((_, index) => (
                  <tr key={index} className="mt-2">
                    <th scope="row"><Skeleton className="skeleton skeleton-table-cell" width={40} /></th>
                    <td><Skeleton className="skeleton skeleton-table-cell" width={150} /></td>
                    <td>
                      <Skeleton className="skeleton skeleton-table-cell" width={200} height={10}/>
                      <Skeleton className="skeleton skeleton-table-cell" width={300} height={10}/>
                      </td>
                    <td><Skeleton className="skeleton skeleton-rect rounded-circle"  width={50} height={50}/>
                    </td>
                    <td><Skeleton className="skeleton skeleton-table-cell" width={75} height={30} /></td>
                    <td><Skeleton className="skeleton skeleton-table-cell" width={75} height={30} /></td>
                    <td><Skeleton className="skeleton skeleton-table-cell" width={75} height={30} /></td>
                  </tr>
                ))
              ) : (
                posts.length > 0 ? (
                  posts.map((post, index) => (
                    <tr key={post.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{post.title}</td>
                      <td>{post.description}</td>
                      <td>
                        <img src={`http://localhost:8000/uploads/${post.image}`} alt={post.title} style={{ width: "100px", height: "100px" }} />
                      </td>
                      <td>
                        <Link className="btn btn-success" to={`/posts/${post.id}`}>Show</Link>
                      </td>
                      <td>
                        <Link className="btn btn-success" to={`/update/${post.id}`}>Update</Link>
                      </td>
                      <td>
                      {/* <PostDelete pid={post.id} onDelete={handlePostDelete} /> */}
                      <Link className="btn btn-danger" to={`/delete/${post.id}`}>Delete</Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">{error ? error : 'No posts available'}</td>
                  </tr>
                )
              )}
                    </tbody>
              </table>
                </div>
            </div>
        </Layout>
    )
}