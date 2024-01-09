import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductList from './components/ProductList';
import ShoppingCartContent from './components/ShoppingCartContent';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCart from './components/ShoppingCart';


const App = () => {

  const [myProducts, setMyProducts] = useState([]);
  const [shoppingCartItems, setShoppingCartItems] = useState([]);
  const [showCartContent, setShowCartContent] = useState(false);
  
  const stateVariables = {shoppingCartItems, setShoppingCartItems};
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

  const removeItem = (product) => {
    
    let found = false;
    const fixedItems = shoppingCartItems.filter((item) => {
      if(!found && item.name === product.name) {
        found = true;
        return false;
      }
      else {
        return true;
      }
    });
    setShoppingCartItems(fixedItems);
  }

  return (
    <div className='app'>
      <div className={`overlay ${showCartContent ? 'active' : ""}`}></div>
      <div className='shopping-cart-icon' onClick={toggleShowContent}>
        <ShoppingCart shoppingCartItems={shoppingCartItems}/>  
      </div>
      {showCartContent && <ShoppingCartContent shoppingCartItems={shoppingCartItems} removeItem={removeItem}/>}          
      <span className='shopping-cart-counter'>{shoppingCartItems.length}</span>
      <h2 className='app-headline'>Shopping Cart App</h2>
      {myProducts.length > 0 ? (
        <ProductList products={myProducts} stateVariables={stateVariables}/>
      ):
        <p>No products available</p>
      }
      

    </div>
  )
}

export default App