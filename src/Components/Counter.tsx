import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
    </div>
  );
}
