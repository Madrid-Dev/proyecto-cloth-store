import React from 'react';
import './../../styles/aboutus.css';
import recicleImage from './../../images/recycle.jpg';

const AboutUs = () => {
    return (
        <div className='aboutus-container'>
            <div className='aboutus'>
                <div className='aboutus-header'>
                    <h2>Elevate.</h2>
                </div>
                <div className='aboutus-paragraph'>
                    <p>
                        Elevate is not only a leading fashion company, but we are also committed friends of the environment.
                        <br />
                        <br />
                        We strive to maximize the reuse and repurposing of materials, minimizing waste generation. Through partnerships with local organizations and charities, we donate clothing that is still in good condition to those in need.
                        <br />
                        <br />
                        By choosing Elevate, you are not only making a fashion statement, but you are also making a positive impact on the environment. 
                        <br />
                        <br />
                        <img src={recicleImage} alt="" />
                    
                    </p>
                    <i>Together, let's elevate fashion while protecting our planet.</i>
                    
                </div>
                <button className='donate-button'>Help Us</button>
            </div>
        </div>
    );
}
 
export default AboutUs;