import React from 'react'
import CreatePost from './create-post/CreatePost'
import Post from './post/Post'
import './feed.css'
import { PostData } from '../../assets/data/PostData'

export default function Posts() {
  return (
    <div className="feed-container">
      <CreatePost />
      {PostData.map(post => {
        console.log(post.id)

        return <Post key={post.id} post={post} />
      })}
    </div>
  )
}
