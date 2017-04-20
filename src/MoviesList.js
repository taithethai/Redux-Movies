import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from './actions';
import { bindActionCreators } from 'redux';

class MoviesList extends Component {
  render() {
    return (
      <ul>
        {this.props.movies.map((movie, i) => {
          return (
            <li
              onClick={() => this.props.selectMovie(movie)}
              key={i}>
              {movie.title}
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectMovie: selectMovie }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
