import React, { Component } from 'react';

export default class JokeText extends Component {
    render() {
        return (
            <button 
                onClick={this.props.changeJoke}
                className="joke-button"
            >
              Daj suchara!
            </button>
        );
    }
}
