import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import FilterBox from "../components/FilterBox";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import "./Shop.css";

function Shop() {
  const [filterbrand, setFilterbrand] = useState("All");
  const [filtercategory, setFiltercategory] = useState("All");

  function onChangeBrand(e) {
    setFilterbrand(e.target.value);
  }

  function onChangeCategory(e) {
    setFiltercategory(e.target.value);
  }

  function onChangeBrands(e) {
    setFilterbrand(e.target.value);
  }

  function onChangeCategories(e) {
    setFiltercategory(e.target.value);
  }

  return (
    <>
      <Header>
        <div id="title">Shop</div>
        <FilterBar
          onChangeBrand={onChangeBrand}
          onChangeCategory={onChangeCategory}
        />
      </Header>
      <div id="content">
        <ProductList
          filterbrand={filterbrand}
          filtercategory={filtercategory}
        />
        <FilterBox
          onChangeBrands={onChangeBrands}
          onChangeCategories={onChangeCategories}
        />
      </div>
      <Footer />
    </>
  );
}

export default Shop;
