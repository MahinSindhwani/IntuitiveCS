import React, { useEffect, useRef } from "react";
import { DataSet, Network } from "vis-network/standalone"; // Make sure you're importing vis-network

function NetworkComponent() {
  const networkRef = useRef(null); // Create a ref for the container

  useEffect(() => {
    // Create the nodes and edges
    const nodes = new DataSet([
      { id: 1, label: "Mahin" },
      { id: 2, label: "parsa" },
      { id: 3, label: "Kait" },
    ]);

    const edges = new DataSet([
      { from: 1, to: 3 },
      { from: 2, to: 1 },
    ]);

    // Create the network
    const data = { nodes, edges };
    const options = {};
    const network = new Network(networkRef.current, data, options);

    return () => {
      // Cleanup the network instance on component unmount
      if (network) {
        network.destroy();
      }
    };
  }, []);

  return <div ref={networkRef} id="mynetwork" style={{ height: "500px", border: "solid"}}></div>;
}

export default NetworkComponent;
