import { Link } from "react-router-dom"
import Skeleton from "react-loading-skeleton";
import '../styles/skeleton/skeleton.css';
import '../styles/skeleton/skeletonTow.css';
export default function ContentTitle({content_title,create_content,to,loading}){
    return (
        <>
        {loading ?


<div className="content_menu d-flex justify-content-between px-4 mt-2">
  <h2 className="content_title ">
  <Skeleton className="skeleton" width={100} height={40}/>
  </h2>
  <Link  >
        <Skeleton className="skeleton " width={100} height={40}/>
  </Link>
</div>
 :
 <div className="content_menu d-flex justify-content-between px-4 mt-2">
            <h2 className="content_title ">
                {content_title}
            </h2>
            <Link className="btn btn-primary" to={to}>
                {create_content}
            </Link>
</div>
  
}
        </>
        
    )
}