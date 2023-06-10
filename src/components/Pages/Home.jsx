import React from 'react';
import './../../styles/home.css';
import Footer from '../Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
/*Crear un json de cada ropa para la info*/
const Home = () => {
    return (
        <div className = 'container'>
            <div className='categories-container'>
                <div className='categories'>
                    <div className = 'grid-container'>
                        <div className='grid-item grid-item-one'>
                            <Link to='/categories/accesories'>
                                <div className='grid-item-blackout'></div>
                                    <p>Accesories.</p>
                            </Link>
                        </div>
                        
                        <div className='grid-container-inside-desktop'>
                            <div className='grid-item grid-item-two'></div>
                            <div className='grid-item grid-item-three'></div>
                            <div className='grid-item grid-item-four'></div>
                            <div className='grid-item grid-item-five'></div>
                        </div>
                        
                            <div className='grid-item grid-item-two'>
                                <Link to='/categories/seasonal'>
                                    <div className='grid-item-blackout'></div>
                                        <p>Seasonal.</p>
                                </Link>
                            </div>
                        
                        <div className='grid-item grid-item-three'>
                            <Link to='/categories/shoes'>
                                <div className='grid-item-blackout'></div>
                                    <p>Shoes.</p>
                            </Link>
                        </div>
                        <div className='grid-item grid-item-four'>
                            <Link to='/categories/all'>
                                <div className='grid-item-blackout'></div>
                                    <p>Store.</p>
                            </Link>
                        </div>

                        <div className='grid-item grid-item-five'>
                            <Link to='/categories/classic'>
                                <div className='grid-item-blackout'></div>
                                    <p>Classic.</p>
                            </Link>
                        </div>
                        <div className='grid-item grid-item-six'>
                            <Link to='/categories/other'>
                                <div className='grid-item-blackout'></div>
                                    <p>Unique.</p>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
            <div className='discount-container'>
                <div className='discount'>
                    <FontAwesomeIcon className='credit-card-icon' icon='fa-regular fa-credit-card'></FontAwesomeIcon>
                    <p>Shop online with your card and get a 10% discount</p>
                    <FontAwesomeIcon icon='fa-solid fa-exclamation'></FontAwesomeIcon>
                </div>
            </div>

            <div className='h2-container'>
                <h2>Our favourites</h2>
            </div>
            
            <div className = 'grid-container favourites'>
                <div className='grid-item grid-item-one'>
                    <Link to='/product/6'>
                        <div className='grid-item-info'>
                            <p>Sweater</p>
                            <p>$20.00</p>
                        </div>
                    </Link>
                </div>
                
                <div className='grid-container-inside-desktop'>
                    <div className='grid-item grid-item-two'></div>
                    <div className='grid-item grid-item-three'></div>
                    <div className='grid-item grid-item-four'></div>
                    <div className='grid-item grid-item-five'></div>
                </div>
                
                <div className='grid-item grid-item-two'>
                    <Link to='/product/1'>
                        <div className='grid-item-info'>
                                <p>King T-Shirt</p>
                                <p>$15.00</p>
                        </div>
                    </Link>
                </div>
                <div className='grid-item grid-item-three'>
                    <Link to='/product/2'>
                        <div className='grid-item-info'>
                                <p>Orange T-Shirt</p>
                                <p>$10.00</p>
                        </div>
                    </Link>
                </div>
                <div className='grid-item grid-item-four'>
                    <Link to='/product/4'>
                        <div className='grid-item-info'>
                                <p>Beige Top</p>
                                <p>$14.00</p>
                        </div>
                    </Link>
                </div>

            </div>

            

            <div className='information-container'>
                <div className='information'>
                    <FontAwesomeIcon icon='fa-solid fa-info'></FontAwesomeIcon>
                    <p>Elevate - your destination for modern clothing and accessories. We offer a unique perk that sets us apart. Not only do we provide stylish fashion, but we also recycle your unused clothing.
                         Elevate your style with the latest trends and high-quality pieces.</p>
                </div>

            </div>
        </div>
    );
}


 
export default Home;