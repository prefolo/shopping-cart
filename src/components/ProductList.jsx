import React from 'react'
import Product from './Product'
import data from '../data/products.json';

const ProductList = ({cart, setCart, filterbrand,filtercategory,setItemIDsInCartHandler}) => {
  let prds = [ ...data.products ];
  prds.sort((a,b)=>{ return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1 })

  const a = filterbrand != "All" ? prds.filter(p=>p.brand==filterbrand) : [...prds];
  const b = filtercategory != "All" ? a.filter(p=>p.category==filtercategory) : 0;
  const result = b ? [...b] : [...a];

  const listItems = result.map(p => <Product key={p.id} item={p} cart={cart} setCart={setCart} setItemIDsInCartHandler={setItemIDsInCartHandler}/>)

  return (
    <div id='product-list-container'>{listItems}</div>
  );
}

export default ProductList;