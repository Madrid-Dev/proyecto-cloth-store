import React from 'react';
import './../../styles/product-card.css';
import { Link } from 'react-router-dom';
const ProductCard = ({ productId,productName, productPrice, productImage }) => {
    const imageUrl = `${process.env.PUBLIC_URL}/${productImage}`;
    return (
        <Link to={`/product/${Math.floor(productId)}`} >
            <div className='product-item product-item-grid' style={{ backgroundImage: `url(${(imageUrl)})` }}>
                <div className='product-item-info'>
                    <p>{productName}</p>
                    <p>${productPrice}</p>
                </div>
            </div>
        </Link>
    );
}
 
export default ProductCard;