import React from 'react'
import './engagements-tally.css'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import MoodRoundedIcon from '@mui/icons-material/MoodRounded'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'

export default function EngagementsTally() {
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
    </>
  )
}
