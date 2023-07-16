import React from 'react'
import data from '../data/products.json';

const FilterBar = ({onChangeBrand,onChangeCategory}) => {
  const brands = ["All", ...new Set(data.products.map(p=> p.brand))];
  const categories = ["All", ...new Set(data.products.map(p=> p.category))];


  const optionsBrands = brands.map((b,i)=> {
    return <option key={i} value={b} >{b}</option>
  })

  const optionsCategories = categories.map((b,i)=> {
    return <option key={i} value={b} >{b}</option>
  })

  return (
    <div id='filter-bar'>
      <select onChange={onChangeBrand}>
        {optionsBrands}
      </select>
      <select onChange={onChangeCategory}>
        {optionsCategories}
      </select>
    </div>
  );
}

export default FilterBar;