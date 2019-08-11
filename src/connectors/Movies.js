import { connect } from 'react-redux'
import { getMovies } from 'ducks/movies'
import { Movies } from 'screens/Movies'
import { getMoviesAsArray } from 'selectors/movies'

const mapStateToProps = state => ({
  movies: getMoviesAsArray(state),
  total: state.movies.total
})

const mapDispatchToProps = disptach => ({
  getMovies: (query) => disptach(getMovies(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies)