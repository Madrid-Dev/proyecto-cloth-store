import React, { useEffect } from 'react';
import { useState } from 'react';
import './../../styles/sliderProduct.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SliderC = ({products}) => {
    const length = products.length;
    const [sliderProd, setSliderProd] = useState([]);

    const randomNumbers = () =>{
        return Math.floor(Math.random() * (length -1)) + 1;
    }

    const ids = [randomNumbers(),randomNumbers(),randomNumbers(),randomNumbers(),randomNumbers()];

    const findProductsInSlider = () => {
        const productsInSlider = products.filter(product => ids.includes(product.id));
        setSliderProd(productsInSlider);
      }


    useEffect(()=>{
        findProductsInSlider();
    },[products])


    return (
        <div className='wraper-slider'>
            <div className='slider-container'>
                <Carousel showThumbs = {false}>
                    {sliderProd.map((product)=>{
                        return (
                            <div key={product.id} className='slider-product' style={{backgroundImage:`url(${process.env.PUBLIC_URL}/${product.image}`}} draggable = "false" >
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    );
}
 
export default SliderC;