import { useState } from "react";
import './counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
  return (

    <div className="container">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button className="btn btn-success" onClick={increment}>Increment</button>
      <button className="btn btn-danger" onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
