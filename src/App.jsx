import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import './App.css'
import './Shop.css'
import Home from './components/Home';
import Shop from './Shop';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = window.localStorage.getItem('prefolo.github.shopping-cart.state');
    if ( data !== null ) setCart(JSON.parse(data));
  }, []);

  function cartChangeHandler(id,count){ 
    console.log({id,count})
    console.log("cart prima dell'inserimento", cart)

    const result = cart.filter(function(x) {
      return x !== id;
    });

    const arr = new Array(count).fill(id);

    console.log( result.length, count, [...arr, ...result].length )

    const newCart = [...arr, ...result]; 
    setCart(newCart);
    window.localStorage.setItem('prefolo.github.shopping-cart.state', JSON.stringify(newCart));
  }

  function cancelCartHandler( ){ 
    setCart([]);
    window.localStorage.setItem('prefolo.github.shopping-cart.state', JSON.stringify(cart));
  }

  return (

          <Routes>
            <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
            <Route path="shop" element={<Shop cart={cart} setCart={setCart} cancelCartHandler={cancelCartHandler} cartChangeHandler={cartChangeHandler}/>} />
          </Routes>
  )
}

export default App

