import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./Home.jsx";
import Functions from "./Functions.jsx";
import HamburgerMenu from "./HamburgerMenu.jsx";

function Main() {
  return (
    <Router basename="/IntuitiveCS/">
      <HamburgerMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} />
        <Route path="/functions" element={<Functions />} />
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
