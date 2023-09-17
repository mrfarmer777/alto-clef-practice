import { Box } from 'grommet'
function BubbleNote(props){
  const pleasantMistakeExclamations = [
    "Oops",
    "Not quite",
    "Missed it by *that* much",
    "Nope",
    "Oopsie daisy",
    "Whoopsie",
    "Oh, a blunder",
    "Drat",
    "Darn it",
    "Oh, fiddlesticks",
    "A minor mishap",
    "Oh, goodness gracious",
    "Oops-a-doodle",
    "Try again",
    "Oh, bother",
  ];


  return(
    <Box primary size='small'
         className='bubble-note'
         background={ { color: '#B30000', dark: true } }
         pad='small'
         color={ { light: 'white', dark: 'black' } }
         round
         value={props.value}
         data-testid='wrong-bubble'>
      { pleasantMistakeExclamations[Math.floor(Math.random() * pleasantMistakeExclamations.length)] }!
    </Box>
  )
}

export default BubbleNote;