import React from 'react'
import './button.css'

export default function Button({ children, version, isDisabled }) {
  return (
    <Button disabled={isDisabled} className={`btn-basic`}>
      {children}
    </Button>
  )
}

Button.defaultProps = {
  version: 'primary',
  isDisabled: true
}
