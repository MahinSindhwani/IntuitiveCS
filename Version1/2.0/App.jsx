import React, { useState, useCallback } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import ColorSelectorNode from "./ColorSelectorNode";
import "./index.css";

const initBgColor = "#1A192B";

const connectionLineStyle = { stroke: "#fff" };
const snapGrid = [20, 20];
const nodeTypes = {
  selectorNode: ColorSelectorNode,
};

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

// Define initial nodes and edges
const initialNodes = [
  {
    id: "1",
    type: "default",
    data: { label: "An input node" },
    position: { x: 0, y: 50 },
    sourcePosition: "right",
  },
  {
    id: "2",
    type: "selectorNode",
    data: { color: initBgColor },
    style: { border: "1px solid #777", padding: 10 },
    position: { x: 300, y: 50 },
    sourcePosition: "right",
    targetPosition: "left",
  },
  {
    id: "3",
    type: "output",
    data: { label: "Output A" },
    position: { x: 650, y: 25 },
    targetPosition: "left",
  },
  {
    id: "4",
    type: "output",
    data: { label: "Output B" },
    position: { x: 650, y: 100 },
    targetPosition: "left",
  },
];

const initialEdges = [];

const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [bgColor, setBgColor] = useState(initBgColor);
  const [connectionsList, setConnectionsList] = useState([]); // Global connection list

  // Function to extract connections dynamically from edges
  const updateConnectionsList = (edges) => {
    const updatedConnections = edges.map((edge) => [edge.source, edge.target]);
    setConnectionsList(updatedConnections);
  };

  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => {
        const newEdges = addEdge(
          {
            ...params,
            animated: true,
            style: { stroke: "#fff" },
            markerEnd: { type: "arrow", width: 20, height: 20 },
          },
          eds
        );

        // Update global connections list
        updateConnectionsList(newEdges);
        return newEdges;
      });
    },
    [setEdges]
  );

  const onEdgesChangeHandler = (changes) => {
    onEdgesChange(changes);
    setEdges((eds) => {
      updateConnectionsList(eds);
      return eds;
    });
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChangeHandler}
        onConnect={onConnect}
        style={{ background: bgColor }}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        snapGrid={snapGrid}
        defaultViewport={defaultViewport}
        fitView
        attributionPosition="bottom-left"
      >
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.type === "input") return "#0041d0";
            if (n.type === "selectorNode") return bgColor;
            if (n.type === "output") return "#ff0072";
          }}
          nodeColor={(n) => {
            if (n.type === "selectorNode") return bgColor;
            return "#fff";
          }}
        />
        <Controls />
      </ReactFlow>

      <div style={{ padding: "10px", backgroundColor: "#333", color: "#fff" }}>
        <h3>Global Connections List:</h3>
        <pre>{JSON.stringify(connectionsList, null, 2)}</pre>
      </div>
    </div>
  );
};

export default CustomNodeFlow;
