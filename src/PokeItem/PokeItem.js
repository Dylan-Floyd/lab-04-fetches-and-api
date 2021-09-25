import React, { Component } from 'react'
import styles from './PokeItem.module.css';
import { namifyString } from '../utils.js';

export default class PokeItem extends Component {
    
    render() {
        const poke = this.props.pokemon;
        return (
            <div className={styles.cardBorder}>
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
                </div>
            </div>
        )
    }
}
