import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const Movie = ({ movie, match, getMovie }) => {
  useEffect(() => {
    getMovie(match.params.id)
  }, [])
  console.log(movie.postUrl)
  return (
    <div>
      <div>
        <div>Title:</div>
        <div>{movie.title}</div>
        <div>Director:</div>
        <div>{movie.director}</div>
        <div>Year:</div>
        <div>{movie.year}</div>
        <div>Metascore:</div>
        <div>{movie.metascore}</div>
        <img src={movie.posterUrl} alt="post url"/>
      </div>
    </div>
  )
}

Movie.defaultProps = {
  movie: {
    imdbId: ''
  }
}

Movie.propTypes = {
  movie: PropTypes.object,
  getMovie: PropTypes.func.isRequired
}

export default Movie