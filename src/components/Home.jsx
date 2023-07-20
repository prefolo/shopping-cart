import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Home = ({ cart, setCart, cancelCartHandler }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const data = window.localStorage.getItem(
      "prefolo.github.shopping-cart.state"
    );
    if (data !== null) setCart(JSON.parse(data));
  }, []);

  function navigateToHome() {
    navigate("/");
  }

  function navigateToShop() {
    navigate("shop");
  }

  return (
    <>
      <Header
        cart={cart}
        setCart={setCart}
        cancelCartHandler={cancelCartHandler}
      >
        <div id="title">Home</div>
      </Header>
      <div id="footer">Copyright © 2023 prefolo</div>
    </>
  );
};

export default Home;
