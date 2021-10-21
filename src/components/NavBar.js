import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
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
            <Toolbar >
                <Link to="/" className={classes.link}>
                    <Typography className={classes.title} variant="h5">
                        Pokedex
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
