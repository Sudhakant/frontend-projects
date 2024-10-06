import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(5);
  const addOne = () => {
    setCount(count + 1);
  };
  const addThree = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  return (
    <div>
      <p>The count is: {count}</p>
      <button onClick={addOne}>Increment</button>
      <button onClick={addThree}>Increment</button>
    </div>
  );
}
