import React, { useState } from 'react'
import CreatePost from './create-post/CreatePost'
import Post from './post/Post'
import './feed.css'

export const PostContext = React.createContext()

export default function Posts() {
  const [isLiked, setIsLiked] = useState(false)
  // const [like, setLike] = useState(likes)

  const postContextValue = {
    handleLikeClick
  }

  // function hanf

  function handleLikeClick(post) {
    console.log(post)
    console.log('handler clicked')
    // setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  return (
    <PostContext.Provider value={postContextValue}>
      <div className="feed-container">
        <CreatePost />
        <Post isLiked={isLiked} />
      </div>
    </PostContext.Provider>
  )
}
