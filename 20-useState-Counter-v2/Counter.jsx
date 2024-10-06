import { useState } from "react";

export default function Counter() {
  // const arr = useState(5);
  // console.log(arr);
  const [num, setNum] = useState(5);
  const changeNum = () => {
    setNum(num + 1);
  };
  return (
    <div>
      <p>The count is: {num}</p>
      <button onClick={changeNum}>Increment</button>
    </div>
  );
}
