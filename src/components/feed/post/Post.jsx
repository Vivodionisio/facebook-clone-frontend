import React, { useState, useContext } from 'react'
import { PostContext } from '../Feed'
import './feed-post.css'
import './post-header.css'
import './post-engagements.css'
import './post-body.css'
import './comments.css'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import MoodRoundedIcon from '@mui/icons-material/MoodRounded'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded'
import FaceIcon from '@mui/icons-material/Face'
import { PostData } from '../../../assets/data/PostData'

console.log(PostData)

export default function Post({ isLiked }) {
  const { handleLikeClick } = useContext(PostContext)

  return (
    <>
      {PostData.map(post => {
        return (
          <div key={post.id} className="card post-card">
            {/* header */}
            <div className="card-header wrapper post">
              <AccountCircleIcon className="icon" />
              {post.online && <div className="online"></div>}
              <div className="post-details">
                <p>
                  <a className="user-name" href="#">
                    {post.userName}
                  </a>
                </p>
                <div className="minutiae-wrapper">
                  <a href="#">{post.date}</a>
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
            {/* Body */}
            <div className="card-body">
              {post.desc && (
                <div className="wrapper">
                  <p className="description">{post.desc}</p>
                </div>
              )}
              {post.photo && (
                <div className="image-wrapper">
                  <img className="post-image" src={post.photo} alt="" />
                </div>
              )}
            </div>

            {/* Post engagements */}
            {/* Tally */}
            <div className="wrapper engagements-wrapper">
              <div className="emojis-wrapper">
                <FavoriteRoundedIcon className="emoji" />
                <ThumbUpAltOutlinedIcon className="emoji" />
                <MoodRoundedIcon className="emoji" />
                <span className="likes-count">{post.likes}</span>
              </div>
              <div>
                <span className="number-of-comments" href="#">
                  {post.comments}
                </span>
                <span className="number-of-shares" href="#">
                  {post.shares}
                </span>
              </div>
            </div>

            {/* Like Comment Share */}

            <div className="card-footer">
              <button onClick={() => handleLikeClick(post)} className="btn">
                {isLiked ? (
                  <ThumbUpIcon className="like-icon" />
                ) : (
                  <ThumbUpAltOutlinedIcon className="like-icon" />
                )}

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

            {/* <Comments /> */}

            <div className="comments-wrapper wrapper">
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
                      Nam atque repellendus animi perspiciatis, aliquid deserunt
                      a earum labore magnam voluptatum, ab possimus laudantium
                      iste ipsam quisquam repudiandae.
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
          </div>
        )
      })}
      <div className="bottom"></div>
    </>
  )
}
