import React from 'react'
import './post-body.css'
import MyImage from '../../../../images/avatar.jpeg'

export default function PostBody() {
  return (
    <div className="card-body">
      <div className="wrapper">
        <p className="description">Avatar!</p>
      </div>
      <div className="image-wrapper">
        <img className="post-image" src={MyImage} alt="" />
      </div>
    </div>
  )
}
