import React from 'react'
import './feed-post.css'
import PostHeader from './post-header/PostHeader'
import PostBody from './post-body/PostBody'
import PostEngagements from './post-engagements/PostEngagements'

export default function FeedPost() {
  return (
    <>
      <div className="card post-card">
        <PostHeader />
        <PostBody />
        <PostEngagements />
      </div>
    </>
  )
}
