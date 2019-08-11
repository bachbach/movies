import MoviesService from 'services/MoviesService'
import { transformById } from 'helpers/redux'

const moviesService = new MoviesService()

export const GET_MOVIES_SUCCESS = Symbol('GET_MOVIES_SUCCESS')
export const GET_MOVIES_ERROR = Symbol('GET_MOVIES_ERROR')

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

const initState = {
  entries: {},
  total: 0
}

export default (state = initState, action) => {
  switch (action.type) {
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