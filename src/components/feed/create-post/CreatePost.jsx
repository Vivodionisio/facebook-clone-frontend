import React from 'react'
import './create-post.css'
import FaceIcon from '@mui/icons-material/Face'
import { createPostIcons } from '../../../assets/buttons/buttons'

export default function CreatePost() {
  return (
    <div className="create-post card">
      <div className="card-header">
        <FaceIcon className="icon" />
        <button className="create-post-btn btn">
          Whats on your mind, Jacamo?
        </button>
      </div>
      <div className="card-footer">
        {createPostIcons.map(icon => {
          return (
            <button key={icon.id} className="btn">
              <p>{icon.name}</p>
              <icon.icon className="icon" />
            </button>
          )
        })}
      </div>
    </div>
  )
}
