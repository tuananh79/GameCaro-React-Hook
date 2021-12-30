import Square from "./Square";
import './Board.scss';
const Board = (props) => {

    const renderSquare = (i) => {
        return <Square value={props.squares[i]}
            onClick={() => props.onClick(i)}
        />
    }

    return (
        <>
            <div className="board-column">
                <div className="board-row">
                    {renderSquare(0)}&nbsp;&nbsp;&nbsp;
                    {renderSquare(1)}&nbsp;&nbsp;&nbsp;
                    {renderSquare(2)}
                </div><br />
                <div className="board-row">
                    {renderSquare(3)}&nbsp;&nbsp;&nbsp;
                    {renderSquare(4)}&nbsp;&nbsp;&nbsp;
                    {renderSquare(5)}
                </div><br />
                <div className="board-row">
                    {renderSquare(6)}&nbsp;&nbsp;&nbsp;
                    {renderSquare(7)}&nbsp;&nbsp;&nbsp;
                    {renderSquare(8)}
                </div>
            </div>
        </>
    );
}
export default Board;