import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Item, Cart } from './pages/index.js'
import { NavBar } from './components/index.js'

function App () {
  return (
    <Router>
      <NavBar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/my-cart'>
        <Cart />
      </Route>
      <Switch>
        <Route path='/item/:id'>
          <Item />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
