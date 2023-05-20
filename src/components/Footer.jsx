import React from 'react';
import './../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <div className='footer-paragraph location'>
                    <FontAwesomeIcon icon='fa-solid fa-location-pin'></FontAwesomeIcon>
                    <p>Find us at: random-location 9999</p>
                </div>
                <div className='footer-paragraph recycling'>
                    <FontAwesomeIcon icon='fa-solid fa-recycle'></FontAwesomeIcon>
                    <p>Where style meets sustainability.</p>
                </div>
                <div className='footer-paragraph telephone'>
                    <FontAwesomeIcon icon='fa-solid fa-mobile'></FontAwesomeIcon>
                    <p>Contact us: +999 999 999 999 99</p>
                </div>
                <div className='footer-paragraph copyright'>
                    <FontAwesomeIcon icon='fa-solid fa-copyright'></FontAwesomeIcon>
                    <p>2023 Elevate. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;