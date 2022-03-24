import React, { useCallback, useEffect } from 'react';
import "./ShoppingCart.css";

const ShoppingCart = ({ shoppingCart, setShoppingCart }) => {


    const clearShoppingCart = () => {
        console.log("clear shopping card cliecked")
        setShoppingCart([]);
    }

    console.log("shopping card render")

    return (
        <div className='shopping-cart-component'>
            <h1>Shopping Card</h1>
            <button
                className='empty-card-button'
                onClick={clearShoppingCart}
                disabled={shoppingCart.length === 0 && true}
            >
                Empty to Shopping Card
            </button>
            {shoppingCart.length !== 0
                ? shoppingCart.map(item =>
                    <div key={item.id}>
                        <p> {item.name}</p>
                        <p>{item.count}</p>
                    </div>
                )
                : <div>
                    There are no items in your cart
                </div>}            
        </div>
    );
};

export default ShoppingCart;