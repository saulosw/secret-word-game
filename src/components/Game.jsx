import { useState, useRef } from "react";
import "./Game.css";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score
}) => {

  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);
    setLetter("");

    letterInputRef.current.focus();
  };

  return (
    <div className="game">
      <div className="score-container">
        <h2>Score: <span>{score}</span></h2>
      </div>

      <h3 className="tip">Tip: This is a <b>{pickedCategory}</b></h3>

      <p>You have only <b>{guesses}</b> tries</p>

      <div className="word-container">
        {letters.map((letter, i) => (
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        ))}
      </div>

      <p className="instructions">Try to guess a letter:</p>
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            maxLength="1" 
            required 
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="wrongLettersContainer">
        <p>Wrong Letters:</p>
        <div className="guessed-letters">
          {wrongLetters.map((letter, i) => (
            <span key={i} className="guessed-letter">
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Game;