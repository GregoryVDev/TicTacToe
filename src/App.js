// Component definition for Square
export default function Square() {
  // Returns a button with a class "square" and displays an X inside
  return (
    <>
      {/* This div represents the first row of the game board */}
      <div className="board-row">
        {/* These buttons represent the cells of the first row */}
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      {/* This div represents the second row of the game board */}
      <div className="board-row">
        {/* These buttons represent the cells of the second row */}
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      {/* This div represents the third row of the game board */}
      <div className="board-row">
        {/* These buttons represent the cells of the third row */}
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}
