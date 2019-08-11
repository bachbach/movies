import React from 'react'
import PropTypes from 'prop-types'
import './Table.scss'

const Table = props => {

  const sort = (header, dir) => () => props.sort(header, dir) 

  const getHeader = (header) => props.sortableColumns.indexOf(header) >= 0
  ? <span>
      {header}
      <span onClick={sort(header, 1)}>&#9650;</span>
      <span onClick={sort(header, -1)}>&#9660;</span>
    </span>
  : <span>{header}</span>

  const getHeaders = () => {
    const headers = props.headers.map((header, index) => (
      <td
        key={`table-header-${index + 1}`}
      >
        {getHeader(header)}
      </td>
    ))
    return props.showOrdinal ? [ <td key="table-header-0">No.</td>, ...headers ] : headers
  }

  const getCell = (item) => props.headers.map((header, index) => (
    <td key={`table-cell-${index + 1}`}>{item[header]}</td>
  ))

  const getBody = () => {
    return props.items.map((item, index) => (
      <tr key={`table-row-${index + 1}`}>
        {
          props.showOrdinal
          ? [ <td key="table-row-0">{index + 1}</td>, ...getCell(item) ]
          : getCell(item)
        }
      </tr>
    )) 
  }

  return (
    <table className="table">
      <thead>
        <tr>
          {getHeaders()}
        </tr>
      </thead>
      <tbody>
        {getBody()}
      </tbody>
    </table>
  )
}

Table.defaultProps = {
  sort: () => {}
}

Table.propTypes = {
  headers: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  showOrdinal: PropTypes.bool,
  sortableColumns: PropTypes.array,
  sort: PropTypes.func
}

export default Table