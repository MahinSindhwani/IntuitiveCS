import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Counter from "./counter.jsx";

function Main() {
  const [nodeCount, setNodeCount] = useState(4);

  return (
    <div id="layout">
      <div id="sidebar">
        <Counter value={nodeCount} onChange={setNodeCount} />
        <div id="node-info">
          <h2>Node Information</h2>
          <p>Connections will be displayed in the diagram area on the right or integrated as needed.</p>
        </div>
      </div>
      <div id="main-area">
        <App nodeCount={nodeCount} />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
