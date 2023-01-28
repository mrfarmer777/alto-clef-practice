import './App.css';
import NotationDisplay from "./components/NotationDisplay";
import FunctionButton from "./components/FunctionButton";
import { useState } from 'react'
import NoteChooser from "./components/NoteChooser";

function App() {
  const [note, setNote] = useState({noteName: "c", octave: "4"});
  const [guess, setGuess] = useState('');
  const [numCorrect, setNumCorrect] = useState(0)
  const [numAttempts, setNumAttempts] = useState(0)

  const checkGuess = function () {
    if(guess === note["noteName"]){
      setNumCorrect(numCorrect + 1)
    }
    setNumAttempts(numAttempts + 1)
    selectNewNote("c/2", "g/5")
  }

  const updateGuessValue = function(e) {
    setGuess(e.target.value);
  }

  const selectNewNote = function () {
    const noteChooser = new NoteChooser();
    setNote(noteChooser.select("c/2", "g/5"))
  }

  return (
    <div className="App">
      <h3>Score: {numCorrect}/{numAttempts}</h3>
      <NotationDisplay targetNote={note["noteName"]} octave={note["octave"]}/>
      <div id='output' data-testid={'output-panel'}></div>
      <FunctionButton label={'New Note'} callback={selectNewNote}/>
      <input
        name={'guess-note-input'}
        type={"text"}
        placeholder={"Enter note name"}
        value={guess}
        onChange={e => updateGuessValue(e)} >
      </input>
      <FunctionButton label={'Guess Note'} callback={checkGuess}/>
    </div>
  );
}

export default App;
