import React, { Component } from 'react'
import PokeItem from '../PokeItem/PokeItem.js'
import './PokeList.css'

export default class PokeList extends Component {
    render() {
        return (
            <div className="poke-list">
                { this.props.pokemonList.map(pokemon => <PokeItem pokemon={pokemon} key={pokemon.id} />)}
            </div>
        )
    }
}
