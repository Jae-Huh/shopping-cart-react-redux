import React from 'react'
import { connect } from 'react-redux'

import './Cart.css'
import CartItem from '../CartItem/CartItem'
import { deleteFromCart } from '../../actions'

const Cart = (props) => {
  return (
    <div className="cart">
      <h1 className="cart-title">Cart</h1>
      {props.beersInCart.map((beer, i) => {
        return <CartItem beerName={beer.beerName} quantity={beer.quantity} deleteFromCart={props.deleteFromCart} key={i} />
      })}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    beersInCart: state.cart
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deleteFromCart: beer => {
      dispatch(deleteFromCart(beer))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
