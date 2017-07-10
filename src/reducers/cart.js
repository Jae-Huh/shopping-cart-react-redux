import { ADD_TO_CART, DELETE_FROM_CART } from '../actions'

const initialState = []

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action.beerName)

    case DELETE_FROM_CART:
      return state.filter(beer => beer.beerName !== action.beerName)

    default:
      return state
  }
}

function addToCart (cart, beer) {
  let inCart = false

  const updatedCart = cart.map(item => {
    if (item.beerName === beer) {
      item.quantity += 1
      inCart = true
    }
    return item
  })

  if (inCart) {
    return updatedCart
  } else {
    updatedCart.push({'beerName': beer, 'quantity': 1})
    return updatedCart
  }
}

export default cart
