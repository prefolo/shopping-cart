import { useState } from 'react'
import './App.css'
import ProductList from "./components/ProductList";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div id="header">
  <p>Market Place</p>
</div>
<div id="content">
    <ProductList />
</div>
<div id="footer">Copyright © 2023 prefolo</div>
    </>
  )
}

export default App
