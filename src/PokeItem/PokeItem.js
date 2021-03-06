import React, { Component } from 'react'
import styles from './PokeItem.module.css';
import { namifyString } from '../utils.js';
import { Link } from 'react-router-dom';

export default class PokeItem extends Component {
    
    render() {
        const poke = this.props.pokemon;
        return (
            <Link className={styles.cardBorder} to={`/pokemon/${poke._id}`} alt="click for more detail on this pokemon">
                <div className={`${styles.pokeItem} ${styles.cloudBG} ${styles[poke.type_1]}`}>
                    <div className={styles.topInfo}>
                        <span className={styles.name}>{namifyString(poke.pokemon)}</span>
                        <span className={styles.hp}>{poke.hp+'HP'}</span>
                    </div>
                    <div className={styles.imageBorder}>
                        <div className={styles.imageBG}>
                            <img src={poke.url_image} alt={poke.pokemon} className={styles.pokeImage} />
                        </div>
                    </div>
                    <div className={styles.bottomInfo}>
                        {namifyString(poke.type_1)} Pokemon. Length {poke.height}, Weight: {poke.weight} lbs.
                    </div>
                    <ul className={styles.infoList}>
                        <li>Type: {namifyString(poke.type_1)}</li>
                        <li>Speed: {poke.speed}</li>
                        <li>Ability 1: {namifyString(poke.ability_1)}</li>
                        <li>Base Pokemon: {namifyString(poke.pokebase)}</li>
                    </ul>
                </div>
            </Link>
        )
    }
}
