import React, { useEffect, useCallback, useState } from "react";
import {
  Background,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  MarkerType,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import CustomNode from "./CustomNode";
import FloatingEdge from "./FloatingEdge";
import CustomConnectionLine from "./CustomConnectionLine";
import SelfConnectingEdge from "./SelfConnectingEdge";

const connectionLineStyle = {
  stroke: "black",
  strokeWidth: 3,
};

const edgeTypes = {
  floating: FloatingEdge,
  selfLoop: SelfConnectingEdge,
};

const defaultEdgeOptions = {
  type: "floating",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "black",
  },
};

const App = ({ nodeCount }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [connections, setConnections] = useState("0 connections");

  // Define nodeTypes within the scope of App to access setNodes
  const nodeTypes = {
    custom: (props) => <CustomNode {...props} setNodes={setNodes} />,
  };

  useEffect(() => {
    const calculatePositions = (count) => {
      const centerX = 400; // X-coordinate of the center
      const centerY = 300; // Y-coordinate of the center
      const radius = 200; // Distance from the center

      if (count === 1) {
        return [{ x: centerX, y: centerY }];
      }

      const positions = [];
      for (let i = 0; i < count; i++) {
        const angle = (2 * Math.PI * i) / count; // Divide the circle equally
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        positions.push({ x, y });
      }
      return positions;
    };

    const nodeLabels = ["Parsa", "Mahin", "Shajan", "Steph", "Antonio"];

    const newNodes = Array.from({ length: nodeCount }, (_, i) => {
      const positions = calculatePositions(nodeCount);
      return {
        id: (i + 1).toString(),
        type: "custom",
        position: positions[i],
        data: { label: nodeLabels[i % nodeLabels.length] },
      };
    });

    setNodes(newNodes);
    setEdges([]);
  }, [nodeCount, setNodes, setEdges]);

  const onConnect = useCallback(
    (params) => {
      const edgeType =
        params.source === params.target ? "selfLoop" : "floating";
      setEdges((eds) => addEdge({ ...params, type: edgeType }, eds));
    },
    [setEdges]
  );

  useEffect(() => {
    if (edges.length === 0) {
      setConnections("{}");
    } else {
      const connectionList = edges.map((edge) => {
        const sourceNode = nodes.find((n) => n.id === edge.source);
        const targetNode = nodes.find((n) => n.id === edge.target);
        const sourceLabel = sourceNode?.data.label || edge.source;
        const targetLabel = targetNode?.data.label || edge.target;
        return `(${sourceLabel},${targetLabel})`;
      });
      setConnections(`{${connectionList.join(", ")}}`);
    }
  }, [edges, nodes]);

  return (
    <div id="app-container">
      <div id="node-container">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          style={{ backgroundColor: "#F7F9FB" }}
          defaultEdgeOptions={defaultEdgeOptions}
          connectionLineComponent={CustomConnectionLine}
          connectionLineStyle={connectionLineStyle}
        >
          <Background />
        </ReactFlow>
      </div>
      <div id="connections-info">
        <h3>Current Connections:</h3>
        <p>{connections}</p>
      </div>
    </div>
  );
};

export default App;
