import * as actionTypes from '../actions/types'
import { initialState } from '../store'

function marketApp (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_CART_ITEM: {
      const itemExist = state.cartItems.find(e => e.id === action.item.id)
      const count = itemExist ? itemExist.count + 1 || 1 : 1
      const itemWithCount = { ...action.item, count }
      const mappedItems = state.cartItems.filter(e => {
        if (e.id !== itemWithCount.id) {
          return e
        }
      })
      return Object.assign({}, state, {
        cartItems: [...mappedItems, itemWithCount]
      })
    }
    case actionTypes.REMOVE_CART_ITEM:
      return Object.assign({}, state, {
        cartItems: [...state.cartItems.filter(e => e.index !== action.item.index)]
      })
    default:
      return state
  }
}

export default marketApp
