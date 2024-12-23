// import React from "react";
// import { BaseEdge, BezierEdge } from "@xyflow/react";

// export default function SelfConnectingEdge(props) {
//   if (props.source !== props.target) {
//     return <BezierEdge {...props} />;
//   }

//   const { sourceX, sourceY, targetX, targetY, id, markerEnd } = props;
//   const radiusX = (sourceX - targetX) * 0.6;
//   const radiusY = 50;

//   const edgePath = `
//     M ${sourceX - 5} ${sourceY}
//     A ${radiusX} ${radiusY} 0 1 0 ${targetX + 2} ${targetY}
//   `;

//   return (
//     <BaseEdge
//       className="react-flow__edge-path"
//       path={edgePath}
//       markerEnd={markerEnd}
//       style={{ stroke: "#293a42", strokeWidth: 3 }}
//     />
//   );
// }

import React from "react";
import {
  BaseEdge,
  BezierEdge,
  EdgeLabelRenderer,
  useReactFlow,
} from "@xyflow/react";

export default function SelfConnectingEdge(props) {
  const { source, target, sourceX, sourceY, targetX, targetY, id, markerEnd } =
    props;
  const { setEdges } = useReactFlow();

  if (source !== target) {
    return <BezierEdge {...props} />;
  }

  const radiusX = (sourceX - targetX) * 0.6;
  const radiusY = 50;

  const edgePath = `
    M ${sourceX - 5} ${sourceY} 
    A ${radiusX} ${radiusY} 0 1 0 ${targetX + 2} ${targetY}
  `;

  const labelX = sourceX - radiusX + 10; // Horizontally shifted by the arc's radius
  const labelY = sourceY - radiusY - 30; // Vertically shifted above the arc

  const onEdgeClick = () => {
    setEdges((edges) => edges.filter((edge) => edge.id !== id));
  };

  return (
    <>
      <BaseEdge
        className="react-flow__edge-path"
        path={edgePath}
        markerEnd={markerEnd}
        style={{ stroke: "#293a42", strokeWidth: 3 }}
      />
      <EdgeLabelRenderer>
        <div
          className="button-edge__label nodrag nopan"
          style={{
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
          }}
        >
          <button className="button-edge__button" onClick={onEdgeClick}>
            ×
          </button>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
