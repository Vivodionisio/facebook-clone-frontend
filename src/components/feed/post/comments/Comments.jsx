import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded'
import FaceIcon from '@mui/icons-material/Face'
import './comments.scss'

export default function Comments({ showWriteComment }) {
  const [showComments, setShowComments] = useState(false)
  const handleSetShowComments = () => {
    if (showComments === false) {
      setShowComments(!showComments)
    }
  }
  return (
    <>
      <div className="Comments wrapper">
        {showWriteComment && (
          <div className="write-comment">
            <div className="filter">
              <button className="btn">
                Most relevant
                <ArrowDropDownRoundedIcon />
              </button>
            </div>
            <div className="input-container">
              <FaceIcon className="account-icon" />
              <div className="pill">
                <input placeholder="Write a comment" autoFocus />
              </div>
            </div>
            <div className="comments-btn">
              <button className="btn" onClick={handleSetShowComments}>
                Comments
              </button>
            </div>
          </div>
        )}

        {showComments && (
          <>
            <div className="bubble">
              <AccountCircleIcon className="account-icon" />
              <div className="comment">
                <a href="#">Popeye</a>
                <p>Amet consectetur adipisicing...</p>
              </div>
              <div className="line-break"></div>
              <div className="engagements">
                <a className="like" href="#">
                  Like
                </a>
                <a className="reply" href="#">
                  Reply
                </a>
                <a className="date" href="#">
                  1 h
                </a>
              </div>
            </div>
            <div className="bubble">
              <AccountCircleIcon className="account-icon" />
              <div className="comment">
                <a href="#">Olive Oyl</a>
                <p>
                  Nam atque repellendus animi perspiciatis, aliquid deserunt a
                  earum labore magnam voluptatum, ab possimus laudantium iste
                  ipsam quisquam repudiandae.
                </p>
              </div>
              <div className="line-break"></div>
              <div className="engagements">
                <a className="like" href="#">
                  Like
                </a>
                <a className="reply" href="#">
                  Reply
                </a>
                <a className="date" href="#">
                  1 h
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
