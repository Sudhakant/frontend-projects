import ColorBoxes from "./ColorBoxes";
import "./colorBoxGrid.css";

export default function ColorBoxGrid() {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBoxes />);
  }
  return <div className="colorBoxGrid">{boxes}</div>;
}
