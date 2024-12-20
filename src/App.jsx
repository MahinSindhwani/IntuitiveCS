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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
};

<<<<<<< HEAD
=======
const nodeTypes = {
  custom: CustomNode,
>>>>>>> ce9b0911be1255bcf75d40ba15de6995039732e3
>>>>>>> 3d6dec2db1c12a32819b5d932627913817236337
};

>>>>>>> 6d17b5c4d1a348682ec6ac05caadd5ada16bfc80
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
    (params) => {
      const edgeType =
        params.source === params.target ? "selfConnecting" : "floating";
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
        const sourceLabel = sourceNode?.id || edge.source;
        const targetLabel = targetNode?.id || edge.target;
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
