import './App.css';
import NotationDisplay from "./components/NotationDisplay";
import FunctionButton from "./components/FunctionButton";
import { useState } from 'react'
import NoteChooser from "./components/NoteChooser";
import NoteNameButtons from "./components/NoteNameButtons";

function App() {
  const [note, setNote] = useState({noteName: "c", octave: "4"});
  const [guess, setGuess] = useState('');
  const [numCorrect, setNumCorrect] = useState(0)
  const [numAttempts, setNumAttempts] = useState(0)

  const checkGuess = function (e) {
    if(e.target.value === note["noteName"]){
      setNumCorrect(numCorrect + 1)
    }
    setNumAttempts(numAttempts + 1)
    setGuess('')
    selectNewNote()
  }

  const selectNewNote = function () {
    const noteChooser = new NoteChooser();
    setNote(noteChooser.select())
  }

  return (
    <div className="App">
      <h3 data-testid={'score-display'}>{ `Score: ${numCorrect}/${numAttempts}` }</h3>
      <NotationDisplay targetNote={note["noteName"]} octave={note["octave"]}/>
      <div id='output' data-testid={'output-panel'}></div>
      <FunctionButton label={'New Note'} callback={selectNewNote}/>
      <NoteNameButtons checkNote={checkGuess} />
    </div>
  );
}

export default App;
