import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Pokedex from './pages/Pokedex';
import PokemonDetails from './pages/PokemonDetails';

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Pokedex} />
                <Route exact path="/pokemon/:id" component={PokemonDetails} />
            </Switch>
        </Router>
    );
}

export default App;
