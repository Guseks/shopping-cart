import React from 'react'
import "./productCard.css"

const ProductCard = ({product}) => {
  const {name, price, desc, imgURL} = product;
  return (
    <div className='product-card'>
      <span>{`Image: ${imgURL}`}</span>
      <div className='product-details'>
        <h4 className='product-name'>{name}</h4>
        <span className='product-price'>{price}</span>
        <button className='add-to-cart btn btn-outline-dark '>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard