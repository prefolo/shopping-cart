import React, { useState, useContext } from 'react'
import './Shop.css'
import ProductList from "./components/ProductList";
import { useNavigate } from 'react-router-dom';



function Shop({cart, cartChangeHandler, cancelCartHandler}) {
  const [filterbrand, setFilterbrand] = useState("All")
  const [filtercategory, setFiltercategory] = useState("All")
  const navigate = useNavigate()

  function onChangeBrand(e) {
    setFilterbrand(e.target.value)
  }

  function onChangeCategory(e) {
    setFiltercategory(e.target.value)
  }

  function navigateToHome() {
    navigate('/')
  }

  function navigateToShop() {
    navigate('/shop')
  }

  return (
    <>
    <div id="sticky-top-bar">
      <div id="header">
          <p>Market Place</p>
          <div id="links-container">
            <p><a href="#" onClick={navigateToHome}>Home</a></p>
            <p><a href="#" onClick={navigateToShop}>Shop</a></p>
          </div>
          <button id="cart-button"><span className="material-symbols-outlined">shopping_cart</span> { cart.length }</button>
        </div>
        <div id="current-page-section">
          <div id="title">Shop</div>

        </div>
      </div>
      <div id="content">
          <button onClick={cancelCartHandler}>Cancel Cart</button>
          <ProductList filterbrand={filterbrand} filtercategory={filtercategory} cartChangeHandler={cartChangeHandler}/>
        </div>
      <div id="footer">Copyright © 2023 prefolo</div>
    </>
  )
}

export default Shop
