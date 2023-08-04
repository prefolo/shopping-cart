import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { CartContext } from "./contexts/CartContext";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = window.localStorage.getItem(
      "prefolo.github.shopping-cart.cart"
    );
    if (data !== null) setCart(JSON.parse(data));
  }, []);

  function storeProductIdInCartNtimes(id, n) {
    const cartWithoutId = cart.filter((x) => x !== id);
    const cartWithIdNtimes = [...new Array(n).fill(id), ...cartWithoutId];

    setCart(cartWithIdNtimes);

    window.localStorage.setItem(
      "prefolo.github.shopping-cart.cart",
      JSON.stringify(cartWithIdNtimes)
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
    <CartContext.Provider
      value={{
        cart,
        clearCart,
        storeProductIdInCartNtimes,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
