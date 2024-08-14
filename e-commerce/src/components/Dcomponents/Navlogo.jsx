import Logo from '../../assets/img/makerdaicoin.png'
import Logonoe from '../../assets/img/bg.png'
import clases from '../styles/Dstyle/Navlogo.module.css'
import { memo } from 'react';
 function Navlogo({menuOpen}){
    
return (
    <div className={!menuOpen ? clases.nav_logo : clases.nav_logo_false}>
    <div className={!menuOpen ? clases.logo : clases.logo.false }>
    
        <img className={!menuOpen ? clases.img : clases.img_false}  src={!menuOpen?Logo:Logonoe}  alt=""/>
    </div>
</div>
)
}

export default memo(Navlogo)