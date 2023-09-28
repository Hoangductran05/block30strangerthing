/* eslint-disable no-unused-vars */
import { useState } from 'react';
import React from 'react'
import Base_Api from '../APIconfig';




export const DeletePost = async (postId) => {
  const response = await fetch(`${Base_Api}/posts/${postId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete post");
  }

  return response.json();
};


  
  

