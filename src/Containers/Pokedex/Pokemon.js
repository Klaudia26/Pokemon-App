import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Item, ItemContent, Label } from 'semantic-ui-react';

class Pokemon extends Component {
    state = {
        pokemonURL: this.props.pokemon.url,
        pokemon: null,
        error: null,
    }
    componentDidMount() {
        fetch(this.state.pokemonURL)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong')
                }
            })
            .then(response => this.setState({
                pokemon: response,
                error: null,
            }))
            .catch(error => this.setState({
                pokemon: null,
                error,
            }))
    }
    setColor = (types) => {
        const type = (types[1] && types[1].type.name) || (types[0] && types[0].type.name);

        switch (type) {
            case 'grass':
                return '73, 208, 176';
            case 'fire':
                return '253, 108, 109';
            case 'water':
                return '118, 190, 254';
            case 'bug':
                return '168, 184, 32';
            case 'normal':
                return '168, 168, 120';
            default:
                return 'grey';
        }
    }
    renderPokemon = (pokemon) => {
        return (
            <>
                <Card style={{ background: `rgba(${this.setColor(pokemon.types)})` }}>
                    <Card.Content>
                        {/* <Link to={`/pokedex/${pokemon.name}`}> */}
                        <Image floated='right' src={pokemon.sprites.front_default} size='tiny' style={{ background: "transparent" }} />
                        <Card.Header as='h3'>{pokemon.name}</Card.Header>
                        {pokemon.types.map(type => <Card.Meta><Label size='large' style={{ background: `rgba(${this.setColor(pokemon.types)}, 0.5)` }}>{type.type.name}</Label></Card.Meta>)}
                        {/* </Link> */}
                    </Card.Content>
                </Card>
            </>
        )
    }

    render() {
        // console.log(this.state.pokemon);
        return (
            <>
                {this.state.pokemon && this.renderPokemon(this.state.pokemon)}
            </>
        )
    }
}
export default Pokemon;