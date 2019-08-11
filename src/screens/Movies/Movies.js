import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import PropTypes from 'prop-types'
import { Table } from 'components/Table'

const perPage = 5

const Movies = (props) => {
  useEffect(() => {
    props.getMovies(`limit=${perPage}`)
  }, [])

  const headers = [ 'title', 'metascore', 'year' ]
  const pageCount = props.total / perPage

  const handlePageClick = data => {
    let selected = data.selected
    props.getMovies(`limit=${perPage}&page=${selected + 1}`);
  };

  return (
    <div>
      <Table
        items={props.movies}
        headers={headers}
        showOrdinal
      />
      <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageClick}
          previousLabel={'previous'}
          nextLabel={'next'}
          // breakLabel={'...'}
          // breakClassName={'break-me'}
          // containerClassName={'pagination'}
          // subContainerClassName={'pages pagination'}
          // activeClassName={'active'}
      />
    </div>
  )
}

Movies.propTypes = {
  getMovies: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired
}

export default Movies