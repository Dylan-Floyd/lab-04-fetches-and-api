import React from 'react';
import './App.css';
import PokeList from './PokeList/PokeList.js';
import Search from './Search/Search.js';
import Sort from './Sort/Sort.js';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            error: false,
            query: '',
            sortKey: 'pokemon',
            direction: 'asc',
            loading: false
        }
    }

    fetchPokemon = async (searchString) => {
        if(!searchString) {
            searchString = '';
        }
        this.setState({ loading: true });
        await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon='+this.state.query+'&sort='+this.state.sortKey+'&direction='+this.state.direction)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    pokemon: json.results,
                    loading: false
                });
            })
            .catch(error => {
                this.setState({ error: true });
                console.log(error);
            });
    }

    componentDidMount = () => {
        this.fetchPokemon();
    }

    handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const query = formData.get('query');
        this.setState({ query: query }, () => {
            this.fetchPokemon();
        });
    }

    handleSortChange = sortState => {
        this.setState({
            sortKey: sortState.sortKey,
            direction: sortState.direction
        }, () => {
            this.fetchPokemon();
        });
    }

    render() {
        return (
            <div className="App">
                <div className="header">
                    <Search submitHandler={this.handleSubmit} />
                    <Sort changeHandler={this.handleSortChange} />
                </div>
                { this.state.loading ? <img src="/pikachu.png" alt="pikachu" className="pikachu" /> : 
                        <PokeList pokemonList={this.state.pokemon} />
                }
            </div>
        );
    }
}
