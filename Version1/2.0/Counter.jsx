import React from "react";
import { useState } from "react";

function Counter(){
    const [count,setCount]= useState(1);
    const increment = () => {
    setCount((prevCount) => (prevCount < 10 ? prevCount + 1 : prevCount));
    };
    
    const decrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
    };

    return(
        <div className="counter">
            <span>
                <input value={count} id="count"/>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </span>
        </div>
    );
};

export default Counter;