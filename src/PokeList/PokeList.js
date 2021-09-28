import React, { Component } from 'react'
import PokeItem from '../PokeItem/PokeItem.js'
import styles from './PokeList.module.css'

export default class PokeList extends Component {
    render() {
        return (
            <div className={styles.pokeList}>
                { this.props.pokemonList.map(pokemon => <PokeItem pokemon={pokemon} key={pokemon.id} />)}
            </div>
        )
    }
}
