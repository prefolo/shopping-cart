import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




const Home = ({cart,setCart}) => {
    const navigate = useNavigate()

    useEffect(() => {
        const data = window.localStorage.getItem('prefolo.github.shopping-cart.state');
        if ( data !== null ) setCart(JSON.parse(data));
      }, []);
    

    function navigateToHome() {
        navigate('/')
      }
    
      function navigateToShop() {
        navigate('shop')
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
          <div id="title">Home</div>

        </div>
      </div>
      <div id="footer">Copyright © 2023 prefolo</div>  
	  </>
  );
};

export default Home;