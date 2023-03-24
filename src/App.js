import './App.css';
import NotationDisplay from "./components/NotationDisplay";
import { useState } from 'react'
import NoteChooser from "./components/NoteChooser";
import NoteNameButtons from "./components/NoteNameButtons";
import FingerboardButtons from "./components/FingerboardButtons";
import { Grommet, Page, PageContent, Box, Button, RadioButtonGroup, RangeInput } from 'grommet';

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

const levelOptions = [
  {
    id: "1",
    label:  "1. Note Names",
    value: "note-names"
  },
  {
    id: "2",
    label:  "2. Viola Strings",
    value: "viola-strings"
  },
  {
    id: "3",
    label:  "3. Fingerboard Positions",
    value: "fingerboard-positions"
  }
]

function App() {
  const [note, setNote] = useState({noteName: "c", octave: "4"});
  const [level, setLevel] = useState('note-names');
  const [numCorrect, setNumCorrect] = useState(0)
  const [numAttempts, setNumAttempts] = useState(0)
  const [grandStaffOpacity, setGrandStaffOpacity] = useState(50)

  const checkGuess = function (e) {
    const guessedNote = e.target.value[0]
    const guessedOctave = e.target.value[1]
    if(guessedOctave) {
      if (guessedOctave === note["octave"] && guessedNote === note["noteName"]) {
        setNumCorrect(numCorrect + 1)
      }
    } else {
      if(guessedNote === note["noteName"]){
        setNumCorrect(numCorrect + 1)
      }
    }
    setNumAttempts(numAttempts + 1)
    selectNewNote()
  }

  const selectNewNote = function () {
    const noteChooser = new NoteChooser();
    setNote(noteChooser.select())
  }

  const resetScore = function() {
    setNumCorrect(0)
    setNumAttempts(0)
  }

  return (
    <Grommet full theme={theme}>
      <Page>
        <PageContent>
          <Box direction='column' justify='center' align={'center'}>
            <RadioButtonGroup
              name="doc"
              options={levelOptions}
              value={level}
              onChange={(event) => setLevel(event.target.value)}
            />
            <Box direction='row' justify='center'>
              <NotationDisplay targetNote={note["noteName"]} octave={note["octave"]} opacity={grandStaffOpacity}/>
              <div id='output' data-testid={'output-panel'}></div>
            </Box>
          </Box>
          <Box direction='column' justify='center' align='center'>
            <Box direction='column' justify='start' align={'center'} id={'score-container'}>
              <h3 data-testid={'score-display'}>{ `Score: ${numCorrect}/${numAttempts}` }</h3>
              <Button label='Reset Score' secondary={true} onClick={resetScore} data-testid={'reset-score-btn'}></Button>
            </Box>
            <Box direction='column' width='small'>
              <Button label='New Note' fill='vertical' onClick={selectNewNote}/>
            </Box>
            <Box direction='column' width='small'>
              <RangeInput
                value={grandStaffOpacity}
                onChange={event => setGrandStaffOpacity(event.target.value)}
              />
              {grandStaffOpacity}            </Box>

            { level === 'note-names' ?
              <NoteNameButtons checkNote={checkGuess} /> :
              <FingerboardButtons checkNote={checkGuess} />
            }
          </Box>
        </PageContent>
      </Page>
    </Grommet>
  );
}

export default App;
