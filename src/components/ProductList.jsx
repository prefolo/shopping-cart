import React from 'react'
import Product from './Product'
import data from '../data/products.json';

const ProductList = () => {
  let prds = [ ...data.products ];
  prds.sort((a,b)=>{ return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1 })

  //console.log( prds )

  const listItems = prds.map((p) => {
    return <Product key={p.id} item={p} />
  })

  return (
    <div id='product-list-container'>{listItems}</div>
  );
}

export default ProductList;