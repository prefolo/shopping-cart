import React from 'react'
import images from '../images';

const Product = ({thumbnail,title,description,price,brand,category}) => {
  return ( 
    <div className='product'>
        <p className='title'>{title}</p>
        <p className='desc'>{description}</p>
        <img src={images[thumbnail]}/>
        <div className="button-container">       
            <button className="price">{`${price} €`}</button>
        </div>
    </div>
   );
};

export default Product;