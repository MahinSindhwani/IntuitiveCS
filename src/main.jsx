import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Counter from "./counter.jsx";

function Main() {
  const [nodeCount, setNodeCount] = useState(3);
  const [relations, setRelations] = useState({});
  return (
    <div id="layout">
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
      <div id="main-area">
        <App nodeCount={nodeCount} setRelations={setRelations} />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
