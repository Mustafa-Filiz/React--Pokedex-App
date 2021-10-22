import { TOGGLE_FAVOURITE } from './Action';

const initialState = {
    favourites: [],
};

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVOURITE:
            let pokemonFromFavourite = state.favourites.find(
                (pokemon) => action.payload.id === pokemon.id
            ); // find yerine filter içerisine !== action.payload.id dene
            return {
                ...state,
                favourites: pokemonFromFavourite
                    ? [
                          ...state.favourites.filter(
                              (pokemon) =>
                                  pokemon.id !== pokemonFromFavourite.id
                          ),
                      ]
                    : [...state.favourites, action.payload],
            };

        default:
            return state;
    }
};

export default pokemonReducer;
