import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
    </>
  );
}

export default App;
