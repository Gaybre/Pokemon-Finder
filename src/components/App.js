import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../styles/styles.css'

import Navbar from './Navbar'
import Home from '../pages/Home'
import Finder from '../pages/Finder'
import Viewer from '../pages/Viewer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/finder" component={ Finder } />
        <Route exact path="/viewer" component={ Viewer } />
      </Switch>
    </BrowserRouter>
  )
}

export default App
