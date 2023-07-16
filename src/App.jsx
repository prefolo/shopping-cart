import { useState } from 'react'
import './App.css'
import ProductList from "./components/ProductList";
import FilterBar from "./components/FilterBar";

function App() {
  const [filterbrand, setFilterbrand] = useState("All")
  const [filtercategory, setFiltercategory] = useState("All")

  function onChangeBrand(e) {
    setFilterbrand(e.target.value)
  }

  function onChangeCategory(e) {
    setFiltercategory(e.target.value)
  }

  return (
    <>
<div id="header">
  <p>Market Place</p>
</div>
<div id="content">
    <FilterBar onChangeBrand={onChangeBrand} onChangeCategory={onChangeCategory}/>
    <ProductList filterbrand={filterbrand} filtercategory={filtercategory} />
</div>
<div id="footer">Copyright © 2023 prefolo</div>
    </>
  )
}

export default App
