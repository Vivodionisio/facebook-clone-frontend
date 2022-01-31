import React from 'react'
import './post-body.css'

export default function PostBody({ desc, image }) {
  return (
    <div className="card-body">
      {desc && (
        <div className="wrapper">
          <p className="description">{desc}</p>
        </div>
      )}
      {image && (
        <div className="image-wrapper">
          <img className="post-image" src={image} alt="" />
        </div>
      )}
    </div>
  )
}
