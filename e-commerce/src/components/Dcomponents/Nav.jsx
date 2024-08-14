import clases from '../styles/Dstyle/Nav.module.css'
import Nav_menu from './Navmenu'
import Navlogo from './Navlogo'
import { useState } from 'react';
import { memo } from 'react';
 function NavM({handleMenuChange,menuOpen}){
  
    return (
        <nav className={!menuOpen ? clases.nav : clases.nav_false}>
            <Navlogo menuOpen={menuOpen} />
            <Nav_menu menuChange={handleMenuChange} menuOpen={menuOpen}/>

        </nav>
    )
}
export default memo(NavM)