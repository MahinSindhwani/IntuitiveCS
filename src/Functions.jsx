// import React, { useCallback, useState } from "react";
// import {
//   ReactFlow,
//   Background,
//   applyNodeChanges,
//   applyEdgeChanges,
//   addEdge,
// } from "@xyflow/react";

// import "@xyflow/react/dist/style.css";
// import FloatingEdge from "./FloatingEdge"; // Use your FloatingEdge component
// import CustomNode from "./CustomNode"; // Use your CustomNode component
// import CustomConnectionLine from "./CustomConnectionLine";

// const edgeTypes = {
//   floating: FloatingEdge,
// };

// const nodeTypes = {
//   custom: CustomNode, // Use CustomNode for child nodes
// };

// const connectionLineStyle = {
//   stroke: "#293a42",
//   strokeWidth: 3,
// };

// const rfStyle = {
//   backgroundColor: "#F7F9FB",
// };

// // Initial nodes
// const initialNodes = [
//   {
//     id: "A",
//     type: "group",
//     position: { x: 0, y: 0 },
//     data: { label: "Parent A" },
//   },
//   {
//     id: "A-1",
//     type: "custom",
//     data: { label: "Child Node 1-A" },
//     position: { x: 50, y: 20 },
//     parentId: "A",
//     extent: "parent",
//     draggable: false,
//   },
//   {
//     id: "A-2",
//     type: "custom",
//     data: { label: "Child Node 2-A" },
//     position: { x: 50, y: 120 },
//     parentId: "A",
//     extent: "parent",
//     draggable: false,
//   },
//   {
//     id: "A-3",
//     type: "custom",
//     data: { label: "Child Node 3-A" },
//     position: { x: 50, y: 220 },
//     parentId: "A",
//     extent: "parent",
//     draggable: false,
//   },
//   {
//     id: "B",
//     type: "group",
//     position: { x: 350, y: 0 },
//     data: { label: "Parent B" },
//   },
//   {
//     id: "B-1",
//     type: "custom",
//     data: { label: "Child Node 1-B" },
//     position: { x: 50, y: 20 },
//     parentId: "B",
//     extent: "parent",
//     draggable: false,
//   },
//   {
//     id: "B-2",
//     type: "custom",
//     data: { label: "Child Node 2-B" },
//     position: { x: 50, y: 120 },
//     parentId: "B",
//     extent: "parent",
//     draggable: false,
//   },
//   {
//     id: "B-3",
//     type: "custom",
//     data: { label: "Child Node 3-B" },
//     position: { x: 50, y: 220 },
//     parentId: "B",
//     extent: "parent",
//     draggable: false,
//   },
// ];

// const Functions = () => {
//   const [nodes, setNodes] = useState(initialNodes);
//   const [edges, setEdges] = useState([]);

//   const onNodesChange = useCallback(
//     (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
//     []
//   );

//   const onEdgesChange = useCallback(
//     (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
//     []
//   );

//   const onConnect = useCallback(
//     (connection) =>
//       setEdges((eds) =>
//         addEdge(
//           {
//             ...connection,
//             type: "floating",
//             animated: true,
//             style: { stroke: "#293a42", strokeWidth: 3 },
//           },
//           eds
//         )
//       ),
//     []
//   );

//   return (
//     <div style={{ height: "100vh" }}>
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         fitView
//         edgeTypes={edgeTypes}
//         nodeTypes={nodeTypes}
//         style={rfStyle}
//         attributionPosition="top-right"
//         connectionLineComponent={CustomConnectionLine}
//         connectionLineStyle={connectionLineStyle}
//       >
//         <Background />
//       </ReactFlow>
//     </div>
//   );
// };

// export default Functions;

import React, { useCallback, useState } from "react";
import {
  ReactFlow,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "@xyflow/react";

import FloatingEdge from "./FloatingEdge"; // Ensure consistency with App.jsx
import CustomNode from "./CustomNode"; // Use the same CustomNode component
import CustomConnectionLine from "./CustomConnectionLine"; // Use CustomConnectionLine for edge connections

import "./index.css";

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
    style: { width: 200, height: 350 }, // Adjust dimensions as needed
  },
  {
    id: "A-1",
    type: "custom",
    data: { label: "Child Node 1-A" },
    position: { x: 50, y: 20 },
    parentId: "A",
    extent: "parent",
    draggable: false,
  },
  {
    id: "A-2",
    type: "custom",
    data: { label: "Child Node 2-A" },
    position: { x: 50, y: 120 },
    parentId: "A",
    extent: "parent",
    draggable: false,
  },
  {
    id: "A-3",
    type: "custom",
    data: { label: "Child Node 3-A" },
    position: { x: 50, y: 220 },
    parentId: "A",
    extent: "parent",
    draggable: false,
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
    data: { label: "Child Node 1-B" },
    position: { x: 50, y: 20 },
    parentId: "B",
    extent: "parent",
    draggable: false,
  },
  {
    id: "B-2",
    type: "custom",
    data: { label: "Child Node 2-B" },
    position: { x: 50, y: 120 },
    parentId: "B",
    extent: "parent",
    draggable: false,
  },
  {
    id: "B-3",
    type: "custom",
    data: { label: "Child Node 3-B" },
    position: { x: 50, y: 220 },
    parentId: "B",
    extent: "parent",
    draggable: false,
  },
];

const Functions = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);

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

  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
        style={rfStyle}
        connectionLineComponent={CustomConnectionLine} // Ensure CustomConnectionLine is used
        connectionLineStyle={connectionLineStyle}
        defaultEdgeOptions={defaultEdgeOptions} // Apply default options for edges
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Functions;
