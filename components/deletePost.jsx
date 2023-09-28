/* eslint-disable no-unused-vars */
import { useState } from 'react';
import React from 'react'
import Base_Api from '../APIconfig';
import PostsList from './allposts';

const DeletePost = () => {
    const [posts, setPosts] = useState([]);
    const deletePost = (postId) => {
        // Send a DELETE request to delete the post
        fetch(`${Base_Api}/posts/${postId}`, {
          method: 'DELETE'
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            setPosts(posts.filter(post => post._id !== postId)); // Remove the post from the UI
            console.log('Post deleted successfully.');
          })
          .catch(error => console.error('Error deleting post:', error));
      };
  return (
    <>
     {posts.map(post => (
        <div key={post._id}>
          <PostsList {...post} onDelete={() => deletePost(post._id)} />
          <button onClick={() => deletePost(post._id)}>Delete Post</button>
        </div>
      ))}
    </>
  )
}

export default DeletePost