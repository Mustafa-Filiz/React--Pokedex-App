import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        margin: 10,
    },
    title: {
        cursor: 'pointer',
        color: 'white',
    },
});

function NavBar() {
    const classes = useStyles();
    return (
        <AppBar color="secondary" position="fixed">
            <Toolbar>
                <Link to="/" className={classes.link}>
                    <Typography className={classes.title} variant="h4">
                        Pokedex
                    </Typography>
                </Link>
                <Link to="/favourites" className={classes.link}>
                    <Typography className={classes.title} variant="h6">
                        Favourites
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
