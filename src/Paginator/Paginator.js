import React, { Component } from 'react'
import styles from './Paginator.module.css'

export default class Paginator extends Component {
    render() {
        const disablePrev = this.props.page <= 1;
        const disableNext = this.props.page >= 9;
        return (
            <div className={styles.paginator}>
                <button value="prev" onClick={this.props.prevPage} disabled={disablePrev}>&#60; Prev</button>
                <span>{this.props.page}</span>
                <button value="next" onClick={this.props.nextPage} disabled={disableNext}>Next &#62;</button>
            </div>
        )
    }
}
