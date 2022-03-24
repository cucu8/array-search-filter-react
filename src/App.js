import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css";
import { Cart, ShoppingCart } from './components';
import { Row, Col } from 'react-bootstrap';


const App = () => {
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([])


  //! sayfa her render edildiğinde fonksiyonun memorydeki yer değiştiği icin, tekrar yazılır.
  //* aslında bir fonksiyonu useCallback ile sarmalarsak,  sadece 1 kere oluşturulur. dependency arrayine verdiğimiz değişken ile tekrardan yazılmasını sağlayabiliriz.
  const fetchProducts = () => {
    axios.get("https://6238bcf800ed1dbc5ab6d6a7.mockapi.io/products")
      .then(response => setProducts(response.data))
      .catch(err => console.log(err.message))
    console.log("fetch products")
  };

  
  console.log("app js render")
  
  //* useEffectin return ifadesinde ekrandan cıkarken ne yapılmasını istersek onu yazmalıyız.
  useEffect(() => {
    console.log("fetch data uae effect");
    fetchProducts();
    return () => {
      console.log("useEffect fetch bitti")
    }
  }, [])

  return (
    <div className='App'>
      <h1>Products</h1>
      <Row>
        {
          products.length !== 0
            ? products.map(
              product =>
              <Col xs={12} lg={4} key={product.id}>
                <Cart
                  product={product}
                  setShoppingCart={setShoppingCart}
                  shoppingCart={shoppingCart}
                />
                </Col>
            )
            : <h1>Loading...</h1>
        }
      </Row>
      <ShoppingCart
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
      />
    </div>
  );
};

export default App;