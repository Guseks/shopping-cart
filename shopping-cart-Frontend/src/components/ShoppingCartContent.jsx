import React from 'react'
import "./shoppingCartContent.css"

const ShoppingCartContent = ({shoppingCartItems, removeItem, NavigateToCheckout}) => {
  
  

  const shoppingCartItemsCalc = () => {
    const calculatedItems = [];
    shoppingCartItems.forEach(item => {
      if(calculatedItems[item.name]){
        calculatedItems[item.name].quantity += 1;
      }
      else {
        calculatedItems[item.name] = {
          ...item,
          quantity: 1
        }
      }
    });
    return Object.values(calculatedItems);
  }
  

  const calculatedItemsArray = shoppingCartItemsCalc(shoppingCartItems);
  const totalPrice = calculatedItemsArray.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  return (
    <div className='shopping-cart-content'>
      <div className='inner-frame'>
        <h4>Shopping Cart</h4>
        <ul className='cart-items'>
          {calculatedItemsArray.map((item, index) =>(
            <li className='product-info' key={index}>
              <span className='name'>{item.name}</span>
              <span className='quantity'>{`Amount: ${item.quantity}`}</span>
              <span className='price'>{`Price: ${item.price * item.quantity} $`}</span>
              <div className='close-button' onClick={()=>removeItem(item)}>&times;</div>
            </li>
          ))}
          {shoppingCartItems.length === 0 && <p>Your cart is empty</p>}
        </ul>
        <span className='total-price'>{`Total Price: ${totalPrice} $`}</span>
      </div>

      <button className='checkout-button' onClick={()=> NavigateToCheckout(calculatedItemsArray)}>Proceed to Checkout</button>
      
    </div>
  );
};

export default ShoppingCartContent