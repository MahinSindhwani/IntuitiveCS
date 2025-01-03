import React, { useCallback, useState, useEffect } from "react";
import {
  ReactFlow,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Handle,
} from "@xyflow/react";

import FloatingEdge from "./FloatingEdge"; // Ensure consistency with App.jsx
import CustomNode from "./CustomNode"; // Use the same CustomNode component
import CustomConnectionLine from "./CustomConnectionLine"; // Use CustomConnectionLine for edge connections

import { analyzeFunctionTypes } from "./FunctionsLogic"; // Import logic for function type analysis

import "./index.css";
// import { Handle } from "react-flow-renderer";

const edgeTypes = {
  floating: FloatingEdge, // Match the App file's edge styling
};

const nodeTypes = {
  custom: CustomNode, // Match the App file's node styling
};

const rfStyle = {
  backgroundColor: "#F7F9FB",
};

const defaultEdgeOptions = {
  type: "floating", // Ensure the floating edge is default
  animated: true,
  style: { stroke: "#293a42", strokeWidth: 3 },
};

const connectionLineStyle = {
  stroke: "#293a42",
  strokeWidth: 3,
};

const initialNodes = [
  {
    id: "A",
    type: "group",
    position: { x: 0, y: 0 },
    data: { label: "Parent A" },
    style: { width: 200, height: 350 },
  },
  {
    id: "A-1",
    type: "custom",
    data: { label: "a" },
    position: { x: 50, y: 20 },
    parentId: "A",
    extent: "parent",
    draggable: false,
    className: "group-a-node",
  },
  {
    id: "A-2",
    type: "custom",
    data: { label: "b" },
    position: { x: 50, y: 120 },
    parentId: "A",
    extent: "parent",
    draggable: false,
    className: "group-a-node",
  },
  {
    id: "A-3",
    type: "custom",
    data: { label: "c" },
    position: { x: 50, y: 220 },
    parentId: "A",
    extent: "parent",
    draggable: false,
    className: "group-a-node",
  },
  {
    id: "B",
    type: "group",
    position: { x: 350, y: 0 },
    data: { label: "Parent B" },
    style: { width: 200, height: 350 },
  },
  {
    id: "B-1",
    type: "custom",
    data: { label: "x" },
    position: { x: 50, y: 20 },
    parentId: "B",
    extent: "parent",
    draggable: false,
    className: "group-b-node",
  },
  {
    id: "B-2",
    type: "custom",
    data: { label: "y" },
    position: { x: 50, y: 120 },
    parentId: "B",
    extent: "parent",
    draggable: false,
    className: "group-b-node",
  },
  {
    id: "B-3",
    type: "custom",
    data: { label: "z" },
    position: { x: 50, y: 220 },
    parentId: "B",
    extent: "parent",
    draggable: false,
    className: "group-b-node",
  },
];

const Functions = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);
  const [functionType, setFunctionType] = useState("Unknown");

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (connection) =>
      setEdges((eds) =>
        addEdge(
          {
            ...connection,
            type: "floating", // Ensure the custom edge type is used
            animated: true,
            style: { stroke: "#293a42", strokeWidth: 3 }, // Match App.jsx
          },
          eds
        )
      ),
    []
  );

  useEffect(() => {
    setFunctionType(analyzeFunctionTypes(nodes, edges)); // Analyze the function type dynamically
  }, [nodes, edges]);

  return (
    <div id="layout">
      <div id="sidebar">
        <h3>Function Type:</h3>
        <p>{functionType}</p>
      </div>
      <div id="main-area">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          fitViewOptions={{
            padding: 0.5, // Adjust padding to control zoom level
          }}
          edgeTypes={edgeTypes}
          nodeTypes={nodeTypes}
          style={rfStyle}
          connectionLineComponent={CustomConnectionLine}
          connectionLineStyle={connectionLineStyle}
          defaultEdgeOptions={defaultEdgeOptions}
        >
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Functions;
