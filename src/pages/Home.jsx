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
    <>
      <Header>
        <div id="title">Home</div>
      </Header>
      <Footer />
    </>
  );
};

export default Home;
