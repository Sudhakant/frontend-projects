import { useState } from "react";

export default function ScoreKeeperV2({ players, target = 10 }) {
  const divElements = [];
  const [scores, setScores] = useState(Array(players).fill(0));

  function clickHandler(evtIndex) {
    const incrementScore = () => {
      setScores((oldScores) => {
        const newScores = oldScores.map((ele, i) => {
          if (i === evtIndex) {
            ele += 1;
          }
          return ele;
        });
        return newScores;
      });
    };
    return incrementScore;
  }

  const resetHandler = () => {
    setScores(Array(players).fill(0));
  };

  for (let i = 0; i < players; i++) {
    divElements.push(
      <div key={i}>
        <span>Player {i + 1} : </span>
        <span>{scores[i]}</span>
        <span>{scores[i] >= target ? "Winner!!!" : ""}</span>
        <button onClick={clickHandler(i)}>+1</button>
      </div>
    );
  }

  return (
    <>
      {divElements}
      <button onClick={resetHandler}>Reset</button>
    </>
  );
}
