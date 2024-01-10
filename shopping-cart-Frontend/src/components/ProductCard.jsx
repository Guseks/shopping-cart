import React from 'react'
import "./productCard.css"

const ProductCard = ({product, setShoppingCartItems, shoppingCartItems}) => {
  const {name, price, desc, imgURL} = product;

  const handleAddToCart = () => {
    setShoppingCartItems([...shoppingCartItems, product]);
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
        <div className='buttons'>
          <button className='more-info'>More info</button>
          <button className='add-to-cart' onClick={()=>handleAddToCart()}>Add to Cart</button>
        </div>
        
      </div>
    </div>
  )
}

export default ProductCard