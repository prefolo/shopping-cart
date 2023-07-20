import React from "react";
import Product from "./Product";
import data from "../data/products.json";

const ProductList = ({
  cart,
  setCart,
  filterbrand,
  filtercategory,
  storeProductIdInCartCountTimes,
}) => {
  let productsData = [...data.products];

  productsData.sort((a, b) => {
    return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
  });

  const filteredByBrand_or_all =
    filterbrand != "All"
      ? productsData.filter((p) => p.brand == filterbrand)
      : [...productsData];

  const furtherFilteredByCategory =
    filtercategory != "All"
      ? filteredByBrand_or_all.filter((p) => p.category == filtercategory)
      : 0;

  const filteredProductsData = furtherFilteredByCategory
    ? [...furtherFilteredByCategory]
    : [...filteredByBrand_or_all];

  const listOfProductsComponenents = filteredProductsData.map((p) => (
    <Product
      key={p.id}
      productData={p}
      cart={cart}
      setCart={setCart}
      storeProductIdInCartCountTimes={storeProductIdInCartCountTimes}
    />
  ));

  return <div id="product-list-container">{listOfProductsComponenents}</div>;
};

export default ProductList;
