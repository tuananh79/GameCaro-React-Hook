import logo from './logo.svg';
import './App.css';
// import Square from './component/Square';
import Board from './component/Board';
import Game from './component/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <Board />
         */}
        <Game />
      </header>
    </div>
  );
}

export default App;
