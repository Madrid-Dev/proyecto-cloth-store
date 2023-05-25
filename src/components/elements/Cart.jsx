import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartContext } from '../CartProvider';

const CartComp = () => {
    const [mobileActive, setMobileActive] = useState(false);
    const {cart} = useContext(CartContext);

    return (
        <div className='cart-container'>
            <div className='cart'>
                <div className='cart-content'>
                    <ul>
                    {cart.map((item)=>{
                            return (<li>{item.name}</li>);
                    })}
                    </ul>
                    
                </div>
            </div>

        </div>
    );
}
 
export default CartComp;