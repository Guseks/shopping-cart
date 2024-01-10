import React, { useState } from 'react'
import "./productCard.css"

const ProductCard = ({product, setShoppingCartItems, shoppingCartItems}) => {
  const {name, price, desc, imgURL} = product;

  const [showDesc, setShowDesc] = useState(false);
  const handleAddToCart = () => {
    setShoppingCartItems([...shoppingCartItems, product]);
  }

  const toggleDescription = ()=> {
    setShowDesc(!showDesc);
  }

  return (
    <div className='product-card'>
      <img src={imgURL}></img>
      <div className='product-details'>
        <h4 className='product-name'>{name}</h4>
        <div className='price-info'>
          <span className='price'>{'Price: '}</span>
          <span className='product-price'>{`${price} $`}</span>
        </div>
        {showDesc && 
        <div className='product-desc'>
          <h4>Product Description</h4>
          <span >{`Description: ${desc}`}</span>
        </div>}
        <div className='buttons'>
          <button className='more-info' onClick={()=> toggleDescription()}>
            {showDesc ? "Less info" : "More info"}
          </button>
          <button className='add-to-cart' onClick={()=>handleAddToCart()}>Add to Cart</button>
        </div>
        
      </div>
    </div>
  )
}

export default ProductCard