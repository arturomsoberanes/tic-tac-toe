import React from 'react';
import './Square.css';

function Square({ id, newState }){
  const [color, setColor] = React.useState('green');
  const [status, setStatus] = React.useState(null);
  const XorO = ["O","X"];

  const palet = ['red', 'blue', 'green'];
  const getRandomColor = () => palet[Math.floor(Math.random()*3)];

  React.useEffect( () => {
    console.log(`Render ${id}`);
    return () => console.log(`unmounting square ${id}`);
  });
  const turn = e => {
    let col = getRandomColor();
    setColor(col);
    let nextPlayer = newState(id);
    setStatus(nextPlayer);
    e.target.style.background = col;
  };

  return (
    <button onClick={turn}>
      <h1>{XorO[status]}</h1>
    </button>
  );
}

export default Square;

