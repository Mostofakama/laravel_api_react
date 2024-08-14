
import { Link } from 'react-router-dom'
import clases from '../styles/Dstyle/LeftSidber.module.css'
import HomeIcon from '@mui/icons-material/Home'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import SettingsIcon from '@mui/icons-material/Settings' 

import LogoutC from '../logoutcomponent'
import { memo } from 'react'
 function LeftSidber({menuOpen}){

    const menus = {

    }
    return (
        <div className={ !menuOpen ? clases.left_sidbar_menu : clases.left_sidbar_menu_false}>
            <ul>
                <li><Link to="/dashbord"><HomeIcon /><span style={{ display:!menuOpen ? 'inline': 'none'  }}>Home</span></Link></li>
                
                <li><Link to="/post"><NewspaperIcon /><span style={{ display:!menuOpen ? 'inline': 'none'  }}>Post</span></Link></li>
                <li><Link to="#"><SettingsIcon /><span style={{ display:!menuOpen ? 'inline': 'none'  }}>Settings</span></Link></li>
                <li><LogoutC /></li>
                
                
            </ul>
        </div>
    )
}
export default memo(LeftSidber)