import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductList from './components/ProductList';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCart from './components/ShoppingCart';


const App = () => {

  const [myProducts, setMyProducts] = useState([]);
  const [shoppingCartItems, setShoppingCartItems] = useState([]);

  const stateVariables = {shoppingCartItems, setShoppingCartItems};
  useEffect(()=>{
    const loadProduct = async () => {
      const response = await axios.get("http://localhost:3000/CART/products");
      setMyProducts(response.data);
    }
    loadProduct();

  }, []);

  return (
    <div className='app'>
      <ShoppingCart shoppingCartItems={shoppingCartItems}/>
      <span className='shopping-cart-counter'>{shoppingCartItems.length}</span>
      <h2 className='app-headline'>Shopping Cart App</h2>
      {myProducts.length > 0 ? (
        <ProductList products={myProducts} stateVariables={stateVariables}/>
      ):
        <p>No products available</p>
      }

      <button className='test-button' onClick={()=> console.log(shoppingCartItems)}>Check Shopping Cart</button>
      

    </div>
  )
}

export default App