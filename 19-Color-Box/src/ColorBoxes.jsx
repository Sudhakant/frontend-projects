import { useState } from "react";
import "./colorBoxes.css";

export default function ColorBoxes({ colors }) {
  const color = rgbColor();
  const [newColor, setNewColor] = useState(color);
  const clickHandler = () => {
    setNewColor(color);
  };
  return (
    <div
      className="colorBox"
      style={{ background: newColor, cursor: "pointer" }}
      onClick={clickHandler}
    ></div>
  );
}

function rgbColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}
