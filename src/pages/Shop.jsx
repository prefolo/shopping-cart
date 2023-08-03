import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import data from "../data/products.json";
import FilterBox from "../components/FilterBox";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import "./Shop.css";

function Shop() {
  const brands = [...new Set(data.products.map((p) => p.brand))].sort(
    (a, b) => {
      return a < b ? -1 : 1;
    }
  );

  const categories = [...new Set(data.products.map((p) => p.category))].sort(
    (a, b) => {
      return a < b ? -1 : 1;
    }
  );

  const [checkedBrands, setCheckedBrands] = useState(
    new Array(brands.length).fill(true)
  );

  const [checkedCategories, setCheckedCategories] = useState(
    new Array(categories.length).fill(true)
  );

  const [productsSortOrder, setProductsSortOrder] = useState("title");

  const [checkedSort, setCheckedSort] = useState(true);

  function onChangeBrands(e) {
    setCheckedBrands(e.target.value);
  }

  function onChangeCategories(e) {
    setCheckedCategories(e.target.value);
  }

  return (
    <>
      <Header />
      <div id="content">
        <ProductList
          checkedBrands={checkedBrands}
          checkedCategories={checkedCategories}
          brands={brands}
          categories={categories}
          productsSortOrder={productsSortOrder}
          checkedSort={checkedSort}
        />
        <FilterBox
          productsSortOrder={productsSortOrder}
          setProductsSortOrder={setProductsSortOrder}
          checkedBrands={checkedBrands}
          checkedCategories={checkedCategories}
          setCheckedBrands={setCheckedBrands}
          setCheckedCategories={setCheckedCategories}
          brands={brands}
          categories={categories}
          checkedSort={checkedSort}
          setCheckedSort={setCheckedSort}
        />
      </div>
      <Footer />
    </>
  );
}

export default Shop;
