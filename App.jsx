
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div style={{
      textAlign: "center",
      padding: "20px",
      border: "1px solid #ddd",
      margin: "20px"
    }}>
      <h2>Counter Application</h2>

      <h3>{count}</h3>
      <p>Current Count</p>

      <button
        onClick={decrement}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer"
        }}
      >
        − Decrement
      </button>

      {" "}

      <button
        onClick={increment}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer"
        }}
      >
        + Increment
      </button>

      <br /><br />

      <button
        onClick={reset}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "20px",
          cursor: "pointer"
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
