import React, { Component } from 'react'
import { namifyString } from '../utils.js';
import styles from '../PokeItem/PokeItem.module.css'

export default class PokeDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokeData: {},
            loading: true,
            error: false
        }
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id;
        this.setState({ loading: true });
        await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${id}`)
            .then(response => response.json())
            .then(json => {
                console.log('json: ' + JSON.stringify(json));
                this.setState({
                    pokeData: json,
                    loading: false
                });
            })
            .catch(error => {
                this.setState({ error: true });
                console.log(error);
            })
    }

    render() {
        const poke = this.state.pokeData;
        if (this.state.loading === true) {
            return <img src="/pikachu.png" alt="pikachu" className="pikachu" />
        } else {
            return (
                <div className={`${styles.cardBorder} ${styles.big}`} to={`/pokemon/${poke._id}`} alt="click for more detail on this pokemon">
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
            </div>
            )
        }
    }
}
