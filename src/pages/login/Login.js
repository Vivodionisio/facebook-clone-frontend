import React from 'react'
import './login.css'

export default function Login() {
  return (
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
        <span className="forgotton-password">Forgotten password?</span>
        <button className="new-account-btn">Create new account</button>
      </form>
    </div>
  )
}
