import React from 'react'
import ReactPaginate from 'react-paginate'
import PropTypes from 'prop-types'
import './Pagination.scss'

const Pagination = props => {
  return (
    <div className='pagination'>
      <ReactPaginate
        pageCount={props.pageCount}
        onPageChange={props.onPageChange}
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
  )
}

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func
}

export default Pagination