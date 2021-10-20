import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Pokedex from './pages/Pokedex';

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" component={Pokedex} />
            </Switch>
        </Router>
    );
}

export default App;
