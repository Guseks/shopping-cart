import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductList from './ProductList';
import ShoppingCartContent from './ShoppingCartContent';
import ShoppingCart from './ShoppingCart';
import "./home.css"

const Home = ({NavigateToCheckout, removeItem, shoppingCartItems, setShoppingCartItems}) => {

  const [myProducts, setMyProducts] = useState([]);
  const [showCartContent, setShowCartContent] = useState(false);


  useEffect(()=>{
    const loadProduct = async () => {
      const response = await axios.get("http://localhost:3000/CART/products");
      setMyProducts(response.data);
    }
    loadProduct();

  }, []);

  const toggleShowContent = () => {
    setShowCartContent(!showCartContent);
  }


  return (
    <div className='home-app'>
      <div className={`overlay ${showCartContent ? 'active' : ""}`}></div>
      <div className='shopping-cart-icon' onClick={toggleShowContent}>
        <ShoppingCart shoppingCartItems={shoppingCartItems}/>  
      </div>
      {showCartContent && 
      <ShoppingCartContent shoppingCartItems={shoppingCartItems} removeItem={removeItem} NavigateToCheckout={NavigateToCheckout}/>}   

      <span className='shopping-cart-counter'>{shoppingCartItems.length}</span>
      <h2 className='app-headline'>Shopping Cart App</h2>
      {myProducts.length > 0 ? (
        <ProductList products={myProducts} shoppingCartItems={shoppingCartItems} setShoppingCartItems={setShoppingCartItems}/>
      ):
        <p>No products available</p>
      }
    </div>
  )
}

export default Home