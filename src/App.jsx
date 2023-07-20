import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = window.localStorage.getItem(
      "prefolo.github.shopping-cart.cart"
    );
    if (data !== null) setCart(JSON.parse(data));
  }, []);

  function storeProductIdInCartCountTimes(id, count) {
    const cartWithoutId = cart.filter((x) => x !== id);
    const newCart = [...new Array(count).fill(id), ...cartWithoutId];

    setCart(newCart);

    window.localStorage.setItem(
      "prefolo.github.shopping-cart.cart",
      JSON.stringify(newCart)
    );
  }

  function clearCart() {
    setCart([]);

    window.localStorage.setItem(
      "prefolo.github.shopping-cart.cart",
      JSON.stringify([])
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Home cart={cart} setCart={setCart} clearCart={clearCart} />}
      />
      <Route
        path="shop"
        element={
          <Shop
            cart={cart}
            setCart={setCart}
            clearCart={clearCart}
            storeProductIdInCartCountTimes={storeProductIdInCartCountTimes}
          />
        }
      />
    </Routes>
  );
}

export default App;
