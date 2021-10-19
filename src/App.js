import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Pokedex from './pages/Pokedex';

function App() {
  return (
    <Router>
      <Route path="/" component={Pokedex} />
    </Router>
  )
}

export default App
