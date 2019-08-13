import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import PropTypes from 'prop-types'
import { Table } from 'components/Table'
import './Movies.scss'

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
    <div className='movies'>
      <Table
        items={props.movies}
        headers={headers}
        showOrdinal
        sortableColumns={headers}
        sort={sort}
        onClickRow={onClickRow}
      />
      <div className='movies-paginate'>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName='pagination__container'
          activeClassName='pagination__page--active'
          pageClassName='pagination__page'
          nextClassName='pagination__nav pagination__nav--next'
          previousClassName='pagination__nav pagination__nav--previous'
          disabledClassName='pagination__nav--disabled'
          nextLinkClassName='pagination__nav__link pagination__nav__link--next'
          previousLinkClassName='pagination__nav__link pagination__nav__link--previous'
          previousLabel={'‹'}
          nextLabel={'›'}
        />
      </div>
    </div>
  )
}

Movies.propTypes = {
  getMovies: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired
}

export default Movies