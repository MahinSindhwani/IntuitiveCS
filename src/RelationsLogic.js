// Function to parse the connections string into an array of tuples
const parseConnections = (connections) => {
  // Remove outer braces and split connections
  const cleanConnections = connections.replace(/[{}]/g, "").trim();

  if (!cleanConnections) return []; // Handle empty connections gracefully

  // Split into individual pairs and map into tuples
  return cleanConnections
    .split("),")
    .map((pair) => pair.replace(/[()]/g, "").trim().split(","));
};

// Check if the relation is reflexive
export const isReflexive = (nodes, connections) => {
  // Parse connections into pairs
  const relation = parseConnections(connections);
  // Check if every node has a self-connection
  return nodes.every((node) =>
    relation.some(([a, b]) => a === node && b === node)
  );
};

// Check if the relation is anti-reflexive
export const isAntiReflexive = (connections) => {
  const relation = parseConnections(connections);
  return relation.every(([a, b]) => a !== b);
};

// Check if the relation is symmetric
export const isSymmetric = (connections) => {
  const relation = parseConnections(connections);
  return relation.every(
    ([a, b]) => a === b || relation.some(([x, y]) => x === b && y === a)
  );
};

// Check if the relation is anti-symmetric
export const isAntiSymmetric = (connections) => {
  const relation = parseConnections(connections);
  return relation.every(
    ([a, b]) => a === b || !relation.some(([x, y]) => x === b && y === a)
  );
};

// Check if the relation is transitive
export const isTransitive = (connections) => {
  const relation = parseConnections(connections);
  return relation.every(([a, b]) =>
    relation.every(([x, y]) =>
      b === x ? relation.some(([c, d]) => c === a && d === y) : true
    )
  );
};
