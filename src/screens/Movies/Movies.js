import React, { useEffect } from 'react'

const Movies = (props) => {
  useEffect(() => {
    props.getMovies()
  }, [])

  return (
    <div>
      {
        props.movies.map(movie => (
          <div key={movie.id}>
            <span>{movie.title}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Movies