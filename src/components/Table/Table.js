import React from 'react'
import PropTypes from 'prop-types'
import './Table.scss'

const Table = props => {
  const generateHeaders = () => {
    const headers = props.headers.map((header, index) => (
      <td key={`table-header-${index + 1}`}>{header}</td>
    ))
    return props.showOrdinal ? [ <td key="table-header-0">No.</td>, ...headers ] : headers
  }

  const generateCell = (item) => props.headers.map((header, index) => (
    <td key={`table-cell-${index + 1}`}>{item[header]}</td>
  ))

  const generateBody = () => {
    return props.items.map((item, index) => (
      <tr key={`table-row-${index + 1}`}>
        {
          props.showOrdinal
          ? [ <td key="table-row-0">{index + 1}</td>, ...generateCell(item) ]
          : generateCell(item)
        }
      </tr>
    )) 
  }

  return (
    <table className="table">
      <thead>
        <tr>
          {generateHeaders()}
        </tr>
      </thead>
      <tbody>
        {generateBody()}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  headers: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  showOrdinal: PropTypes.bool
}

export default Table