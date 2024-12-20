import { Handle, Position, useConnection } from "@xyflow/react";

export default function CustomNode({ id, data }) {
  const connection = useConnection();
  const isTarget = connection.inProgress && connection.fromNode.id !== id;
  const instruction = isTarget ? "Drop here" : "Drag to connect";

  return (
    <div className="customNode">
      <div className="customNodeBody">
        {!connection.inProgress && (
          <Handle className="customHandle source" position={Position.Right} type="source" />
        )}
        {(!connection.inProgress || isTarget) && (
          <Handle
            className="customHandle target"
            position={Position.Left}
            type="target"
            isConnectableStart={false}
          />
        )}
        <div>{data?.label}</div>
        <div>{instruction}</div>
      </div>
    </div>
  );
}
