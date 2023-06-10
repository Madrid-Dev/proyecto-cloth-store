import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../../styles/cartItem.css';
import { CartContext } from '../CartProvider';

const CartItem = ({item,itemName,itemPrice,itemQty}) => {
    const {removeFromCart} = useContext(CartContext);
    const handleRemove = ()=>{
        removeFromCart(item)
    }
    return (
        <div className='cartitem-container'>
            <div className="cartitem">
                <div className="cartitem-description">
                    <p className='cartitem-name'>{itemName}</p>
                </div>
                <p className='cartitem-price'>${itemPrice.toFixed(2)}</p>
                <p className='cartitem-qty'>{itemQty}</p>
                <FontAwesomeIcon icon='fa-trash' onClick={handleRemove}>
                </FontAwesomeIcon>
            </div>

        </div>
    );
}
 
export default CartItem;
