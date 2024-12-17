// import React from "react";
// import { useState } from "react";
// import { useCallback } from "react";
// import { ReactFlow, Controls, Background, applyNodeChanges,applyEdgeChanges, addEdge, Position } from "@xyflow/react";
// import "@xyflow/react/dist/style.css";

// function NetworkFlow(){
//     // Define the nodes
//     // const initialNodes = [
//     //   { id: "1", data: { label: "Node 1" }, position: { x: 100, y: 100 } },
//     //   { id: "2", data: { label: "Node 2" }, position: { x: 200, y: 200 } },
//     //   { id: "3", data: { label: "Node 3" }, position: { x: 300, y: 100 } },
//     //   { id: "4", data: { label: "Node 4" }, position: { x: 400, y: 200 } },
//     //   { id: "5", data: { label: "Node 5" }, position: { x: 500, y: 100 } },
//     // ];
  
//     // Define the edges (connections between nodes)
//     const initialEdges = []
//     //   { id: "e1-2", source: "1", target: "2" },
//     //   { id: "e1-3", source: "1", target: "3" },
//     //   { id: "e2-4", source: "2", target: "4" },
//     //   { id: "e2-5", source: "2", target: "5" },
//     //   { id: "e3-3", source: "3", target: "3" },
//     // ];
//     const initialNodes=()=>{
//                 const nodes=[];
//                 for (let i=1; i<=count; i++){
//                     nodes.push({
//                         id: i.toString(),
//                         data: {label:"node ${i}"},
//                         position:{x:i*100,y:100},
//                     });
//                 }
//                 return nodes;
//             };
  
//     return (
//       <div style={{ height: "500px" }}>
//         <ReactFlow nodes={initialNodes} edges={initialEdges}>
//           <Background /> {/* Optional background for visual appeal */}
//           <Controls />   {/* Optional controls (zoom, etc.) */}
//         </ReactFlow>
//       </div>
//     );
//   }
// // function Nodes({count}){
// //     const generateNodes=()=>{
// //         const nodes=[];
// //         for (let i=1; i<=count; i++){
// //             nodes.push({
// //                 id: i.toString(),
// //                 data: {label:"node ${i}"},
// //                 position:{x:i*100,y:100},
// //             });
// //         }
// //         return nodes;
// //     };
    
// //     const initialEdges=[];
    
// //     function Flow(){
// //         const [nodes,setNodes]= useState(generateNodes);
// //         const [edges,setEdges]= useState(initialEdges);

// //         const onNodesChange = useCallback(
// //             (changes) => setNodes((nds)=>applyNodeChanges(changes,nds)),[],
// //         );

// //         const onEdgesChange = useCallback(
// //             (changes) => setEdges((eds)=>applyEdgeChanges(changes,eds)),[],
// //         );

// //         const onConnect = useCallback(
// //             (params)=>setEdges((eds)=>addEdge(params,eds)),[],
// //         );
// //         return (
// //             <div style={{ height: '100%' }}>
// //               <ReactFlow
// //                 nodes={nodes}
// //                 onNodesChange={onNodesChange}
// //                 edges={edges}
// //                 onEdgesChange={onEdgesChange}
// //                 onConnect={onConnect}
// //                 fitView
// //               >
// //                 <Background />
// //                 <Controls />
// //               </ReactFlow>
// //             </div>
// //           );
// //     };
// //     return Flow;
// // };

// // export default Nodes;

// // function Nodes({ count }) {
// //     const generateNodes = () => {
// //         const nodes = [];
// //         for (let i = 1; i <= count; i++) {
// //             nodes.push({
// //                 id: i.toString(),
// //                 data: { label: `node ${i}` }, // Use template literal here
// //                 position: { x: i * 100, y: 100 },
// //             });
// //         }
// //         return nodes;
// //     };

// //     return generateNodes; // Optionally export this too if needed
// // }

// // // Move the Flow component outside and export it
// // function Flow({ count }) {
// //     const generateNodes = Nodes({ count }); // Call Nodes to get the generated nodes
// //     const initialEdges = [];

// //     const [nodes, setNodes] = useState(generateNodes);
// //     const [edges, setEdges] = useState(initialEdges);

// //     const onNodesChange = useCallback(
// //         (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
// //         []
// //     );

// //     const onEdgesChange = useCallback(
// //         (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
// //         []
// //     );

// //     const onConnect = useCallback(
// //         (params) => setEdges((eds) => addEdge(params, eds)),
// //         []
// //     );

// //     return (
// //         <div style={{ height: "100%" }}>
// //             <ReactFlow
// //                 nodes={nodes}
// //                 onNodesChange={onNodesChange}
// //                 edges={edges}
// //                 onEdgesChange={onEdgesChange}
// //                 onConnect={onConnect}
// //                 fitView
// //             >
// //                 <Background />
// //                 <Controls />
// //             </ReactFlow>
// //         </div>
// //     );
// // }
