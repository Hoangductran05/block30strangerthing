/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

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

  const createPost = () => {
    // Use the postData to create a new post
    console.log('Creating post:', postData);
    // You can send the postData to your server or perform any other actions here
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
