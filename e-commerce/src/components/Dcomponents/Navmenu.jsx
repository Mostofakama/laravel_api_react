import person from '../../assets/img/img.jpg';
import clases from '../styles/Dstyle/Navm.module.css'

import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MailIcon from '@mui/icons-material/Mail'
import { Link } from 'react-router-dom';
import { memo } from 'react';
 function Nav_menu({menuChange,menuOpen}){
    
    return (
        <div className={!menuOpen ? clases.nav_menu: clases.nav_menu_false}>
            <div className={clases.left_menu}>
                <ul>
                    <li onClick={menuChange}><span><MenuIcon /></span></li>
                    <li><Link to="#"><SearchIcon /></Link></li>
                </ul>
            </div>
            <div className={clases.right_menu}>
                <ul>
                    <li><Link to="#"><NotificationsIcon /></Link></li>
                    <li><Link to="#"><MailIcon /></Link></li>
                    <li><div className={clases.user_img}><img src={person} alt="User Image"/></div></li>
                    <li><div className={clases.user_name}><p>Mostofa</p></div></li>
                </ul>
            </div>
        </div>
    )
}
export default memo(Nav_menu)