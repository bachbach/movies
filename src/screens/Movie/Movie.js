import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Movie.scss'

const Movie = ({ movie, match, getMovie }) => {
  useEffect(() => {
    getMovie(match.params.id)
  }, [])

  const getActors = () => movie.actors.map(actor => (
    <span
      key={actor.imdbId}
      className="movie__details__list"
    >
      {actor.name}
    </span>)
  )
  const getGenres = () => movie.genres.map(genre => (
    <span
      key={genre}
      className="movie__details__list"
    >
      {genre}
    </span>)
  )

  return (
    <div className="movie">
      <Link to="/movies">Back to list</Link>
      <h1>{movie.title}</h1>
      <div className="movie__details">
      <div>
        <div className="movie__details__item">
          <div className="label">Director:</div>
          <div className="value">{movie.director}</div>
        </div>
        <div className="movie__details__item">
          <div className="label">Year:</div>
          <div className="value">{movie.year}</div>
        </div>
        <div className="movie__details__item">
          <div className="label">Metascore:</div>
          <div className="value">{movie.metascore}</div>
        </div>
        <div className="movie__details__item">
          <div className="label">Actors: </div>
          <div className="value">{getActors()}</div>
        </div>
        <div className="movie__details__item">
          <div className="label">Genres: </div>
          <div className="value">{getGenres()}</div>
        </div>
      </div>
      <div>
        <img src={movie.posterUrl} alt="post url"/>
      </div>
      </div>
    </div>
  )
}

Movie.defaultProps = {
  movie: {
    imdbId: '',
    actors: [],
    genres: []
  }
}

Movie.propTypes = {
  movie: PropTypes.object,
  getMovie: PropTypes.func.isRequired
}

export default Movie