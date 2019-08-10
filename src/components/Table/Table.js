import React from 'react'
import PropTypes from 'prop-types'
import './Table.scss'

const Table = props => {
  const generateHeaders = () => props.headers.map(header => (
    <td>{header}</td>
  ))

  const generateBody = () => props.items.map(item => (
    <tr>
      {props.headers.map(header => (
        <td>{item[header]}</td>
      ))}
    </tr>
  )) 

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
  items: PropTypes.array.isRequired
}

export default Table