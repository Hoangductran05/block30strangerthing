/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Base_Api from '../APIconfig';
import Postcard from './postcard';

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${Base_Api}/posts`);
      if (response.ok) {
        const result = await response.json();
        // Assuming result.posts is the array of posts within the result object
        setPosts(result.data.posts);
        console.log(result);
      } else {
        console.error('Failed to fetch posts');
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div>
      <h1>All Posts</h1>
      {
        posts.map((post) => (
            <Postcard key={post._id} post={post} />
        ))
      }
    </div>
  );
}

export default PostsList;
