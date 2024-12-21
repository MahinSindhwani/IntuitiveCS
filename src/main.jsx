// src/main.jsx
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Counter from "./counter.jsx";
import HamburgerMenu from "./HamburgerMenu.jsx"; // Import the HamburgerMenu component

function Main() {
  const [nodeCount, setNodeCount] = useState(3);
  const [relations, setRelations] = useState({});

  return (
    <div id="layout">
      {/* Hamburger Menu */}
      <HamburgerMenu />

      {/* Sidebar */}
      <div id="sidebar">
        <Counter value={nodeCount} onChange={setNodeCount} />
        <div id="node-info">
          <h2>Node Information</h2>
          <div>
            <h3>Relation Properties:</h3>
            <p>Reflexive: {relations.reflexive ? "Yes" : "No"}</p>
            <p>Anti-Reflexive: {relations.antiReflexive ? "Yes" : "No"}</p>
            <p>Symmetric: {relations.symmetric ? "Yes" : "No"}</p>
            <p>Anti-Symmetric: {relations.antiSymmetric ? "Yes" : "No"}</p>
            <p>Transitive: {relations.transitive ? "Yes" : "No"}</p>
          </div>
        </div>
      </div>

      {/* Main Area */}
      <div id="main-area">
        <App nodeCount={nodeCount} setRelations={setRelations} />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
