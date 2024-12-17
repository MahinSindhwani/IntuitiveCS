// import React from "react";
// import { useState } from "react";

// function Counter({count,Set}){
//     // const [count,setCount]= useState(1);
//     const increment = () => {
//     Set((prevCount) => (prevCount < 10 ? prevCount + 1 : prevCount));
//     };
    
//     const decrement = () => {
//     Set((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
//     };

//     return(
//         <div className="counter">
//             <span>
//                 <input value={count} id="count"/>
//                 <button onClick={decrement}>-</button>
//                 <button onClick={increment}>+</button>
//             </span>
//         </div>
//     );
// };

// export default Counter();

import React from "react";

function Counter({ count, Set }) {
  const increment = () => {
    Set((prevCount) => (prevCount < 10 ? prevCount + 1 : prevCount));
  };

  const decrement = () => {
    Set((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1 && value <= 10) {
      Set(value); // Set count based on the input value within bounds
    }
  };

  return (
    <div className="counter">
      <span>
        <input
          type="number"
          value={count}
          onChange={handleInputChange} // Controlled input with onChange handler
          id="count"
        />
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </span>
    </div>
  );
}

export default Counter;
