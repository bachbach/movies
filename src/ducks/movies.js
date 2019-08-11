import MoviesService from 'services/MoviesService'
import { transformById } from 'helpers/redux'

const moviesService = new MoviesService()

export const GET_MOVIES_SUCCESS = Symbol('GET_MOVIES_SUCCESS')
export const GET_MOVIES_ERROR = Symbol('GET_MOVIES_ERROR')
export const GET_MOVIE_SUCCESS = Symbol('GET_MOVIE_SUCCESS')
export const GET_MOVIE_ERROR = Symbol('GET_MOVIE_ERROR')

const getMoviesSuccess = (movies) => ({ type: GET_MOVIES_SUCCESS, movies })
const getMoviesError = (error) => ({ type: GET_MOVIES_ERROR, error })

export const getMovies = (query) => {
  return async dispatch => {
    try {
      const { data } = await moviesService.getMovies(query)
      
      dispatch(getMoviesSuccess(data))
      return data
    } catch (e) {
      return dispatch(getMoviesError(e.response.data))
    }
  }
}

const getMovieSuccess = (movie) => ({ type: GET_MOVIE_SUCCESS, movie })
const getMovieError = (error) => ({ type: GET_MOVIE_ERROR, error })

export const getMovieIfNeeded = (id) => {
  return (dispatch, getState) => {
    console.log('fetchIfNeed', getState().movies.entries)
    console.log(id)
    if (!getState().movies.entries[id]) {
      return dispatch(getMovie(id))
    }
  }
}

export const getMovie = (id) => {
  return async dispatch => {
    try {
      const { data } = await moviesService.getMovie(id)

      dispatch(getMovieSuccess(data))
      return data
    } catch (e) {
      return dispatch(getMovieError(e.response.data))
    }
  }
}

const initState = {
  entries: {},
  total: 0
}

export default (state = initState, action) => {
  switch (action.type) {
    //@TODO do not override movies, add fetchIfNeed for list to keep pagination and sorting in reducer
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        entries: transformById(action.movies.collection, '_id'),
        total: action.movies.total
      }
    default:
      return state
  }
}