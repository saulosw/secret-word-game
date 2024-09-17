import "./StartScreen.css"

const StartScreen = ( {startGame} ) => {
  return (
    <div className="start-screen">
      <h1>Secret Word Game</h1>
      <p>Are you ready to play?</p>
      <button onClick={startGame} className="start-button">Start Game</button>
    </div>
  );
};

export default StartScreen;