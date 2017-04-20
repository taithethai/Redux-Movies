export default (stateProp = null, action) => { // activeMovie
  switch (action.type) {
    case 'MOVIE_SELECTED':
      return action.payload; //{godfather...}
    default:
      return stateProp;
  }
};
