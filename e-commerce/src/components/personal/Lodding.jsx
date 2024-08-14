import SyncIcon from '@mui/icons-material/Sync'
// import clases from '../styles/Lodding.module.css'

export default function Lodding(){
    return (
       <span className='btn btn-primary w-100'>
          <button className="spinner-grow text-white bg-primary mx-2 w-0 " role="status">
            <span className="visually-hidden bg-primary"></span>
          </button>
          <span>Loading... </span>
       </span>
   
    )
}