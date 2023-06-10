import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartContext } from '../CartProvider';
import CartItem from './CartItem';
import './../../styles/cart.css';

const CartComp = () => {
    const [mobileActive, setMobileActive] = useState(false);
    const {cart} = useContext(CartContext);
    const {total} = useContext(CartContext);

    return (
        <div className='cart-container'>
            <div className='cart-nt'>
                <div className='cart-content'>
                    <ul>
                    {cart.map((elem)=>{
                            return (<CartItem key={(Math.random() * (100 -1)) + 1} item={elem.item} itemName={elem.item.name} itemPrice={elem.totalPrice} itemQty={elem.quantity} ></CartItem>);
                    })}
                    </ul>
                    
                </div>
            </div>
            <div className='cart-total'>
                <p><strong>TOTAL ${total.toFixed(2)} </strong> </p>
            </div>

        </div>
    );
}
 
export default CartComp;