import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);
  console.log(result);

  return (
    <p className="guess">
      {range(5).map((index) => (
        <Cell
          key={index}
          letter={result ? result[index].letter : undefined}
          status={result ? result[index].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
