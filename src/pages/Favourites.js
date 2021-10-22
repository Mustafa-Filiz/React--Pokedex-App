import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import React from 'react'
import { connect } from 'react-redux'
import PokemonCard from '../components/PokemonCard'

const useStyles = makeStyles({
	favouritesContainer:{
		height: "100vh"
	}
})

export const Favourites = (props) => {

	const classes = useStyles()

	return (
		<Box sx={{ mt: 10 }}>
			<Grid container spacing={2} className={classes.favouritesContainer}>
				{props.favourites?.map((pokemon) => {
					return (
						<PokemonCard key={pokemon.id} pokemon={pokemon} image={pokemon.sprites.front_default} />
					)
				})}
			</Grid>
		</Box>
	)
}

const mapStateToProps = (state) => ({
	favourites : state.favourites
})

const mapDispatchToProps = (dispatch) => ({
	
})

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)
