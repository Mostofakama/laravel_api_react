import clases from '../styles/Dstyle/Sidber.module.css'
import NavM from './Nav'
import LeftSidber from './Leftsidbar'
import { useState } from 'react'
import { memo } from 'react'
 function Layout({children}){
    const [menuChang,setmenuChang] = useState(false)
    const handelMenu = () => {
            setmenuChang(!menuChang)
    }
    return (
      
        <>
        <NavM handleMenuChange={handelMenu} menuOpen={menuChang} />
        <div className={clases.sidbar}>
            <LeftSidber menuOpen={menuChang} />
             <div className={!menuChang ? clases.right_sidbar_menu :clases.right_sidbar_menu_false}>
                <div className={clases.content}>
                    {children}
                </div>
            </div>
             
        </div>
        </>
    )
}
export default Layout;