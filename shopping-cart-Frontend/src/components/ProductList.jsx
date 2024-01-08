import React from 'react'
import ProductCard from './ProductCard'
import "./productList.css"

const ProductList = ({products, stateVariables}) => {
  return (
    <div className='list-container'>
      <h3 className='productList-headline'>List of Products</h3>
      <div className='cards-container'>
        {products.map((product, index)=> (
          <ProductCard  key={index} product={product} stateVariables={stateVariables}/>
        ))}
      </div>
    </div>
  )
}

export default ProductList