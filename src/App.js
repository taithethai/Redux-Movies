import React, { Component } from 'react';
import MoviesList from './MoviesList';
import './App.css';
import MoviesDetail from './MoviesDetail.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MoviesList />
        <MoviesDetail />
      </div>
    );
  }
}

export default App;
