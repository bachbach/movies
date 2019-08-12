import React from 'react'
import { PrimaryButton } from 'components/Button'

const Navbar = (props) => {
  const handleLogout = () => {
    props.logout()
    props.history.push('/login')
  }

  return (
    <div>
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