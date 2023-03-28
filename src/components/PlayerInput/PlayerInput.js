import React from "react";

function PlayerInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const inputField = document.getElementById("guess-input");

  function handleSubmit(event) {
    event.preventDefault();

    const newGuess = inputField.value;

    console.log(newGuess);
    handleSubmitGuess(newGuess);
    setTentativeGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Please enter a 5 letter word"
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default PlayerInput;
