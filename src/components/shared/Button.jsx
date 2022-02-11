import React from 'react'
import './button.css'

export default function Button({ children, version, isDisabled }) {
  return (
    <button disabled={isDisabled} className="btn-basic btn-black">
      {children}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary',
  isDisabled: true
}
