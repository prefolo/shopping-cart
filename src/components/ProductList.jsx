import React from 'react'
import Product from './Product'
import data from '../data/products.json';

const ProductList = ({filterbrand,filtercategory}) => {
  let prds = [ ...data.products ];
  prds.sort((a,b)=>{ return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1 })

  const a = filterbrand != "All" ? prds.filter(p=>p.brand==filterbrand) : [...prds];
  const b = filtercategory != "All" ? a.filter(p=>p.category==filtercategory) : 0;
  const result = b ? [...b] : [...a];

  //console.log( result )

  const listItems = result.map((p) => {
    return <Product key={p.id} item={p} />
  })

  return (
    <div id='product-list-container'>{listItems}</div>
  );
}

export default ProductList;