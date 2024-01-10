import React from 'react'
import ProductCard from './ProductCard'
import "./productList.css"

const ProductList = ({products, shoppingCartItems, setShoppingCartItems}) => {
  return (
    <div className='list-container'>
      <h3 className='productList-headline'>List of Products</h3>
      <div className='cards-container'>
        {products.map((product, index)=> (
          <ProductCard  
            key={index} 
            product={product} 
            shoppingCartItems={shoppingCartItems} 
            setShoppingCartItems={setShoppingCartItems}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList