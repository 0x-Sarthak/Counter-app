import React from "react";

var count = 0;

function App() {
  const [count, setCount] = React.useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    if (count > 0) setCount(count - 1);
  }
  return (
    <div className="container">
      <h1> Counter</h1>
      <br />
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
