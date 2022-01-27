import React from 'react'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import MoodRoundedIcon from '@mui/icons-material/MoodRounded'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import './post.css'
import MyImage from '../../../images/avatar.jpeg'

export default function Post() {
  return (
    <>
      <div className="card post-card">
        <div className="card-header wrapper">
          <AccountCircleIcon className="icon" />
          <div className="post-details">
            <p>
              <a className="user-name" href="#">
                Jeromy Berisford
              </a>
            </p>
            <div className="minutiae-wrapper">
              <a href="#">5 h</a>
              <span>&middot;</span>
              <PeopleAltIcon className="friends-icon-small" />
            </div>
          </div>
          <div className="options-wrapper">
            <button className="options-btn btn">
              <MoreHorizRoundedIcon className="options-icon" />
            </button>
          </div>
        </div>
        {/* body */}
        <div className="card-body">
          <div className="wrapper">
            <p className="description">Avatar!</p>
          </div>
          <div className="image-wrapper">
            <img className="post-image" src={MyImage} alt="" />
          </div>
        </div>
        {/* engagments */}
        <div className="wrapper engagements-wrapper">
          <div className="emojis-wrapper">
            <a href="#">
              <FavoriteRoundedIcon className="emoji" />
            </a>
            <a href="#">
              <ThumbUpAltOutlinedIcon className="emoji" />
            </a>
            <a href="#">
              <MoodRoundedIcon className="emoji" />
            </a>
          </div>
          <div>
            <a className="number-of-comments" href="#">
              24 comments
            </a>
            <a className="number-of-shares" href="#">
              9 shares
            </a>
          </div>
        </div>
        {/* card footer */}
        <div className="card-footer">
          <button className="btn">
            <ThumbUpAltOutlinedIcon className="like-icon" />
            <p>Like</p>
          </button>
          <button className="btn">
            <ChatBubbleOutlineIcon className="comment-icon" />
            <p>Comment</p>
          </button>
          <button className="btn">
            <ReplyOutlinedIcon className="share-icon" />
            <p>Share</p>
          </button>
        </div>
        {/* comments */}
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
              <SearchOutlinedIcon className="icon" />
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
                  assumenda aperiam delectus saepe dignissimos. Alias neque
                  libero ratione? Magni ipsam sit accusamus sed adipisci
                  voluptate sunt reiciendis harum! Distinctio, ipsam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
