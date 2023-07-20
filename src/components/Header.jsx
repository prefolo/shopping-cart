import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Popover, ArrowContainer } from "react-tiny-popover";
import data from "../data/products.json";
import formattedPrice from "../utils/PriceFormatter";

const Header = ({ cart, setCart, cancelCartHandler, children }) => {
  const navigate = useNavigate();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const countOfIdsInCart = cart.reduce((obj, id) => {
    obj[id] = (obj[id] || 0) + 1;
    return obj;
  }, {});

  let productsInCart = [...new Set(cart)].reduce((accArray, uniqueId) => {
    let product =
      accArray.filter((p) => p.id == uniqueId)[0] ||
      data.products.filter((p) => p.id == uniqueId)[0];

    product.countInCart = countOfIdsInCart[product.id];

    return [product, ...accArray];
  }, []);

  productsInCart.sort((a, b) => {
    return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
  });

  const purchasesVoices = productsInCart.map((p) => (
    <div key={p.id} className="cartVoiceItem">
      <div>
        <span>{p.title}</span>
        <span class="purchaseTimes"> x {p.countInCart}</span>
      </div>
      <div>{formattedPrice(p.priceInt * p.countInCart)} €</div>
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

  function toggleCartButtonStyle(cart) {
    const btn = document.getElementById("cart-button");

    btn.classList.remove("fullCart");
    btn.classList.remove("emptyCart");

    if (cart.length > 0) btn.classList.add("fullCart");
    else btn.classList.add("emptyCart");
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
                  <div id="tot">Importo Totale : {formattedPrice(tot)} €</div>
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
        <div id="current-page-section">{children}</div>
      </div>
    </>
  );
};

export default Header;
