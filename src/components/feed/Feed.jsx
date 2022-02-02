import React from 'react'
import CreatePost from './create-post/CreatePost'
import Post from './post/Post'
import './feed.css'
import { PostData } from '../../assets/data/PostData'

export default function Posts() {
  // const [isLiked, setIsLiked] = useState(false)
  // const [likes, setLikes] = useState()

  // const postContextValue = {
  //   handleLikeClick,
  //   handleLikesCount
  // }

  // function handleLikesCount(likes) {
  //   console.log(likes)
  //   setLikes(likes)
  // }

  // function handleLikeClick() {
  //   console.log('handler clicked')
  //   setLikes(isLiked ? likes - 1 : likes + 1)
  //   setIsLiked(!isLiked)
  // }

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
