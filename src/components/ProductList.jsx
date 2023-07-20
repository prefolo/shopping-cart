import React, { useEffect } from "react";
import Product from "./Product";
import data from "../data/products.json";

const ProductList = ({
  cart,
  setCart,
  filterbrand,
  filtercategory,
  storeProductIdInCartCountTimes,
}) => {
  // Alla modifica di cart imposta i colori di background
  // dei box dei prodotti.
  // Grigio = non in cart. Verde = In cart.
  useEffect(() => {
    const productElements = Array.from(document.querySelectorAll(".product"));

    productElements.forEach((p) => p.classList.remove("selected"));

    [...new Set(cart)].forEach((uniqueIdOfCart) => {
      const productEl = productElements.filter(
        (p) => p.dataset.product_id == uniqueIdOfCart
      )[0];

      if (productEl) productEl.classList.add("selected");
    });
  }, [cart]);

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
