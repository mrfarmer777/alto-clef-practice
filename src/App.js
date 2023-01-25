import './App.css';
import NotationDisplay from "./components/NotationDisplay";

function App() {
  return (
    <div className="App">
      <NotationDisplay targetNote="d" octave="5"/>
      <div id='output'></div>
    </div>
  );
}

export default App;
