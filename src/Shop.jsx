import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Popover, ArrowContainer } from "react-tiny-popover";
import FilterBar from "./components/FilterBar";
import ProductList from "./components/ProductList";
import data from "./data/products.json";
import "./Shop.css";

function Shop({ cart, setCart, setItemIDsInCartHandler, cancelCartHandler }) {
  const [filterbrand, setFilterbrand] = useState("All");
  const [filtercategory, setFiltercategory] = useState("All");

  const navigate = useNavigate();

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const countOfIdsInCart = cart.reduce((obj, id) => {
    obj[id] = (obj[id] || 0) + 1;
    return obj;
  }, {});

  const productsInCart = [...new Set(cart)].reduce((accArray, uniqueId) => {
    let product =
      accArray.filter((p) => p.id == uniqueId)[0] ||
      data.products.filter((p) => p.id == uniqueId)[0];

    product.countInCart = countOfIdsInCart[product.id];

    return [product, ...accArray];
  }, []);

  let popoverContent = productsInCart.map((p) => (
    <li key={p.id}>
      {p.title} : {p.countInCart}
    </li>
  ));

  useEffect(() => {
    const data = window.localStorage.getItem(
      "prefolo.github.shopping-cart.state"
    );
    if (data !== null) setCart(JSON.parse(data));

    //setTimeout(() => setCartButtonColor(cart), 2000);
  }, []);

  useEffect(() => {
    setCartButtonColor(cart);
  }, [cart]);

  function onChangeBrand(e) {
    setFilterbrand(e.target.value);
  }

  function setCartButtonColor(cart) {
    const btn = document.getElementById("cart-button");

    btn.style.color = "#aaa";
    btn.style.backgroundColor = "#fff";

    if (cart.length > 0) {
      btn.style.color = "#6c6c6c";
      btn.style.backgroundColor = "#eee";
    }
  }

  function onChangeCategory(e) {
    setFiltercategory(e.target.value);
  }

  function navigateToHome() {
    navigate("/");
  }

  function navigateToShop() {
    navigate("/shop");
  }

  return (
    <>
      <div id="sticky-top-bar">
        <div id="header">
          <p>Market Place</p>
          <div id="links-container">
            <p>
              <a href="#" onClick={navigateToHome}>
                Home
              </a>
            </p>
            <p>
              <a href="#" onClick={navigateToShop}>
                Shop
              </a>
            </p>
          </div>

          <Popover
            isOpen={isPopoverOpen}
            positions={["bottom", "center"]}
            padding={0}
            reposition={true}
            onClickOutside={() => setIsPopoverOpen(false)}
            content={({ position, childRect, popoverRect }) => (
              <ArrowContainer
                position={position}
                childRect={childRect}
                popoverRect={popoverRect}
                arrowColor={"#9494ac"}
                arrowSize={8}
              >
                <div
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#9494ac",
                    padding: "10px",
                    boxShadow: "0px 6px 6px 0px rgba(0,0,0,0.5)",
                  }}
                >
                  <u>{popoverContent}</u>
                  <button>Cancella Ordine</button>
                  <button>Acquista</button>
                </div>
              </ArrowContainer>
            )}
          >
            <button
              id="cart-button"
              onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            >
              <span className="material-symbols-outlined">shopping_cart</span>{" "}
              {cart.length}
            </button>
          </Popover>
        </div>
        <div id="current-page-section">
          <div id="title">Shop</div>
          <FilterBar
            onChangeBrand={onChangeBrand}
            onChangeCategory={onChangeCategory}
          />
        </div>
      </div>
      <div id="content">
        <button onClick={cancelCartHandler}>Cancel Cart</button>
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
