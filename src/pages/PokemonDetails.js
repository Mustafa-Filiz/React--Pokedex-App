import { CircularProgress, Grid, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { POKEMON_API_URL } from '../config';
import FavoriteIcon from '@mui/icons-material/Favorite';

const useStyles = makeStyles({
    pokemonContainer: {
        height: '80vh',
        marginTop: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textTitle: {
        textTransform: 'uppercase',
    },
    pokemonImg: {
        width: 250,
        height: 250,
    },
    pokemonInfo: {
        bottom: 60,
        position: 'absolute',
        width: '90%',
        height: 200,
        borderTop: '0.1px solid',
        padding: 20,
    },
});

function PokemonDetails(props) {
    const [pokemon, setPokemon] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        const { id } = props.match?.params;
        axios.get(POKEMON_API_URL + id).then((res) => setPokemon(res?.data));
    }, []);

    return (
        <Box>
            {pokemon ? (
                <Box className={classes.pokemonContainer}>
                    <Typography className={classes.textTitle} variant="h1">
                        {pokemon.name}
                    </Typography>
                    <img
                        alt={pokemon.name}
                        src={pokemon.sprites.front_default}
                        className={classes.pokemonImg}
                    />

                    <Box className={classes.pokemonInfo}>
                        <Grid container>
                            <Grid item md={1}>
                                <IconButton size="large">
                                    <FavoriteIcon
                                        color="error"
                                        fontSize="large"
                                    />
                                </IconButton>
                            </Grid>
                            <Grid item md={2}>
                                <Typography variant="h6">
                                    Name <br />
                                    {pokemon.name}
                                </Typography>
                            </Grid>
                            <Grid item md={2}>
                                <Typography variant="h6">
                                    Height <br />
                                    {pokemon.height}m
                                </Typography>
                            </Grid>
                            <Grid item md={2}>
                                <Typography variant="h6">
                                    Weight <br />
                                    {pokemon.weight}kg
                                </Typography>
                            </Grid>
                            {pokemon?.types.map((type, index) => {
                                const { name } = type.type;
                                return (
                                    <Grid key={index} item md={2}>
                                        <Typography variant="h6">
                                            Type <br />
                                            {name}
                                        </Typography>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                </Box>
            ) : (
                <CircularProgress />
            )}
        </Box>
    );
}

export default PokemonDetails;
