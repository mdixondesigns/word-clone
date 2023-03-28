import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import PlayerInput from "../PlayerInput";
import GuessList from "../GuessList";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState("running");

  function handleSubmitGuess(newGuess) {
    const nextGuessList = [...guessList, newGuess];
    setGuessList(nextGuessList);

    if (answer === newGuess.toUpperCase()) {
      setGameStatus("won");
    } else if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessList guessList={guessList} answer={answer} />
      <PlayerInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === "won" && <WonBanner num={guessList.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
