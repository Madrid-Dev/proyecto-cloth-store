import React, {useContext} from 'react';
import { useState } from 'react';
import './../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './../images/Elevated-logos.jpeg';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import CartComp from './elements/Cart';
import { CartContext } from './CartProvider';
const Header = () => {
    const [mobileMenu,setMobileMenu] = useState(false);
    const [visible, setVisible] = useState(false);
    const [cartMenu,setCartMenu] = useState(false);
    const {qty} = useContext(CartContext);

    const handlexmark = ()=>{
        if(mobileMenu){
            setMobileMenu(false);
            toggleVisibility();
        }
        if(cartMenu){
            setCartMenu(false);
            toggleVisibility();
        }
    }
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
        <animated.div style={fadeAnimation}>
            <div className={cartMenu ? 'cart-menu-display' : 'cart-menu-off'} id='cart-menu' >
                <CartComp></CartComp>
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
                {!visible ? <>
                            <FontAwesomeIcon className = "cart fa-xl" icon="fa-solid fa-cart-shopping" onClick={()=>{
                                setCartMenu(!cartMenu);
                                toggleVisibility();
                                }}></FontAwesomeIcon>
                            <FontAwesomeIcon className = "hamburger fa-xl" icon="fa-solid fa-bars " onClick={()=>{
                                setMobileMenu(!mobileMenu);
                                toggleVisibility();
                                }}></FontAwesomeIcon>
                            {qty > 0 ? <div className='cart-container-count show'>{qty}</div> : <div className='cart-container-count hide'></div>} 
                          </>
                          :
                          <FontAwesomeIcon className = "xmark" icon="fa-solid fa-xmark " onClick={()=>{handlexmark()}}></FontAwesomeIcon>
                    }
                
                
            </div>
           
        </div>  
       
    </div>
    
    
    );
}
 
export default Header;