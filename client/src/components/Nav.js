import React, {useState} from 'react';
import Login from './Login';
import './Nav.css';
import {Link, withRouter} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SideBarData} from './SideBarData';
import {IconContext} from 'react-icons';


function Nav() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    
return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <div  className='navbar'>
            <Link to='#' className='menu-bar' >
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar} >
                <li className='nav-toggle'>
                    <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SideBarData.map((item, index)=>{
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
                
            </ul>
        </nav>
     </IconContext.Provider>           
    </>
  );
}

export default Nav;