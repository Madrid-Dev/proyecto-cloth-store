import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './../styles/productid.css';
import SliderC from './elements/SliderProducts';
import Footer from './Footer';

const ProductID = () => {
    const {id} = useParams();
    const idNumber = Math.floor(id);
    const [products,setProducts] = useState([]);
    const [actualProduct, setActual] = useState([]);
    useEffect(() => {
        /* Fetching */
        fetch(process.env.PUBLIC_URL + '/data/products.json')
          .then(response => response.json())
          .then(data => {
            setProducts(data.products);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
          findProductById();
          
      },[]);

      useEffect(() => {
        findProductById();
        
      }, [products]);

      const findProductById = () =>{
        const foundProduct = products.find(element => element.id === idNumber);
        if (foundProduct) {
          setActual(foundProduct);
        }
      }
    return (
        <div className='wraper'>
            <div className='product-container'>
                <div className='product-header'>
                    <h2>{actualProduct.name}</h2>
                    <img src={`${process.env.PUBLIC_URL}/${actualProduct.image}`} alt="" />            
                </div>

                <div className='product-description'>
                    <p>{actualProduct.description}</p>
                    <div className='product-price'>
                        <p>Quantity</p>
                        <div className='quantity'>
                            <div className='less'>-</div>
                            <div className='quantity-value'>0</div>
                            <div className='plus'>+</div>
                        </div>
                        <div className='price'>
                            <p>${actualProduct.price}</p>
                        </div>

                        <div className='product-buttons'>
                            <div className='button buy-button'>BUY NOW</div>
                            <div className='button add-cart-button'>ADD TO CART</div>
                        </div>
                    </div>
                </div>
                <p className='checkout'>Check out these</p>
                <SliderC products={products}/>
                
            </div>
        </div>
        

    );
}
 
export default ProductID;