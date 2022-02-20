import React, { useState } from 'react'
import './login.css'
import SignUpModal from './SignUpModal'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

export default function Login() {
  const [isOpen, setIsOpen] = useState(false)

  function onClose() {
    setIsOpen(false)
  }
  return (
    <>
      <div className="login-container">
        <div className="header-wrapper ">
          <h1>Facebook</h1>
          <h2>
            Facebook helps you connect and share with the people in your life.
          </h2>
        </div>
        <form>
          <input type="text" placeholder="Email address or phone number" />
          <input type="text" placeholder="Password" />
          <input type="submit" value="Log In" />
          <div className="forgotton-password-btn-wrapper">
            <span className="forgotton-password">Forgotten password?</span>
          </div>
          <button onClick={() => setIsOpen(true)} className="new-account-btn">
            Create new account
          </button>
        </form>
      </div>
      <SignUpModal open={isOpen}>
        <div className="modal-header-wrapper">
          <h1 className="modal-title">Create Post</h1>
          <button className="modal-close-btn" onClick={onClose}>
            <CloseRoundedIcon className="modal-close-btn-icon" />
          </button>
        </div>

        <p>hello</p>
      </SignUpModal>
    </>
  )
}
