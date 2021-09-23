import React, { Component } from 'react'
import './PokeItem.css';

export default class PokeItem extends Component {
    
    render() {
        const poke = this.props.pokemon;
        return (
            <div className="poke-item">
                <img src={poke.url_image} alt={poke.pokemon} className="poke-image" />
                {poke.pokemon}
            </div>
        )
    }
}
