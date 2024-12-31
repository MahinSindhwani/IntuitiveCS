import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home-container">
      <h1>Welcome to Intuitive CS</h1>
      <p>Select an option to continue:</p>
      <div id="home-links">
        <Link to="/app">Relations</Link>
        <Link to="/functions">Functions</Link>
      </div>
    </div>
  );
};

export default Home;
