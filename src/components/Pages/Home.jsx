import React from 'react';
import './../../styles/home.css';
import thrasher from './../../images/clothes/thrasher.jpg';
import top from './../../images/clothes/top.jpg';
import orangeTShirt from './../../images/clothes/orange-t-shirt.jpg';
import lanaSweater from './../../images/clothes/lana-sweater.jpg';
import cottomSweater from './../../images/clothes/cottom-cyan-sweater.jpg';
import Footer from '../Footer';

const Home = () => {
    return (
        <div className = 'container'>
            <div className='h2-container'>
                <h2>Our favourites</h2>
            </div>
            
            <div className = 'grid-container'>
                <div className='grid-item grid-item-one'>
                    <p>Sweater</p>
                </div>
                
                <div className='grid-container-inside-desktop'>
                    <div className='grid-item grid-item-two'></div>
                    <div className='grid-item grid-item-three'></div>
                    <div className='grid-item grid-item-four'></div>
                    <div className='grid-item grid-item-five'></div>
                </div>
                
                <div className='grid-item grid-item-two'>
                    <p>King T-Shirt</p>
                </div>
                <div className='grid-item grid-item-three'>
                    <p>Orange T-Shirt</p>
                </div>
                <div className='grid-item grid-item-four'>
                    <p>Top</p>
                </div>

            </div>

            <div className='discount-container'>
                <div className='discount'>
                    <p>Here discounts</p>
                </div>
            </div>

            <div className='information-container'>
                <div className='information'>
                    <p>Here info about the company, and locations</p>
                </div>

            </div>
            

            <Footer></Footer>
        </div>
    );
}
 
export default Home;