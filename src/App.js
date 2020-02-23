import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Item } from './pages'
import { NavBar } from './components'

function App () {
  return (
    <Router>
      <NavBar />
      <Route exact path='/'>
        <Home />
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
