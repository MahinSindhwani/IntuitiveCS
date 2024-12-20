import React from "react";
import { BaseEdge, BezierEdge } from "@xyflow/react";

export default function SelfConnectingEdge(props) {
  if (props.source !== props.target) {
    return <BezierEdge {...props} />;
  }

  const { sourceX, sourceY, targetX, targetY, id, markerEnd } = props;
  const radiusX = (sourceX - targetX) * 0.6;
  const radiusY = 50;

  const edgePath = `
    M ${sourceX - 5} ${sourceY} 
    A ${radiusX} ${radiusY} 0 1 0 ${targetX + 2} ${targetY}
  `;

  return (
    <BaseEdge
      path={edgePath}
      markerEnd={markerEnd}
      style={{ stroke: "black", strokeWidth: 3 }}
    />
  );
}
