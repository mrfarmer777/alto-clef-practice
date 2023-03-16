import './App.css';
import NotationDisplay from "./components/NotationDisplay";
import FunctionButton from "./components/FunctionButton";
import { useState } from 'react'
import NoteChooser from "./components/NoteChooser";
import NoteNameButtons from "./components/NoteNameButtons";
import { Grommet, Page, PageContent, Box, Button } from 'grommet';

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
    page: {
      wide: {
        width: {
          min: 'medium',
          max: 'large'
        }
      }
    }
  },
};

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
    <Grommet full theme={theme}>
      <Page>
        <PageContent>
          <Box direction='column' justify='center'>
            <Box direction='row' justify='center'>
              <h3 data-testid={'score-display'}>{ `Score: ${numCorrect}/${numAttempts}` }</h3>
            </Box>
            <Box direction='row' justify='center'>
              <NotationDisplay targetNote={note["noteName"]} octave={note["octave"]}/>
              <div id='output' data-testid={'output-panel'}></div>
            </Box>
          </Box>
          <Box direction='column' justify='center' align='center'>
            <Box direction='column' width='small'>
              <Button label='New Note' fill='vertical' onClick={selectNewNote}/>
            </Box>
            <NoteNameButtons checkNote={checkGuess} />
          </Box>
        </PageContent>
      </Page>
    </Grommet>
  );
}

export default App;
