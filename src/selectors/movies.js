import { createSelector } from 'reselect'
import { transformToArray } from 'helpers/redux';

const getMovies = state => state.movies.entries 

export const getMoviesAsArray = createSelector(
  getMovies,
  (movies) => transformToArray(movies)
)