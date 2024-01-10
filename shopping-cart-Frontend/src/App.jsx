import React, { useState } from 'react'
import Home from './components/Home';
import Checkout from './components/Checkout';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {

  
  const [shoppingCartItems, setShoppingCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigateToCheckout = () => {
    setCurrentPage("checkout");
  }

  const handleNavigateToHome = () => {
    setCurrentPage("home");
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
      {currentPage === "home" && 
      <Home 
        NavigateToCheckout={handleNavigateToCheckout} 
        removeItem={removeItem}
        shoppingCartItems={shoppingCartItems}
        setShoppingCartItems={setShoppingCartItems}
      />
      }
      {currentPage === "checkout" && 
      <Checkout 
        NavigateToHome={handleNavigateToHome} 
        shopppingCartItems={shoppingCartItems}
      />
      }
      

    </div>
  )
}

export default App