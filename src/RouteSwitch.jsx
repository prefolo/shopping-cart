import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import './index.css'

const RouteSwitch = () => {
  const [productsincart, setProductsincart] = useState([]);

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App productsincart={productsincart} />} />
        <Route path="/shop" element={<Shop productsincart={productsincart} itemcountChangeHandler={itemcountChangeHandler} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;