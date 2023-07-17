import React, { useContext } from 'react';
import { Purchasescontext } from '../contexts/Purchasescontext';

const Header = ({cartcount}) => {
    const { productsincart } = useContext(Purchasescontext)

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