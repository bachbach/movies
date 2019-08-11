import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const Movie = props => {
  useEffect(() => {
    console.log(props)
    props.getMovie(props.match.params.id)
  }, [])

  return (
    <div>
      hello from movie screen!
    </div>
  )
}

Movie.defaultProps = {
  movie: {
    _id: ''
  }
}

Movie.propTypes = {
  movie: PropTypes.object
}

export default Movie