import React from 'react'

import './Cart.css'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
  return (
    <div className="cart">
      <h1 className="cart-title">Cart</h1>
      <CartItem />
    </div>
  )
}

export default Cart
