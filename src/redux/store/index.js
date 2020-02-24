import { createStore } from 'redux'
import marketApp from '../reducers'

const initialState = { cartItems: [] }

const saveStateOnLocalStorage = (state) => {
  try {
    const stringState = JSON.stringify(state)
    localStorage.setItem('state', stringState)
  } catch (e) {
    console.error(e)
  }
}

const loadStateFromLocalStore = () => {
  try {
    const stringState = localStorage.getItem('state') || initialState
    return JSON.parse(stringState)
  } catch {
    return undefined
  }
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
