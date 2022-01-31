import React from 'react'
import './post-engagements.css'
import EngagementsTally from './engagements-tally/EngagementsTally'
import CommentLikeShare from './comment-like-share/CommentLikeShare'
import Comments from './comments/Comments'

export default function PostEngagements({ likes, shares, comments }) {
  return (
    <>
      <EngagementsTally likes={likes} shares={shares} comments={comments} />
      <CommentLikeShare />
      <Comments />
    </>
  )
}
