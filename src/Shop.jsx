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

  const euroFormatter = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  });

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

  let prds = [...productsInCart];
  prds.sort((a, b) => {
    return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
  });

  const purchasesVoices = prds.map((p) => (
    <div key={p.id} className="cartVoiceItem">
      <div>
        <span>{p.countInCart}</span>
        &nbsp;x&nbsp;
        <span>{p.title}</span>
      </div>
      <div>
        {parseFloat(euroFormatter.format(p.priceInt * p.countInCart))} €
      </div>
    </div>
  ));

  const tot = productsInCart.reduce((acc, product) => {
    return acc + product.priceInt * product.countInCart;
  }, 0);

  useEffect(() => {
    const data = window.localStorage.getItem(
      "prefolo.github.shopping-cart.state"
    );
    if (data !== null) setCart(JSON.parse(data));
  }, []);

  useEffect(() => {
    toggleCartButtonStyle(cart);
  }, [cart]);

  function onChangeBrand(e) {
    setFilterbrand(e.target.value);
  }

  function toggleCartButtonStyle(cart) {
    const btn = document.getElementById("cart-button");

    btn.classList.remove("fullCart");
    btn.classList.remove("emptyCart");

    if (cart.length > 0) btn.classList.add("fullCart");
    else btn.classList.add("emptyCart");
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

  function clearOrder() {
    cancelCartHandler();
    setIsPopoverOpen(0);
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
                arrowColor={"#474d5a"}
                arrowSize={8}
              >
                <div id="popover-container">
                  <p>Il tuo ordine</p>
                  <div id="purchases-box">{purchasesVoices}</div>
                  <div id="tot">
                    Importo Totale : {parseFloat(euroFormatter.format(tot))} €
                  </div>
                  <button id="clear-purchase-order" onClick={clearOrder}>
                    Cancella Ordine
                  </button>
                  <button id="buy-purchase-order">Acquista</button>
                </div>
              </ArrowContainer>
            )}
          >
            <button
              id="cart-button"
              onClick={() => {
                if (cart.length > 0) setIsPopoverOpen(!isPopoverOpen);
              }}
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
