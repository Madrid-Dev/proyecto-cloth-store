import React from 'react'
import { useEffect, useState } from 'react'

const CartContext = React.createContext();

const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(()=>{
        const storedItems = localStorage.getItem('cart');
        if(storedItems){
            setCart(JSON.parse(storedItems));
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(total)
    }, [cart]);

    const addToCart = (item) =>{
        setCart([...cart,item]);
        totalCalc(item);
        console.log("añadido");
        
    }

    const removeFromCart = (item) =>{
        setCart(cart.filter((elem)=>elem.id !== item.id));
    }

    const totalCalc = (item) =>{
        setTotal(total + Math.floor(item.price));
    }
    return (  
        <CartContext.Provider value={{addToCart,removeFromCart,cart,total}}>
            {children}
        </CartContext.Provider>
    );
}
 
export {CartProvider, CartContext};