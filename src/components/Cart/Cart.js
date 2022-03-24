import React, { useCallback, useEffect, useState } from 'react';
import "./Cart.css";

const Cart = React.memo(({ product, setShoppingCart, shoppingCart }) => {

//* eger burada bu componetti React.memo ile sarmalarsak, prop olarak verdiğimiz değişkenler değişince render edilir. 
    //!bu fonksiyon hep aynı olacagından sayfa render edildiginde tekrar yazılmaması icin useCallBack ile react  fonksiyonu hatırlatıyoruz. dependency arraye değişkeni tanımlarsak,  ancak ondan sonra tekrardan yazılır.

    const addItem = useCallback(() => {
        console.log("Add ıtem rendered");
        setShoppingCart(
            shoppingCart.find(item => item.id === product.id)
                ? shoppingCart.map(
                    item => item.id === product.id
                        ? { ...item, count: item.count + 1 }
                        : item
                )
                : [...shoppingCart, { ...product, count: 1 }]
        )
    }, [shoppingCart]);

    console.log("card js render")

    return (
        <div className='cart-component'>
            <div className='product-name'>{product.name}</div>
            <div className='product-price'>{product.Price}</div>
            <button
                className='add-button'
                onClick={addItem}
            >
                Add to cart
            </button>
        </div>
    );
});

export default Cart;