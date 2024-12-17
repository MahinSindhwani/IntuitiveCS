// import React from "react";
// import { useState, useEffect } from "react";
// import { useCallback } from "react";
// import { ReactFlow, Controls, Background, applyNodeChanges,applyEdgeChanges, addEdge, Position, useEdgesState, useNodesState, MiniMap } from "@xyflow/react";
// import "@xyflow/react/dist/style.css";


// function NetworkFlow() {
//   // Define the nodes
//   const initialNodes = [
//     { id: "1", data: { label: "Node 1" }, position: { x: 100, y: 100 } },
//     { id: "2", data: { label: "Node 2" }, position: { x: 200, y: 200 } },
//     { id: "3", data: { label: "Node 3" }, position: { x: 300, y: 100 } },
//     { id: "4", data: { label: "Node 4" }, position: { x: 400, y: 200 } },
//     { id: "5", data: { label: "Node 5" }, position: { x: 500, y: 100 } },
//   ];

//   // Define the edges (connections between nodes)
//   const initialEdges = [
//     { id: "e1-2", source: "1", target: "2" },
//     { id: "e1-3", source: "1", target: "3" },
//     { id: "e2-4", source: "2", target: "4" },
//     { id: "e2-5", source: "2", target: "5" },
//     { id: "e3-3", source: "3", target: "3" },
//   ];

//   const onConnect = useCallback(
//     (params) =>
//       setEdges((eds) =>
//         addEdge({ ...params, animated: true, style: { stroke: '#fff' } }, eds),
//       ),
//     [],
//   );

//   return (
//     <div style={{ height: "500px" }}>
//       <ReactFlow nodes={initialNodes} edges={initialEdges} onConnect={onConnect}>
//         <Background /> {/* Optional background for visual appeal */}
//         <Controls />   {/* Optional controls (zoom, etc.) */}
//       </ReactFlow>
//     </div>
//   );
// }

// export default NetworkFlow;

import React, { useEffect, useState } from 'react';
import { ReactFlow, useNodesState, useEdgesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// import './updatenode.css';

const initialNodes = [
  { id: '1', data: { label: '-' }, position: { x: 100, y: 100 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 200 } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const UpdateNode = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [nodeName, setNodeName] = useState('Node 1');
  const [nodeBg, setNodeBg] = useState('#eee');
  const [nodeHidden, setNodeHidden] = useState(false);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === '1') {
          // it's important that you create a new node object
          // in order to notify react flow about the change
          return {
            ...node,
            data: {
              ...node.data,
              label: nodeName,
            },
          };
        }

        return node;
      }),
    );
  }, [nodeName, setNodes]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === '1') {
          // it's important that you create a new node object
          // in order to notify react flow about the change
          return {
            ...node,
            style: {
              ...node.style,
              backgroundColor: nodeBg,
            },
          };
        }

        return node;
      }),
    );
  }, [nodeBg, setNodes]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === '1') {
          // it's important that you create a new node object
          // in order to notify react flow about the change
          return {
            ...node,
            hidden: nodeHidden,
          };
        }

        return node;
      }),
    );
    setEdges((eds) =>
      eds.map((edge) => {
        if (edge.id === 'e1-2') {
          return {
            ...edge,
            hidden: nodeHidden,
          };
        }

        return edge;
      }),
    );
  }, [nodeHidden, setNodes, setEdges]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      defaultViewport={defaultViewport}
      minZoom={0.2}
      maxZoom={4}
      attributionPosition="bottom-left"
      fitView
      fitViewOptions={{ padding: 0.5 }}
    >
      <div className="updatenode__controls">
        <label>label:</label>
        <input
          value={nodeName}
          onChange={(evt) => setNodeName(evt.target.value)}
        />

        <label className="updatenode__bglabel">background:</label>
        <input value={nodeBg} onChange={(evt) => setNodeBg(evt.target.value)} />

        <div className="updatenode__checkboxwrapper">
          <label>hidden:</label>
          <input
            type="checkbox"
            checked={nodeHidden}
            onChange={(evt) => setNodeHidden(evt.target.checked)}
          />
        </div>
      </div>
    </ReactFlow>
  );
};

export default UpdateNode;
