import './App.css';
import NotationDisplay from "./components/NotationDisplay";

function App() {
  return (
    <div className="App">
      <NotationDisplay targetNote="f"/>
      <div id='output'></div>
    </div>
  );
}

export default App;
