import React, { useEffect } from 'react'
import { Table } from 'components/Table'

const Movies = (props) => {
  useEffect(() => {
    props.getMovies()
  }, [])

  const headers = [ 'title', 'metascore', 'year' ]

  return (
    <div>
      <Table
        items={props.movies}
        headers={headers}
      />
    </div>
  )
}

export default Movies