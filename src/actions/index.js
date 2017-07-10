export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'

export const addToCart = (beer) => {
  return {
    type: ADD_TO_CART,
    beerName: beer
  }
}

export const deleteFromCart = (beer) => {
  return {
    type: DELETE_FROM_CART,
    beerName: beer
  }
}
