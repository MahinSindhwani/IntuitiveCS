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

const connectionLineStyle = {
  stroke: "#b1b1b7",
};

const nodeTypes = {
  custom: CustomNode,
};

const edgeTypes = {
  floating: FloatingEdge,
};

const defaultEdgeOptions = {
  type: "floating",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "#b1b1b7",
  },
};

const App = ({ nodeCount }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [connections, setConnections] = useState("0 connections");

  useEffect(() => {
    const newNodes = Array.from({ length: nodeCount }, (_, i) => ({
      id: (i + 1).toString(),
      type: "custom",
      position: { x: i * 100, y: i * 50 },
      data: { label: `Node ${i + 1}` },
    }));
    setNodes(newNodes);
    setEdges([]);
  }, [nodeCount, setNodes, setEdges]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  useEffect(() => {
    if (edges.length === 0) {
      setConnections("0 connections");
    } else {
      const connectionList = edges.map((edge) => {
        const sourceNode = nodes.find((n) => n.id === edge.source);
        const targetNode = nodes.find((n) => n.id === edge.target);
        const sourceLabel = sourceNode?.data?.label || edge.source;
        const targetLabel = targetNode?.data?.label || edge.target;
        return `${sourceLabel} -> ${targetLabel}`;
      });
      setConnections(connectionList.join(", "));
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
