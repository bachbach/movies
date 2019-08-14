import React from 'react'
import PropTypes from 'prop-types'
import './Table.scss'

const Table = props => {

  const sort = (header, dir) => () => props.sort(header, dir) 

  const getHeader = (header) => props.sortableColumns.indexOf(header) >= 0
  ? <span>
      {header}
      <span className="table__sort-button" onClick={sort(header, 1)}>&#9650;</span>
      <span className="table__sort-button" onClick={sort(header, -1)}>&#9660;</span>
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

  const onClickRow = item => () => props.onClickRow(item)  
  //@TODO Bug: oridinalnumber always starts from 0. Probably keeping in reducer all the stuff will fix it. 
  const getBody = () => {
    return props.items.map((item, index) => (
      <tr
        key={`table-row-${index + 1}`}
        onClick={onClickRow(item)}
      >
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
  sort: () => {},
  onClickRow: () => {}
}

Table.propTypes = {
  headers: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  showOrdinal: PropTypes.bool,
  sortableColumns: PropTypes.array,
  sort: PropTypes.func,
  onClickRow: PropTypes.func
}

export default Table