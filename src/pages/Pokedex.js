import { CircularProgress, Grid } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';
import { IMAGE_API_URL, POKEMON_API_URL } from '../config';

function Pokedex() {
    const [pokemonData, setPokemonData] = useState(null);
    useEffect(() => {
        axios.get(POKEMON_API_URL + '?limit=800').then((res) => {
            if (res.status >= 200 && res.status < 300) {
                const { results } = res.data;
                let newPokemonData = [];
                results.map((pokemon, index) => {
                    index++;
                    let pokemonObject = {
                        id: index,
                        url: IMAGE_API_URL + index + '.png',
                        name: pokemon.name,
                    };
                    return newPokemonData.push(pokemonObject);
                });
                setPokemonData(newPokemonData);
            }
        });
    }, []);

    return (
        <Box sx={{ mt: 10 }}>
            {pokemonData ? (
                <Grid container spacing={2}>
                    {pokemonData.map((pokemon) => {
                        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
                    })}
                </Grid>
            ) : (
                <CircularProgress />
            )}
        </Box>
    );
}

export default Pokedex;
