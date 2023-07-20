import React, { useState } from "react";
import ProductList from "./components/ProductList";
import "./Shop.css";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";

function Shop({ cart, setCart, setItemIDsInCartHandler, cancelCartHandler }) {
  const [filterbrand, setFilterbrand] = useState("All");
  const [filtercategory, setFiltercategory] = useState("All");

  function onChangeBrand(e) {
    setFilterbrand(e.target.value);
  }

  function onChangeCategory(e) {
    setFiltercategory(e.target.value);
  }

  return (
    <>
      <Header
        cart={cart}
        setCart={setCart}
        cancelCartHandler={cancelCartHandler}
      >
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
          setItemIDsInCartHandler={setItemIDsInCartHandler}
        />
      </div>
      <div id="footer">Copyright © 2023 prefolo</div>
    </>
  );
}

export default Shop;
