import * as actionTypes from '../actions/types.js'
import { initialState } from '../store/index.js'

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
    case actionTypes.UPDATE_CART_ITEM: {
      const storedItem = state.cartItems.find(e => e.id === action.item.id)
      const mappedItems = state.cartItems.filter(e => e.id !== storedItem.id)
      const updatedItem = { ...storedItem, ...action.item }
      return Object.assign({}, state, {
        cartItems: [...mappedItems, updatedItem]
      })
    }
    default:
      return state
  }
}

export default marketApp
