import React, { useState } from 'react'
import './create-post.css'
import FaceIcon from '@mui/icons-material/Face'
import { createPostIcons } from '../../../assets/buttons/buttons'
import Modal from './modal/Model'

export default function CreatePost() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="create-post card">
      <div className="card-header">
        <FaceIcon className="icon" />
        <button onClick={() => setIsOpen(true)} className="create-post-btn btn">
          Whats on your mind, Jacamo?
        </button>
      </div>
      <div className="card-footer">
        {createPostIcons.map(icon => {
          return (
            <button
              onClick={() => setIsOpen(true)}
              key={icon.id}
              className="btn"
            >
              <p>{icon.name}</p>
              <icon.icon className="icon" />
            </button>
          )
        })}
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Fancy Modal
      </Modal>
    </div>
  )
}
