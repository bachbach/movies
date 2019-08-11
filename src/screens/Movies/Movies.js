import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import PropTypes from 'prop-types'
import { Table } from 'components/Table'

const perPage = 5

const Movies = (props) => {
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    props.getMovies(`limit=${perPage}&page=${currentPage + 1}`)
  }, [currentPage])

  const headers = [ 'title', 'metascore', 'year' ]
  const pageCount = props.total / perPage

  const handlePageClick = data => setCurrentPage(data.selected)

  const sort = (column, dir) => (
    props.getMovies(`limit=${perPage}&page=${currentPage + 1}&sortBy=${column}&sortDir=${dir}`)
  )

  const onClickRow = (movie) => props.history.push(`/movies/${movie.imdbId}`)

  return (
    <div>
      <Table
        items={props.movies}
        headers={headers}
        showOrdinal
        sortableColumns={headers}
        sort={sort}
        onClickRow={onClickRow}
      />
      <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageClick}
          previousLabel={'previous'}
          nextLabel={'next'}
      />
    </div>
  )
}

Movies.propTypes = {
  getMovies: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired
}

export default Movies