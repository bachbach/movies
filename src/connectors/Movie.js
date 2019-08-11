import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Movie } from 'screens/Movie'
import { getMovieIfNeeded } from 'ducks/movies'

const mapStateoToProps = (state, ownProps) => ({
  movie: state.movies.entries[ownProps.id]
})

const mapDispatchToProps = dispatch => ({
  getMovie: (id) => dispatch(getMovieIfNeeded(id))
})

export default connect(mapStateoToProps, mapDispatchToProps)(withRouter(Movie))
