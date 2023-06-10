import React from 'react'
import { useEffect, useState } from 'react'
import { update } from 'react-spring';

const CartContext = React.createContext();

const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [qty, setQty] = useState(0);
    useEffect(()=>{
        const storedItems = localStorage.getItem('cart');
        const cartTotalPrice = localStorage.getItem('cartTotal');
        const cartQty = localStorage.getItem('cartQty');
        if(storedItems){
            setCart(JSON.parse(storedItems));
        }
        if(cartTotalPrice){
            setTotal(JSON.parse(cartTotalPrice));
        }
        if(cartQty){
            setQty(JSON.parse(cartQty));
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('cartTotal',JSON.stringify(total));
        localStorage.setItem('cartQty',JSON.stringify(qty));
    }, [cart]);

    const addToCart = (item,quant) =>{
        const itemInList = cart.find(elem => elem.item.id === item.id);
        if(itemInList){
            const updatedCart = cart.map(elem =>{
                if(elem.item.id === item.id ){
                    return{
                        ...elem,
                        quantity: elem.quantity + quant,
                        totalPrice: elem.totalPrice + item.price
                    };
                }
                return elem;
            });
            setQty(qty + quant);
            setCart(updatedCart);
        }else{
            setCart([...cart,{item: item, quantity: 1, totalPrice: item.price}]);
            setQty(qty + quant);
        }
        
        totalCalc(item.price);
        
    }

    const removeFromCart = (item) =>{
        const itemInList = cart.find(elem => elem.item.id === item.id);
        if(itemInList){
            if(itemInList.quantity > 1){
                const updatedCart = cart.map(elem =>{
                    if(elem.item.id === item.id){
                        return{
                            ...elem,
                            quantity: elem.quantity - 1,
                            totalPrice: elem.totalPrice - item.price
                        };
                    }
                    return elem;
                });
                setQty(qty - 1);
                setCart(updatedCart);
            }else{
                setQty(qty - 1);
                setCart(cart.filter(elem=>elem.item.id !== item.id));
            }
            totalCalc(-item.price);
        }   
    }

    const totalCalc = (item) =>{
        setTotal(total + item);
    }
    return (  
        <CartContext.Provider value={{addToCart,removeFromCart,cart,total,qty}}>
            {children}
        </CartContext.Provider>
    );
}
 
export {CartProvider, CartContext};