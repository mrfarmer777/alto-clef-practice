import './App.css';
import NotationDisplay from "./components/NotationDisplay";
import { useState } from 'react'
import NoteChooser from "./components/NoteChooser";
import NoteNameButtons from "./components/NoteNameButtons";
import FingerboardButtons from "./components/FingerboardButtons";
import ViolaStringButtons from "./components/ViolaStringButtons";
import BubbleNote from "./components/BubbleNote";
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

const LEVEL_OPTIONS = [
  {
    id: "1",
    label:  "1. Alto Clef Note Names",
    value: "note-names"
  },
  {
    id: "2",
    label:  "2. Practice on Viola Strings",
    value: "viola-strings"
  },
  {
    id: "3",
    label:  "3. The Viola Fingerboard",
    value: "fingerboard-positions"
  }
]

const STRING_RANGE_MAP = {
  1: ["c/3","f/3"],
  2: ["g/3","c/4"],
  3: ["d/4","g/4"],
  4: ["a/4","d/5"],
}

const DEFAULT_OPACITY = 60;


function App() {
  const [note, setNote] = useState({noteName: "c", octave: "4"});
  const [level, setLevel] = useState('note-names');
  const [numCorrect, setNumCorrect] = useState(0)
  const [numAttempts, setNumAttempts] = useState(0)
  const [stringRange, setStringRange] = useState([1,4])
  const [selectionRange, setSelectionRange] = useState(['c/3','d/5'])
  const [grandStaffOpacity, setGrandStaffOpacity] = useState(DEFAULT_OPACITY)
  const [errorBubbles, setErrorBubbles] = useState([])

  const getTrebleHelpers = function(){
    if(level !== 'viola-strings'){
      return []
    }

    const result = []
    if(stringRange[1] >= 3 && stringRange[0] <= 3) {
      result.push("d/4")
    }
    if(stringRange[1] === 4) {
      result.push("a/4")
    }
    return result
  }

  const getBassHelpers = function(){
    if(level !== 'viola-strings'){
      return []
    }

    const result = []
    if(stringRange[1] >= 2 && stringRange[0] <= 2) {
      result.push("g/3")
    }
    if(stringRange[0] === 1) {
      result.push("c/3")
    }
    return result
  }

  const checkGuess = function (e) {
    setErrorBubbles([])
    const guessedNote = e.target.value[0]
    const guessedOctave = e.target.value[1]
    if(guessedOctave) {
      if (guessedOctave === note["octave"] && guessedNote === note["noteName"]) {
        setNumCorrect(numCorrect + 1)
      }
    } else {
      if(guessedNote === note["noteName"]){
        setNumCorrect(numCorrect + 1)
        selectNewNote()
      } else {
        const new_bubble =  <BubbleNote key={errorBubbles.length + 1}></BubbleNote>
        setErrorBubbles([...errorBubbles, new_bubble])
      }
    }
    setNumAttempts(numAttempts + 1)
  }

  const selectNewNote = function () {
    const noteChooser = new NoteChooser();
    const newNote = noteChooser.select(selectionRange[0], selectionRange[1]);
    if(newNote.noteName === note.noteName && newNote.octave === note.octave){
      selectNewNote();
    } else {
      setNote(newNote);
      return true;
    }
  }

  const handleLevelChange = function (levelValue) {
    setLevel(levelValue);
    switch(levelValue){
      case 'note-names':
        setStringRange([1,4])
        setSelectionRange(['c/3','d/5'])
        setGrandStaffOpacity(60)
        break
      case 'viola-strings':
        setStringRange([1,2])
        setSelectionRange(['c/3','c/4'])
        setGrandStaffOpacity(85)
        break
      case 'fingerboard-positions':
        setStringRange([1,4])
        setSelectionRange(['c/3','d/5'])
        setGrandStaffOpacity(60)
        break
      default:
        console.error('invalid level selected')
    }
  }

  const handleStringRangeChange = function(stringRangeValues){
    setStringRange(stringRangeValues);
    const lowestNote = STRING_RANGE_MAP[stringRangeValues[0]][0]
    const highestNote = STRING_RANGE_MAP[stringRangeValues[1]][1]
    setSelectionRange([lowestNote, highestNote])
  }

  const resetScore = function() {
    setNumCorrect(0)
    setNumAttempts(0)
  }

  return (
    <Grommet full theme={theme}>
      <Page>
        <PageContent>
          <Box direction='column' justify='center' align={'center'} margin={'large'}>
            <RadioButtonGroup
              direction={'row'}
              name="doc"
              options={LEVEL_OPTIONS}
              value={level}
              onChange={(event) => handleLevelChange(event.target.value)}
            />
            <Box direction='row' justify='center'>
              <NotationDisplay targetNote={note["noteName"]}
                               octave={note["octave"]}
                               trebleHelpers={getTrebleHelpers()}
                               bassHelpers={getBassHelpers()}
                               opacity={grandStaffOpacity}/>
              <div id='output' data-testid={'output-panel'}></div>
              { errorBubbles }
            </Box>

            <Box direction='column' justify='center' align='center'>
              <Box direction='column' justify='start'  align={'center'} id={'score-container'}>
                <Box data-testid={'score-display'} pad={ 'xsmall'}>{ `Score: ${numCorrect}/${numAttempts}` }</Box>
              </Box>
              <Box direction='row' width='medium' justify={'center'} gap={'small'}>
                <Button label='New Note' fill='vertical' onClick={selectNewNote}/>
                <Button label='Reset Score' secondary={true} onClick={resetScore} data-testid={'reset-score-btn'}></Button>
              </Box>
              { level === 'fingerboard-positions' &&
                <Box direction='column' width='small' margin={'xsmall'}>
                  <p>Grand Staff Lightness</p>
                  <RangeInput
                    data-testid={"opacity-slider"}
                    min={16}
                    max={100}

                    value={grandStaffOpacity}
                    onChange={event => setGrandStaffOpacity(event.target.value)}
                  />
                </Box>
              }

              { level === 'note-names' &&
                <NoteNameButtons checkNote={checkGuess} />
              }

              { level === 'fingerboard-positions' &&
                <FingerboardButtons checkNote={checkGuess} />
              }

              { level === 'viola-strings' &&
                <ViolaStringButtons checkNote={checkGuess}
                                    stringRange={stringRange}
                                    handleStringRangeChange={handleStringRangeChange}/>}
            </Box>
          </Box>
        </PageContent>
      </Page>
    </Grommet>
  );
}

export default App;
