import React, { useEffect, useContext } from "react";
import Product from "./Product";
import data from "../data/products.json";
import { CartContext } from "../contexts/CartContext";

const ProductList = ({
  checkedBrands,
  checkedCategories,
  brands,
  categories,
}) => {
  const { cart } = useContext(CartContext);

  // Alla modifica di cart imposta la classe .selected sui box dei prodotti.
  // Se cart è vuoto imposta il valore dell'<input> a 0
  useEffect(() => {
    const productElements = Array.from(document.querySelectorAll(".product"));

    productElements.forEach((p) => {
      p.classList.remove("selected");
      if (cart.length == 0) p.querySelectorAll("input")[0].value = 0;
    });

    [...new Set(cart)].forEach((uniqueIdOfCart) => {
      const productEl = productElements.filter(
        (p) => p.dataset.product_id == uniqueIdOfCart
      )[0];

      if (productEl) productEl.classList.add("selected");
    });
  }, [cart]);

  let productsData = [...data.products];
  let brandFilteredProductsData = [];
  let filteredProductsData = [];

  checkedBrands.forEach((b, i) => {
    if (b) {
      brandFilteredProductsData = [
        ...brandFilteredProductsData,
        ...productsData.filter((p) => p.brand == brands[i]),
      ];
    }
  });

  checkedCategories.forEach((c, i) => {
    if (c) {
      filteredProductsData = [
        ...filteredProductsData,
        ...brandFilteredProductsData.filter((p) => p.category == categories[i]),
      ];
    }
  });

  filteredProductsData.sort((a, b) => {
    return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
  });

  const listOfProductsComponenents = filteredProductsData.map((p) => (
    <Product key={p.id} productData={p} />
  ));

  return <div id="product-list-container">{listOfProductsComponenents}</div>;
};

export default ProductList;
