import React from 'react';
import './Board.css';
import checkWinner from './Winner';
import Square from './Square';


function Board() {
  const [player, setPlayer] = React.useState(1);
  const [state, setState] = React.useState(Array(9).fill(null));

  let status = `Player ${player}`;
  let winner = checkWinner(state);

  if(winner != null) status = `Player ${winner} wins`

  const newState = idOfSquare => {
    let thePlayer = player;
    state[idOfSquare] = player;
    setState(state);
    let nextplayer = (player + 1) % 2;
    setPlayer(nextplayer);
    return thePlayer;
  };

  function renderSquare(i){
    return <Square id={i} newState={newState} winner={winner}></Square>
  }

  return (
    <div className="container-game-board">
      <h1 className="h1-tic">Tic Tac Toe</h1>
      <div className="game-board">
        <div className="grid-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="grid-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="grid-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <div id="info">
          <h1>{status}</h1>
        </div>
      </div>
    </div>
  );
}

export default Board;
