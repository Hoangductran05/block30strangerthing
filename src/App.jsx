import { Route, Routes, Link } from "react-router-dom"
import './App.css'
import Home from "../pages/Home";
import Login from "../pages/Login";
import Post from "../pages/Post";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

function App() {
  

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to={"/"}>Home</Link>
          <Link to={"/post"}>Post</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/register"}>Register</Link>

        </div>

        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />

          </Routes>
        </div>

      </div>
    </>
  )
}

export default App
