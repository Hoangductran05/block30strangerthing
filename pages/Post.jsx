/* eslint-disable no-unused-vars */
import Base_Api from "../APIconfig"
import React, { useState, useEffect } from "react"

export default function Post() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch(`${Base_Api}/posts`)
                const result = await response.json()
                setPosts(result)
                console.log(result)
                console.log(typeof result)
            } catch (error) {
                console.error(error);
            }
        }
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>All Posts</h1>
            {posts.length > 0 ? (
        <ul>
          {posts.data.posts.map((post) => (
            <li key={post.id}>
              <p>Title: {post.title}</p>
              <p>Description: {post.description}</p>
              <p>Price: {post.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading posts...</p>
      )}    
        </div>
    )
}
