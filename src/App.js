import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import JokeText from './components/JokeText/JokeText.js';
import JokeButton from './components/JokeButton/JokeButton.js';
import data from './data.json'

class App extends Component {
  state = {
    currentJokeId: this.getNewJokeId()
  }

  getNewJokeId() {
    return Math.floor(Math.random() * data.jokes.length);
  }

  changeJoke() {
    this.setState({
      currentJokeId: this.getNewJokeId()
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <JokeText 
          joke={data.jokes[this.state.currentJokeId]}
        />
        <JokeButton 
          changeJoke={this.changeJoke.bind(this)}
        />
      </div>
    );
  }
}

export default App;
