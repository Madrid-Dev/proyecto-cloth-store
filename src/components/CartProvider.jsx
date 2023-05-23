import React from 'react'
import { createContext, useEffect, useState } from 'react'

const CartContext = createContext( );

const CartProvider = () => {
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        const storedItems = localStorage.getItem('cart');
        if(storedItems){
            setCart(JSON.parse(storedItems));
        }
    },[])

    return (  );
}
 
export default CartProvider;