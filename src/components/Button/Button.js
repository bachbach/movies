import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Button.scss'

const Button = ({ children, primary, secondary, type, disabled, className, onClick }) => {
  const buttonClass = classNames({
    button: true,
    'button--primary': primary,
    'button--secondary': secondary,
    [className]: className.length > 0
  })


  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonClass}
      onClick={onClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  className: '',
  onClick: () => {}
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  primary: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export const PrimaryButton = props => <Button {...props} primary>{props.children}</Button>
export const SecondaryButton = props => <Button {...props} secondary>{props.children}</Button>