import React from 'react'
import ProductCard from './ProductCard'
import "./productList.css"

const ProductList = ({products}) => {
  return (
    <div>
      <h3>List of Products</h3>
      <div className='cards-container'>
        {products.map((product, index)=> (
          <ProductCard product={product}/>
        ))}
      </div>
    </div>
  )
}

export default ProductList