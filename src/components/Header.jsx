import React, { useEffect } from "react";

const Header = ({ productsincart }) => {
  useEffect(() => {
    alert("a");
    const btn = document.getElementById("#cart-button");

    btn.style.color = "#aaa";
    btn.style.backgroundColor = "#fff";

    if (productsincart.length > 1) {
      btn.style.color = "#000";
      btn.style.backgroundColor = "#eee";
    }
  }, []);

  return (
    <>
      <div id="header">
        <p>Market Place</p>
        <div id="links-container">
          <p>
            <a href="\">Home</a>
          </p>
          <p>
            <a href="\shop">Shop</a>
          </p>
        </div>
        <button id="cart-button">
          <span className="material-symbols-outlined">shopping_cart</span>{" "}
          {productsincart.length}
        </button>
      </div>
    </>
  );
};

export default Header;
