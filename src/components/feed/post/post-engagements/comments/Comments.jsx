import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import './comments.css'

export default function Comments() {
  return (
    <>
      <div className="comments-wrapper wrapper">
        <div className="relevant-wrapper">
          <button className="btn">
            Most relevant
            <ArrowDropDownRoundedIcon />
          </button>
        </div>
        <div className="write-comment-container">
          <AccountCircleIcon className="account-icon" />
          <div className="write-comment-pill-wrapper">
            {/* <SearchOutlinedIcon className="icon" /> */}
            <input
              className="write-comment-field"
              placeholder="Write a comment"
            />
          </div>
        </div>
        <div className="comment-bubble-container">
          <AccountCircleIcon className="account-icon" />
          <div className="bubble-wrapper">
            <div className="comment-wrapper">
              <a href="#" className="comment-name">
                Popeye
              </a>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                assumenda aperiam delectus saepe dignissimos. Alias neque libero
                ratione? Magni ipsam sit accusamus sed adipisci voluptate sunt
                reiciendis harum! Distinctio, ipsam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
