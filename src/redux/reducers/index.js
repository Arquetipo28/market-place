import * as actionTypes from '../actions/types'

const initialState = {
  cartItems: []
}

function marketApp (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_CART_ITEM:
      return Object.assign({}, state, {
        cartItems: [...state.cartItems, action.item]
      })
    case actionTypes.REMOVE_CART_ITEM:
      return Object.assign({}, state, {
        cartItems: [...state.cartItems.filter(e => e.index !== action.item.index)]
      })
    default:
      return state
  }
}

export default marketApp
