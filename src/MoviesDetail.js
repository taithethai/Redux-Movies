import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieDetail extends Component {
  render() {
    if (this.props.movie === null) return(<h2>Select a movie</h2>);
    return(
      <div>
        <h2>{this.props.movie.title}</h2>
        <h3>{this.props.movie.director}</h3>
        <h4>{this.props.movie.runtime}</h4>
      </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.activeMovie,
  };
};

export default connect(mapStateToProps)(MovieDetail);