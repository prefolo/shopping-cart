import React, { useState, useEffect } from 'react'
import './Shop.css'
import FilterBar from "./components/FilterBar";
import ProductList from "./components/ProductList";
import { useNavigate } from 'react-router-dom';
import { Popover } from 'react-tiny-popover'



function Shop({cart, setCart, setItemIDsInCartHandler, cancelCartHandler}) {
  const [filterbrand, setFilterbrand] = useState("All")
  const [filtercategory, setFiltercategory] = useState("All")
  
  const navigate = useNavigate()

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    const data = window.localStorage.getItem('prefolo.github.shopping-cart.state');
    if ( data !== null ) setCart(JSON.parse(data));
  }, []);

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

          <Popover
  isOpen={isPopoverOpen}
  positions={['bottom', 'center']} // if you'd like, you can limit the positions
  padding={10} // adjust padding here!
  reposition={false} // prevents automatic readjustment of content position that keeps your popover content within its parent's bounds
  onClickOutside={() => setIsPopoverOpen(false)} // handle click events outside of the popover/target here!
  content={({ position, nudgedLeft, nudgedTop }) => ( // you can also provide a render function that injects some useful stuff!
    <div>
      <div> Here's my current position: {position}.</div>
      <div>I'm {` ${nudgedLeft} `} pixels!</div>
      <div>I'm {` ${nudgedTop} `} pixels!</div>
    </div>
  )}
>
  <button onClick={() => setIsPopoverOpen(!isPopoverOpen)}>Click me!</button>
</Popover>;

        </div>
        <div id="current-page-section">
          <div id="title">Shop</div>
          <FilterBar onChangeBrand={onChangeBrand} onChangeCategory={onChangeCategory} />
        </div>
      </div>
      <div id="content">
          <button onClick={cancelCartHandler}>Cancel Cart</button>
          <ProductList cart={cart} setCart={setCart} filterbrand={filterbrand} filtercategory={filtercategory} setItemIDsInCartHandler={setItemIDsInCartHandler}/>
        </div>
      <div id="footer">Copyright © 2023 prefolo</div>
    </>
  )
}

export default Shop
