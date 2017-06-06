import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectMovie} from './actions';
import {bindActionCreators} from 'redux';

class MoviesList extends Component {
  render() {
    return(
      <ul>
        {this.props.movie.map((key, i) => {
          return(
              <li key={i} onClick={() => this.props.selectMovie(key)}>
              {key.title}
              </li>
            );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movies,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectMovie: selectMovie,}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);


        // {this.props.movie.map((key, i) => {
        //   return(
        //       <li key={i}>
        //         {key.title}
        //       </li>
        //     );