import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/slices/counterSlice";
import "./counter.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incV, setIncV] = useState(1);
  const [decV, setDecV] = useState(1);

  const handleIncrement = () => {
    dispatch(increment(incV));
  };

  const handleDecrement = () => {
    dispatch(decrement(decV));
  };

  return (
    <div className="container counter">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div className="input-container">
        <div className="my-2">
          <label className="me-2">Increment By:</label>
          <input
            type="number"
            value={incV}
            onChange={(e) => setIncV(Number(e.target.value))}
          />
        </div>
        <button className="btn btn-success" onClick={handleIncrement}>
          Increment
        </button>
      </div>
      <div className="input-container">
        <div className="my-2">
          <label className="me-2">Decrement By:</label>
          <input
            type="number"
            value={decV}
            onChange={(e) => setDecV(Number(e.target.value))}
          />
        </div>
        <button className="btn btn-danger" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
