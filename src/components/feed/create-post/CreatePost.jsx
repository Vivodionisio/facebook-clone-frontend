import React, { useState } from 'react'
import './create-post.css'
import FaceIcon from '@mui/icons-material/Face'
import { createPostIcons } from '../../../assets/buttons/buttons'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import Modal from './Modal'
import Button from '../../shared/Button'

export default function CreatePost() {
  const [isOpen, setIsOpen] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState(true)

  function onClose() {
    setIsOpen(false)
    setBtnDisabled(true)
  }

  const handleTextChange = e => {
    if (e.target.value.length === 0) {
      console.log('disabled')
      setBtnDisabled(true)
    } else {
      console.log('not disabled')
      setBtnDisabled(false)
    }
  }

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
      <Modal open={isOpen}>
        <div className="modal-header-wrapper">
          <h1 className="modal-title">Create Post</h1>
          <button className="modal-close-btn" onClick={onClose}>
            <CloseRoundedIcon className="modal-close-btn-icon" />
          </button>
        </div>
        <form className="modal modal-body-wrapper">
          <div className="user-details">
            <FaceIcon className="user-details-profile-icon" />
            <p>
              <a className="user-name" href="#">
                Jacamo Flys
              </a>
            </p>
          </div>

          <textarea
            onChange={handleTextChange}
            name="write-post"
            id="writePost"
            autoFocus
            placeholder={`What's on your mind, Jacamo?`}
            className="post-input"
          ></textarea>

          <Button type="submit" isDisabled={btnDisabled}>
            Post
          </Button>
        </form>
      </Modal>
    </div>
  )
}
