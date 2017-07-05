import React from 'react'

import './CartItem.css'

const CartItem = () => {
  return (
    <div className="cart-item">
      <h3 className="cart-beer-name">beer-name</h3>
      <label className="cart-quantity">
        Quantity:<br />
        <input className="beer-quantity" type="number" min="1" max="100" />
      </label>
      <div className="cart-button-container">
        <button className="cart-delete-button">Delete</button>
      </div>
    </div>
  )
}

export default CartItem
