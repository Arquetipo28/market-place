import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './pages/Index'
import { NavBar } from './components/Index'

function App () {
  return (
    <Router>
      <NavBar />
      <Route exact path='/'>
        <Home />
      </Route>
    </Router>
  )
}

export default App
