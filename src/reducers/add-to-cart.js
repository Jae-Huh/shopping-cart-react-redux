import { ADD_TO_CART } from '../actions'

const initialState = [{'beerName':'yourBeer', quantity: 1}]

const addToCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, {'beerName': action.beerName, 'quantity': 1}]

    default:
      return state
  }
}

export default addToCart
