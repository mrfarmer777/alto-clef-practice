import FunctionButton from './FunctionButton';
import { Box } from 'grommet';

function NoteNameButtons(props){

  return(
    <Box direction='row-responsive' gap='medium' margin='small' flex='grow' justify='center'>
      <FunctionButton callback={props.checkNote} value={'a'} label={'A'} testid={'guess-a-note'}></FunctionButton>
      <FunctionButton callback={props.checkNote} value={'b'} label={'B'} testid={'guess-b-note'}></FunctionButton>
      <FunctionButton callback={props.checkNote} value={'c'} label={'C'} testid={'guess-c-note'}></FunctionButton>
      <FunctionButton callback={props.checkNote} value={'d'} label={'D'} testid={'guess-d-note'}></FunctionButton>
      <FunctionButton callback={props.checkNote} value={'e'} label={'E'} testid={'guess-e-note'}></FunctionButton>
      <FunctionButton callback={props.checkNote} value={'f'} label={'F'} testid={'guess-f-note'}></FunctionButton>
      <FunctionButton callback={props.checkNote} value={'g'} label={'G'} testid={'guess-g-note'}></FunctionButton>
    </Box>
  )

}

export default NoteNameButtons;