import React, { Component } from 'react';

export default class JokeText extends Component {
    render() {
        return (
            <div className="joke-text">
                {this.props.joke}
            </div>
        );
    }
}
