import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { POKEMON_API_URL } from '../config';

function PokemonDetails(props) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const { id } = props.match?.params;
        axios.get(POKEMON_API_URL + id).then((res) => setPokemon(res?.data));
    }, []);

    console.log(pokemon);

    return (
        <Box mt={10}>
            {pokemon ? <h1>Hello</h1> : <CircularProgress />}
        </Box>
    );
}

export default PokemonDetails;
