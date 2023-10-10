import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import BackGround from './components/BackGround/BackGround';
import Footer from './components/Footer/Footer';
import RessetButton from './components/RessetButton/RessetButton';

const winningPositions = [
  [0, 1, 2],
  [0, 2, 1],
  [1, 0, 2],
  [1, 2, 0],
  [2, 0, 1],
  [2, 1, 0],
  [3, 4, 5],
  [3, 5, 4],
  [4, 3, 5],
  [4, 5, 3],
  [5, 3, 4],
  [5, 4, 3],
  [6, 7, 8],
  [6, 8, 7],
  [7, 6, 8],
  [7, 8, 6],
  [8, 6, 7],
  [8, 7, 6],
  [0, 3, 6],
  [0, 6, 3],
  [3, 0, 6],
  [3, 6, 0],
  [6, 0, 3],
  [6, 3, 0],
  [1, 4, 7],
  [1, 7, 4],
  [4, 1, 7],
  [4, 7, 1],
  [7, 1, 4],
  [7, 4, 1],
  [2, 5, 8],
  [2, 8, 5],
  [5, 2, 8],
  [5, 8, 2],
  [8, 2, 5],
  [8, 5, 2],
  [0, 4, 8],
  [0, 8, 4],
  [4, 0, 8],
  [4, 8, 0],
  [8, 0, 4],
  [8, 4, 0],
  [2, 4, 6],
  [2, 6, 4],
  [4, 2, 6],
  [4, 6, 2],
  [6, 2, 4],
  [6, 4, 2],
];
 
const App = () => {

  const [turn, setTurn] = useState('x');
  const [squares, setScuares] = useState(Array(9).fill(null));
  const [winningSquares, setWinningSquares] = useState([]);
  const [score, setScore] = useState({
    x:0,
    o:0,
  });

  const reset = () => {
    setTurn('x');
    setScuares(Array(9).fill(null));
    setWinningSquares([]);
  }

  const checkForWinner = newSquares => {
    for(let i = 0; i < winningPositions.length; i++){
      const [a,b,c] = winningPositions[i];
      if (newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]){
        //hay un ganador
        endGame(newSquares[a], winningPositions[i]);
        return 
      }
    }
    if(!newSquares.includes(null)){
      //empate
      endGame(null, Array.from(Array(10).keys()));
      return
    }
    setTurn(turn === 'x' ? 'o' : 'x');
  }

   const handleClick = square => {
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setScuares(newSquares);
    checkForWinner(newSquares); 
  } 
  const endGame = (result, winningPositions) => {
    setTurn(null);
    if(result !== null){
      setScore({
        ...score,
        [result]: score[result] +1,
      })
    } 
    setWinningSquares(winningPositions);
    setTimeout(reset, 2090);
  }
  
  return (
    <div className="container">
      <BackGround/>
      <h1 className="title">TRES EN LINEA</h1>
      <Board winningSquares={winningSquares} turn={turn} squares={squares} onClick={handleClick}/>
      <ScoreBoard scoreO={score.o} scoreX={score.x} />
      <RessetButton/>
      <Footer/>
    </div>

  );
}

export default App;
