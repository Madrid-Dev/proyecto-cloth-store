import React from 'react';
import './../../styles/contactus.css';

const ContactUs = () => {
    return (
        <div className='contactus-container'>
            <div className='contactus'>
                <div className='contactus-header'>
                    <h2>Get in touch.</h2>
                </div>
                <div className='contactus-paragraph'>
                    <p>
                        Get in touch! If you have any doubt, question or suggestion we will receive it.
                        <br />
                        <br />
                        We always want to be better so don't think it twice, tell us what we're doing wrong.
                        <br />
                        <br />
                        Of course if you have any idea of how to make our page better, you're invited to do it so.
                        <br />
                        <br />
                    
                    </p>
                    <i>Together, let's elevate fashion while protecting our planet.</i>
                    
                </div>
                <button className='donate-button'>Contact us</button>
            </div>
        </div>
    );
}
 
export default ContactUs;