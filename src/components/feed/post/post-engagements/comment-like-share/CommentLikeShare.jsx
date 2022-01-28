import React from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'

export default function CommentLikeShare() {
  return (
    <>
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
    </>
  )
}
