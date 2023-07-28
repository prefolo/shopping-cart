import React, { useEffect, useContext } from "react";
import Product from "./Product";
import data from "../data/products.json";
import { CartContext } from "../contexts/CartContext";

const ProductList = ({
  checkedBrands,
  checkedCategories,
  brands,
  categories,
  productsSortOrder,
  checkedSort,
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
  let filteredProductsDataByBrand = [];
  let filteredProductsData = [];

  checkedBrands.forEach((b, i) => {
    if (b) {
      filteredProductsDataByBrand = [
        ...filteredProductsDataByBrand,
        ...productsData.filter((p) => p.brand == brands[i]),
      ];
    }
  });

  checkedCategories.forEach((c, i) => {
    if (c) {
      filteredProductsData = [
        ...filteredProductsData,
        ...filteredProductsDataByBrand.filter(
          (p) => p.category == categories[i]
        ),
      ];
    }
  });

  let x = checkedSort ? 1 : -1;

  filteredProductsData.sort((a, b) => {
    return a.title.toLowerCase() > b.title.toLowerCase() ? 1 * x : -1 * x;
  });

  if (productsSortOrder == "brand")
    filteredProductsData.sort((a, b) => {
      return a[productsSortOrder].toLowerCase() >
        b[productsSortOrder].toLowerCase()
        ? 1 * x
        : -1 * x;
    });

  if (productsSortOrder == "price")
    filteredProductsData.sort((a, b) => {
      return a[productsSortOrder] > b[productsSortOrder] ? 1 * x : -1 * x;
    });

  const listOfProductsComponenents = filteredProductsData.map((p) => (
    <Product key={p.id} productData={p} />
  ));

  return <div id="product-list-container">{listOfProductsComponenents}</div>;
};

export default ProductList;
