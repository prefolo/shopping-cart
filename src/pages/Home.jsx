import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header isHome={true}></Header>
      <div id="content" className="home-content">
        <img id="home-img" src="/src/images/home.jpg" alt="Your Shop Online" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
