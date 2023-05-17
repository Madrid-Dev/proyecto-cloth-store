import React from 'react';
import { useState } from 'react';
import './../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './../images/Elevated-logos.jpeg';

const Header = () => {
    const [mobileMenu,setMobileMenu] = useState(false);



    return (
    <div className='navbar'>
        <div className={mobileMenu ? 'mobile-menu-display' : 'mobile-menu-off'} >
            <div className='container-options-mbl'>
                <ul>
                    <li>Home</li>
                    <li>Categories</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
        <div className='container'>
            <div className='logo-img'></div>

            <div className='container-options-dsk'>
                <ul>
                    <li>Home</li>
                    <li>Categories</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className='container-icons'>
                <FontAwesomeIcon className = "cart fa-xl" icon="fa-solid fa-cart-shopping "></FontAwesomeIcon>
                <FontAwesomeIcon className = "hamburger fa-xl" icon="fa-solid fa-bars " onClick={()=>setMobileMenu(!mobileMenu)}></FontAwesomeIcon>
            </div>
           
        </div>  
       
    </div>
    
    
    );
}
 
export default Header;