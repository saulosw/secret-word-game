import "./GameOver.css";

const GameOver = ( {retry, score} ) => {
  return (
    <div className="game-over-screen">
      <h1>Game Over</h1>
      <p>Your score: { score }</p>
      <button className="retry-button" onClick={ retry }>Try Again</button>
    </div>
  )
}

export default GameOver