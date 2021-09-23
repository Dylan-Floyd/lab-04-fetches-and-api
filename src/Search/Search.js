import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <form onSubmit={this.props.submitHandler}>
                <label htmlFor="query">Name:</label>
                <input name="query" type="text"></input>
                <input type="submit" value="Search"></input>
            </form>
        )
    }
}
