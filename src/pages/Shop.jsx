import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import "./Shop.css";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import Footer from "../components/Footer";

function Shop({ cart, setCart, storeProductIdInCartCountTimes, clearCart }) {
  const [filterbrand, setFilterbrand] = useState("All");
  const [filtercategory, setFiltercategory] = useState("All");

  function onChangeBrand(e) {
    setFilterbrand(e.target.value);
  }

  function onChangeCategory(e) {
    setFiltercategory(e.target.value);
  }

  // Alla modifica di cart imposta i colori di background
  // dei box dei prodotti.
  // Grigio = non in cart. Verde = In cart.
  useEffect(() => {
    const productElements = Array.from(document.querySelectorAll(".product"));

    productElements.forEach((p) => (p.style.backgroundColor = "#f6f6f6"));

    [...new Set(cart)].forEach((uniqueIdOfCart) => {
      const productEl = productElements.filter(
        (p) => p.dataset.product_id == uniqueIdOfCart
      )[0];

      if (productEl) productEl.style.backgroundColor = "#9eff9e";
    });
  }, [cart]);

  return (
    <>
      <Header cart={cart} setCart={setCart} clearCart={clearCart}>
        <div id="title">Shop</div>
        <FilterBar
          onChangeBrand={onChangeBrand}
          onChangeCategory={onChangeCategory}
        />
      </Header>
      <div id="content">
        <ProductList
          cart={cart}
          setCart={setCart}
          filterbrand={filterbrand}
          filtercategory={filtercategory}
          storeProductIdInCartCountTimes={storeProductIdInCartCountTimes}
        />
      </div>
      <Footer />
    </>
  );
}

export default Shop;
