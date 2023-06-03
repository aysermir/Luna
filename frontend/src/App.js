import React from "react";
import "./App.css";
import LoginButton from "./components/login";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">My Social Media App</div>
        <input type="text" placeholder="Search" />
      </header>
      <div className="content">
        <div className="post">
          <img src="image1.jpg" alt="Post 1" />
          <p>This is the first post.</p>
        </div>
        <div className="post">
          <img src="image2.jpg" alt="Post 2" />
          <p>This is the second post.</p>
        </div>
        {/* Add more posts here */}
      </div>
    </div>
  );
}

export default App;
