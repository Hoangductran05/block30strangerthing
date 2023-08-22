// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import './App.css'
import Home from "../pages/Home";
import Login from "../pages/Login";
import Post from "../pages/Post";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import { ShoppingCart } from "phosphor-react";

function App() {
  

  return (
    <>
      <div className="App">
        <div className="navbar">
          <div className="links">
          <Link to={"/"}>Home</Link>
          <Link to={"/post"}>Post</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/register"}>Register</Link>
          <Link to={"/cart"}> <ShoppingCart size={32}/></Link>
          </div>
        </div>

        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />

          </Routes>
        </div>

      </div>
    </>
  )
}

export default App
