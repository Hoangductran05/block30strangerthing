import PostsList from "../components/allposts";
import NewPostForm from "../components/createPost";
import { useState, useEffect } from "react";
import Base_Api from "../APIconfig";


export default function Post() {
  const [showForm, setShowForm] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   
    fetchPostsFromAPI()
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const fetchPostsFromAPI = async () => {
  
    const response = await fetch(`${Base_Api}/posts`);
    const data = await response.json();
    return data;
  };
  

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleDeletePost = async (postId) => {
    try {
      
      await deletePostFromAPI(postId);

      // Update the posts state after successful deletion
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const deletePostFromAPI = async (postId) => {
    // Send a DELETE request to delete the post with the specified postId
    // Replace 'apiEndpoint' with the actual endpoint to delete a post
    await fetch(`${Base_Api}/posts/${postId}`, {
      method: "DELETE"
    });
  };

  return (
  <>
    <div>
      <div>
        <h1>Create a New Post</h1>
        <button onClick={toggleForm}>
          {showForm ? 'Hide Form' : 'Show Form'}
        </button>

        {showForm && <NewPostForm />}
      </div>
      <PostsList posts={posts} onDeletePost={handleDeletePost}  />
     
    </div>
  </>
  )
}