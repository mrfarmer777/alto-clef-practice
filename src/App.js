import logo from './logo.svg';
import './App.css';
import NotationDisplay from "./components/NotationDisplay";

function App() {
  return (
    <div className="App">
      <NotationDisplay/>
      <div id='output'></div>
    </div>
  );
}

export default App;
