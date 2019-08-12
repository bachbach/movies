import React from 'react'
import { PrimaryButton } from 'components/Button'
import './Navbar.scss'

const Navbar = (props) => {
  const handleLogout = () => {
    props.logout()
    props.history.push('/login')
  }

  return (
    <div className='navbar'>
      <PrimaryButton
        onClick={handleLogout}
        type='button'
      >
        Logout
      </PrimaryButton>
    </div>
  )
}

export default Navbar