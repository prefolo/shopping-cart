import React from 'react'
import images from '../images';

const Product = ({item}) => {
  return ( 
    <div className='product'>
        <p className='title'>{item.title}</p>
        <p className='brand'>{item.brand}</p>
        
        <img src={images[item.thumbnail]}/><p className='desc'>{item.description}</p>
        <div className="button-container">       
            <button className="price">{`${item.price} €`}</button>
        </div>
    </div>
   );
};

export default Product;