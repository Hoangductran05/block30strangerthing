/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Base_Api from '../APIconfig';

const NewPostForm = () => {
  const [postData, setPostData] = useState({
    title: '',
    description: '',
    price: '',
    author: '',
    username: '',
    location: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const createPost = async () => {
    fetch(`${Base_Api}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Post created:', data);
          // Optionally, you can update your UI or perform other actions upon successful post creation
        })
        .catch(error => console.error('Error creating post:', error));
    };
  

  return (
    <div>
      <label>
        Title:
        <input type="text" name="title" value={postData.title} onChange={handleInputChange} />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={postData.description} onChange={handleInputChange} />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={postData.price} onChange={handleInputChange} />
      </label>
      <label>
        Author:
        <input type="text" name="author" value={postData.author} onChange={handleInputChange} />
      </label>
      <label>
        Username:
        <input type="email" name="username" value={postData.username} onChange={handleInputChange} />
      </label>
      <label>
        Location
        <input type="location" name="location" value={postData.location} onChange={handleInputChange} />
      </label>
      <label>
        Message:
        <textarea name="message" value={postData.message} onChange={handleInputChange} />
      </label>
     

      <button onClick={createPost}>Create Post</button>
    </div>
  );
};

export default NewPostForm;
