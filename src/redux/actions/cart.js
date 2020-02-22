import * as types from './types'

export const addCartItem = (item) => {
  return {
    type: types.ADD_CART_ITEM,
    item
  }
}

export const removeCartItem = (item) => {
  return {
    type: types.REMOVE_CART_ITEM,
    item
  }
}
