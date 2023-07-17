import React, { useState } from 'react'
import './Shop.css'
import ProductList from "./components/ProductList";
import FilterBar from "./components/FilterBar";
import Header from './components/Header';

function Shop() {
  const [filterbrand, setFilterbrand] = useState("All")
  const [filtercategory, setFiltercategory] = useState("All")
  const [productsincart, setProductsincart] = useState([])

  function onChangeBrand(e) {
    setFilterbrand(e.target.value)
  }

  function onChangeCategory(e) {
    setFiltercategory(e.target.value)
  }

  function itemcountChangeHandler(id,count){ 
    console.log({id,count})
    console.log("productsincart prima dell'inserimento", productsincart)

    const result = productsincart.filter(function(x) {
      return x !== id;
    });

    const arr = new Array(count).fill(id);

    console.log( result.length, count, [...arr, ...result].length )

    setProductsincart([...arr, ...result]);
  }

  return (
    <>
      <div id="sticky-top-bar">
        <Purchasescontext.Provider value={{ productsincart, setProductsincart }}>
          <Header />
        </Purchasescontext.Provider>
        <div id="current-page-section">
          <div id="title">Store</div>
          <div id="filter-container">
            <FilterBar onChangeBrand={onChangeBrand} onChangeCategory={onChangeCategory}/>
          </div>
        </div>
      </div>
      <div id="content">
          <ProductList filterbrand={filterbrand} filtercategory={filtercategory} itemcountChangeHandler={itemcountChangeHandler}/>
      </div>
      <div id="footer">Copyright © 2023 prefolo</div>
    </>
  )
}

export default Shop

