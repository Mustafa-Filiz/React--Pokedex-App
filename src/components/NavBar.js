import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: 'black',
    },
    link: {
        textDecoration: 'none',
    },
    title: {
        cursor: 'pointer',
        color: 'white',
    },
}));

function NavBar() {
    const classes = useStyles();
    return (
        <AppBar position="fixed">
            <Toolbar className={classes.navbar}>
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
