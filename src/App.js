import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import NavBar from './components/NavBar';
import Favourites from './pages/Favourites';
import Pokedex from './pages/Pokedex';
import PokemonDetails from './pages/PokemonDetails';
import { persistor, store } from './redux/Store';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Pokedex} />
                        <Route
                            exact
                            path="/pokemon/:id"
                            component={PokemonDetails}
                        />
                        <Route exact path="/favourites" component={Favourites} />
                    </Switch>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
