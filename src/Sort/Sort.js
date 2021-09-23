import React, { Component } from 'react'

export default class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortKey: 'pokemon',
            direction: 'asc'
        }
    }

    handleSortKeyChange = e => {
        const newKey = e.target.value;
        this.setState({ sortKey: newKey });
        this.props.changeHandler({
            direction: this.state.direction,
            sortKey: newKey
        });
    }

    handleDirectionChange = e => {
        const newDirection = e.target.value
        this.setState({ direction: newDirection });
        this.props.changeHandler({
            direction: newDirection,
            sortKey: this.state.sortKey
        });
    }

    render() {
        return (
            <div>
                Sort by: 
                <select onChange={this.handleSortKeyChange}>
                    <option value="pokemon">Name</option>
                    <option value="type_1">Type</option>
                    <option value="shape">Shape</option>
                    <option value="ability_1">Ability</option>
                </select>

                Direction: 
                <select onChange={this.handleDirectionChange}>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </select>
            </div>
        )
    }
}
