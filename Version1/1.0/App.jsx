import React from "react";
import Counter from "./counter";
import { useState } from "react";
import Nodes from "./nodes";

function App() {
  const [count,setCount]= useState(1);
  
  return (
    <div>
      <div>Size of Universe:</div>
      <Counter count={count} Set={setCount}/>
      {/* <Nodes count={count}/> */}
    </div>
  )
};
    
export default App