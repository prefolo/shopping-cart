import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  function navigateToHome() {
    navigate("/");
  }

  function navigateToShop() {
    navigate("shop");
  }

  return (
    <div>
      <Header></Header>
      <div id="content"></div>
      <Footer />
    </div>
  );
};

export default Home;
