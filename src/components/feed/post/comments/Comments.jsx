import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded'
import FaceIcon from '@mui/icons-material/Face'
import './comments.css'

export default function Comments({ showWriteComment }) {
  const [showComments, setShowComments] = useState(false)
  const handleSetShowComments = () => {
    if (showComments === false) {
      setShowComments(!showComments)
    }
  }
  return (
    <>
      <div className="comments-wrapper wrapper">
        {showWriteComment && (
          <div className="write-comment-wrapper">
            <div className="relevant-wrapper">
              <button className="btn">
                Most relevant
                <ArrowDropDownRoundedIcon />
              </button>
            </div>
            <div className="write-comment-container">
              <FaceIcon className="account-icon" />
              <div className="write-comment-pill-wrapper">
                <input
                  className="write-comment-field"
                  placeholder="Write a comment"
                />
              </div>
            </div>
            <div className="comments-btn-wrapper">
              <button className="btn" onClick={handleSetShowComments}>
                Comments
              </button>
            </div>
          </div>
        )}

        {showComments && (
          <div>
            <div className="comment-bubble-container">
              <AccountCircleIcon className="account-icon" />
              <div className="bubble-wrapper">
                <div className="comment-wrapper">
                  <a href="#" className="comment-name">
                    Popeye
                  </a>
                  <p>Amet consectetur adipisicing...</p>
                </div>
              </div>
              <div className="line-break"></div>
              <div className="comment-engagememnt">
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
            <div className="comment-bubble-container">
              <AccountCircleIcon className="account-icon" />
              <div className="bubble-wrapper">
                <div className="comment-wrapper">
                  <a href="#" className="comment-name">
                    Olive Oyl
                  </a>
                  <p>
                    Nam atque repellendus animi perspiciatis, aliquid deserunt a
                    earum labore magnam voluptatum, ab possimus laudantium iste
                    ipsam quisquam repudiandae.
                  </p>
                </div>
              </div>
              <div className="line-break"></div>
              <div className="comment-engagememnt">
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
          </div>
        )}
      </div>
    </>
  )
}