import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Item, Cart, NotFound } from './pages/Index'
import { NavBar } from './components/Index'

function App () {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/my-cart' component={Cart} />
        <Route exact path='/item/:id' component={Item} />
        <Route exact path='/404' component={NotFound} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
