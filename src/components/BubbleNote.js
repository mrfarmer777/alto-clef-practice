import { Box } from 'grommet'
function BubbleNote(props){
  return(
    <Box primary size='small'
         className='bubble-note'
         background={ { color: '#B30000', dark: true } }
         pad='small'
         color={ { light: 'white', dark: 'black' } }
         round
         value={props.value}
         data-testid='wrong-bubble'>
      Whoops!
    </Box>
  )
}

export default BubbleNote;