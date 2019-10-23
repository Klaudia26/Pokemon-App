import React, { Component } from 'react';
import Pokemon from './Pokemon';
import { Header, Item, Card } from 'semantic-ui-react';

class Pokedex extends Component {
    state = {
        pokemons: [],
        error: null,
    }
    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong')
                }
            })
            .then(response => this.setState({
                pokemons: response.results,
                error: null,
            }))
            .catch(error => this.setState({
                pokemons: [],
                error,
            }))
    }

    renderPokemonList = (pokemons) => {
        if (!pokemons.length) return "loading...";

        return pokemons.map(pokemon => <Pokemon key={pokemon.name} pokemon={pokemon} />);
    }

    render() {
        return (
            <>
                <Header as='h2'>Pokedex</Header>
                <Card.Group itemsPerRow={4}>
                    {this.renderPokemonList(this.state.pokemons)}
                </Card.Group>
            </>
        );
    }
}

export default Pokedex;