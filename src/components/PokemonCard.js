import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    Card: {
        cursor: 'pointer',
    },
    content: {
        textAlign: 'center',
    },
    CardMedia: {
        margin: 'auto',
        width: 130,
        height: 130,
    },
	link:{
		textDecoration:"none"
	}
});

function PokemonCard({ pokemon }) {
    const { id, name, url } = pokemon;
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={2}>
            <Link to={"/pokemon/" + id} className={classes.link}>
                <Card className={classes.Card}>
                    <CardMedia className={classes.CardMedia} image={url} />
                    <CardContent className={classes.content}>
                        <Typography variant="h6">{name}</Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    );
}

export default PokemonCard;
