import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home-container">
      <h1>Welcome to the React App</h1>
      <p>Select an option to continue:</p>
      <div id="home-links">
        <Link to="/app">Go to App Page</Link>
        <Link to="/functions">View Functions Page</Link>
      </div>
    </div>
  );
};

export default Home;
