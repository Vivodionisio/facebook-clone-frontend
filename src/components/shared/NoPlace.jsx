import React from 'react'

export default function NoPlace() {
  const NO_PLACE_CONTAINER = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '80px'
  }
  const NO_PLACE_MESSAGE = {
    fontSize: '21px',
    fontWeight: 400
  }
  return (
    <div style={NO_PLACE_CONTAINER}>
      <h3 style={NO_PLACE_MESSAGE}>This page is not included</h3>
    </div>
  )
}
