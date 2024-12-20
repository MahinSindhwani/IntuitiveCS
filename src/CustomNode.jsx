import React, { useState } from "react";
import { Handle, Position } from "@xyflow/react";

export default function CustomNode({ id, data, setNodes }) {
  const [isEditing, setIsEditing] = useState(false);
  const [label, setLabel] = useState(data.label);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setLabel(e.target.value);
  };

  const handleBlur = () => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, label } } : node
      )
    );
    setIsEditing(false);
  };

  return (
    <div className="customNode">
      <div className="customNodeBody" onDoubleClick={handleDoubleClick}>
        <Handle
          className="customHandle source"
          position={Position.Right}
          type="source"
        />
        <Handle
          className="customHandle target"
          position={Position.Left}
          type="target"
          isConnectableStart
        />
        {isEditing ? (
          <input
            type="text"
            value={label}
            onChange={handleInputChange}
            onBlur={handleBlur}
            autoFocus
          />
        ) : (
          <div>{label}</div>
        )}
      </div>
    </div>
  );
}
