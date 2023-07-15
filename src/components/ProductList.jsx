import React from 'react'
import Product from './Product'
import data from '../data/products.json';

const ProductList = () => {
  const listItems = data.products.map((p) => {
    return <Product thumbnail={p.thumbnail} title={p.title} description={p.description} price={p.price} brand={p.brand} category={p.category} />
  })

  return (
    <div id='product-list-container'>{listItems}</div>
  );
}

export default ProductList;