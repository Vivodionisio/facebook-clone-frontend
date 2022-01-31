import React from 'react'
import './engagements-tally.css'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import MoodRoundedIcon from '@mui/icons-material/MoodRounded'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'

export default function EngagementsTally({ likes, shares, comments }) {
  return (
    <>
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
          <a className="likes-count">{likes}</a>
        </div>

        <div>
          <a className="number-of-comments" href="#">
            {comments}
          </a>
          <a className="number-of-shares" href="#">
            {shares}
          </a>
        </div>
      </div>
    </>
  )
}
