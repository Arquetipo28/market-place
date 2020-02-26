import { createStore } from 'redux'
import marketApp from '../reducers/index.js'
import { handle } from '@arquetipo28/localstorage-handler'

const initialState = { cartItems: [] }

const saveStateOnLocalStorage = (newState) => {
  handle(function state () {
    return newState
  }, { force: true, expire: { hours: 1 } })
}

const loadStateFromLocalStore = () => {
  return handle(function state () {})
}

const persistedState = loadStateFromLocalStore()
const store = createStore(
  marketApp,
  persistedState
)

store.subscribe(() => saveStateOnLocalStorage(store.getState()))

export {
  store,
  initialState
}
