import React from 'react';
import './../../styles/product-card.css';

const ProductCard = ({ productName, productPrice, productImage }) => {
    const imageUrl = `${process.env.PUBLIC_URL}/${productImage}`;
    return (
        <div className='product-item product-item-grid' style={{ backgroundImage: `url(${(imageUrl)})` }}>
            <div className='product-item-info'>
                <p>{productName}</p>
                <p>${productPrice}</p>
            </div>
        </div>
    );
}
 
export default ProductCard;