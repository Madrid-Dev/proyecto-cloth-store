import React from 'react';
import { useState } from 'react';
import './../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './../images/Elevated-logos.jpeg';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

const Header = () => {
    const [mobileMenu,setMobileMenu] = useState(false);
    const [visible, setVisible] = useState(false);
  
    const fadeAnimation = useSpring({
      opacity: visible ? 1 : 0,
      config: {
        duration: 300 // Duración de la animación en milisegundos (0.5 segundos)
      }
    });
  
    const toggleVisibility = () => {
      setVisible(!visible);
    };
    return (
    <div className='navbar'>
        <animated.div style={fadeAnimation}>
        <div className={mobileMenu ? 'mobile-menu-display' : 'mobile-menu-off'} id='mobile-menu' >
            <div className='container-options-mbl'>
                <ul>
                    <li><Link to= "/" onClick={()=>{setMobileMenu(!mobileMenu);toggleVisibility();}}>Home</Link></li>
                    <li><Link to="/categories/all" onClick={()=>{setMobileMenu(!mobileMenu);toggleVisibility();}}>Products</Link></li>
                    <li><Link to="/about-us" onClick={()=>{setMobileMenu(!mobileMenu);toggleVisibility();}}>About us</Link></li>
                    <li><Link to="contact-us" onClick={()=>{setMobileMenu(!mobileMenu);toggleVisibility();}}>Contact us</Link></li>
                </ul>
            </div>
        </div>
        </animated.div>
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
                <FontAwesomeIcon className = "hamburger fa-xl" icon="fa-solid fa-bars " onClick={()=>{
                    setMobileMenu(!mobileMenu);
                    toggleVisibility();
                    }}></FontAwesomeIcon>
            </div>
           
        </div>  
       
    </div>
    
    
    );
}
 
export default Header;