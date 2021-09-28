import React from 'react';
import Paginator from '../Paginator/Paginator.js';
import PokeList from '../PokeList/PokeList.js';
import Search from '../Search/Search.js';
import Sort from '../Sort/Sort.js';

export default class PokeBrowser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            error: false,
            query: '',
            sortKey: 'pokemon',
            direction: 'asc',
            loading: false,
            page: 1
        }
    }

    fetchPokemon = async () => {
        this.setState({ loading: true });
        await fetch(
                'https://pokedex-alchemy.herokuapp.com/api/pokedex?'+
                'pokemon='+this.state.query+
                '&sort='+this.state.sortKey+
                '&direction='+this.state.direction+
                '&page='+this.state.page)
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

    addToPage = (valueToAdd) => {
        this.setState((prevState) => ({
            page: prevState.page + valueToAdd
        }),
            () => { this.fetchPokemon() }
        );
    }

    nextPage = () => {
        if (this.state.page < 9) {
            this.addToPage(1);
        }
    }

    prevPage = () => {
        if (this.state.page > 1) {
            this.addToPage(-1);
        }
    }

    render() {
        return (
            <div className="poke-browser">
                <div className="header">
                    <Search submitHandler={this.handleSubmit} />
                    <Sort changeHandler={this.handleSortChange} />
                </div>
                { this.state.loading ? <img src="/pikachu.png" alt="pikachu" className="pikachu" /> : 
                        <PokeList pokemonList={this.state.pokemon} />
                }
                <Paginator nextPage={this.nextPage} prevPage={this.prevPage} page={this.state.page}/>
            </div>
        );
    }
}
