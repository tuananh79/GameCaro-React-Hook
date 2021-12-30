import { useState } from "react";
import Board from "./Board";
import './Game.scss'
const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(history[stepNumber])
    const XO = xIsNext ? 'X' : '0'
    const handClick = (i) => {
        const historyP = history.slice(0, stepNumber + 1)
        const current = historyP[stepNumber]
        const squares = [...current]

        if (winner || squares[i]) return;

        squares[i] = XO;
        setHistory([...historyP, squares])
        setStepNumber(historyP.length)
        setXIsNext(!xIsNext)
    }
    const jumpTo = (step) => {
        setStepNumber(step);
        setXIsNext(step % 2 === 0)
    }
    return (
        <>
            <h1>Welcome to Game</h1>
            <div className="content">
                <Board squares={history[stepNumber]} onClick={handClick} />
                <p>{winner ? 'Winner: ' + winner : 'Next player: ' + XO}
                </p>
                <div className="road">
                    {history.map((_step, move) => {
                        const desc = move ? `Go to move #${move}` : 'Go to start'
                        return (
                            <div className="btn-road" key={move}>
                                <button onClick={() => jumpTo(move)}>{desc}</button>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    );
}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
export default Game;