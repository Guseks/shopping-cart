import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductList from './components/ProductList';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  const [myProducts, setMyProducts] = useState([]);

  useEffect(()=>{
    const loadProduct = async () => {
      const response = await axios.get("http://localhost:3000/CART/products");
      setMyProducts(response.data);
    }
    loadProduct();

  }, []);

  return (
    <div className='app'>
      <h2 className='app-headline'>Shopping Cart App</h2>
      {myProducts.length > 0 ? (
        <ProductList products={myProducts}/>
      ):
        <p>No products available</p>
      }
      

    </div>
  )
}

export default App