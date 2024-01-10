import React from 'react'
import "./checkout.css"

const Checkout = ({NavigateToHome, shopppingCartItems}) => {

  const totalPrice = shopppingCartItems.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  return (
    <div className='checkout-page'>
      <h3 className='headline-checkout'>Checkout Page</h3>
      <div className='display-checkout'>
        {shopppingCartItems.map((item, index) => (
          <div key={index} className='checkout-item-details'>
            <img className='img-checkout' src={item.imgURL}></img>
            <span className='checkout-amount'>{`Amount: ${item.quantity}`}</span>
            <span className='checkout-price'>{`Price: ${item.price * item.quantity} $ (${item.price} $ * ${item.quantity})`}</span>
          </div>
        ))}
        {shopppingCartItems.length !== 0 && <span className='checkout-total-price'>{`Total Price: ${totalPrice} $`}</span>}
        {shopppingCartItems.length === 0 && <div className='empty-cart'>No items currently in Shopping Cart</div>}
        <button className="home-button" onClick={NavigateToHome}>Back to Home</button>
      </div>
      
    </div>
  )
}

export default Checkout