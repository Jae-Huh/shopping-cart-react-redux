import React from 'react'
import { connect } from 'react-redux'

import './Cart.css'
import CartItem from '../CartItem/CartItem'

const Cart = (props) => {
  return (
    <div className="cart">
      <h1 className="cart-title">Cart</h1>
      {props.beersInCart.map((beer, i) => {
        return <CartItem beerName={beer.beerName} quantity={beer.quantity} key={i} />
      })}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    beersInCart: state.cart
  }
}

export default connect(mapStateToProps)(Cart)
