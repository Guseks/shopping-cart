import React from 'react'

const Checkout = ({NavigateToHome, shopppingCartItems}) => {
  return (
    <div>
      <h4>Checkout Page</h4>
      <button onClick={NavigateToHome}>Navigate to Home</button>
    </div>
  )
}

export default Checkout