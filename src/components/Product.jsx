import React from 'react'
import images from '../images';

const Product = ({thumbnail,title,description,price,brand,category}) => {
  return ( 
    <div className='product'>
        <p>{title}</p>
        <div className="img-description-container">
            <img src={images[thumbnail]}/>
            <div className='info-container'>
                <p>{description}</p>
                <div className="product-footer-container">
                    <p className="price">{price}</p>
                    <div>
                        <p className="brand">{brand}</p>
                        <p className="category">{category}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   );
};

export default Product;