import PostsList from "../components/allposts";
import NewPostForm from "../components/createPost";
import { useState } from "react";
import DeletePost from "../components/deletePost";

export default function Post() {
  const [showForm, setShowForm] = useState(false);
  

  const toggleForm = () => {
    setShowForm(!showForm);
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
      <PostsList  />
      <DeletePost />
    </div>
  </>
  )
}