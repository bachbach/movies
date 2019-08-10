import { connect } from 'react-redux'
import { getMovies } from 'ducks/movies'
import { Movies } from 'screens/Movies'
import { getMoviesAsArray } from 'selectors/movies'

const mapStateToProps = state => ({
  movies: getMoviesAsArray(state)
})

const mapDispatchToProps = disptach => ({
  getMovies: () => disptach(getMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies)