import React from 'react'

const Navbar = (props) => {
  const handleLogout = () => {
    props.logout()
    props.history.push('/login')
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Navbar