import React, { useContext } from 'react';

const Header = ({productsincart}) => {
    return ( 
	    <>
        <div id="header">
          <p>Market Place</p>
          <div id="links-container">
            <p><a href="\">Home</a></p>
            <p><a href="\shop">Shop</a></p>
          </div>
          <button id="cart-button"><span className="material-symbols-outlined">shopping_cart</span> { productsincart.length }</button>
        </div>		  
	    </>
  );
};

export default Header;