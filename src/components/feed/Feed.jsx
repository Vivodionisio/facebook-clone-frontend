import React from 'react'
import CreatePost from './create-post/CreatePost'
import FeedPost from './post/FeedPost'
import './feed.css'

export default function Posts() {
  return (
    <div className="feed-container">
      <CreatePost />
      <FeedPost />
      <FeedPost />
    </div>
  )
}
