import FunctionButton from './FunctionButton';
import { Box } from 'grommet';

function FingerboardButtons(props){

  const SpacingBoxHeight = '2rem'

  return(
    <Box direction='row' gap='medium' margin='small' flex='grow' justify='center' width={'xlarge'}>
      <Box direction={'column'} gap={'xxsmall'} id={'c-string'} >
        <FunctionButton callback={props.checkNote} value={'c3'} label={'C'} testid={'guess-c2-note'}></FunctionButton>
        <Box height={SpacingBoxHeight}></Box>
        <FunctionButton callback={props.checkNote} value={'d3'} label={'D'} testid={'guess-d2-note'}></FunctionButton>
        <Box height={SpacingBoxHeight}></Box>
        <FunctionButton callback={props.checkNote} value={'e3'} label={'E'} testid={'guess-e2-note'}></FunctionButton>
        <FunctionButton callback={props.checkNote} value={'f3'} label={'F'} testid={'guess-f2-note'}></FunctionButton>
      </Box>
      <Box direction={'column'} gap={'xxsmall'} id={'g-string'}>
        <FunctionButton callback={props.checkNote} value={'g3'} label={'G'} testid={'guess-g2-note'}></FunctionButton>
        <Box height={SpacingBoxHeight}></Box>
        <FunctionButton callback={props.checkNote} value={'a3'} label={'A'} testid={'guess-a3-note'}></FunctionButton>
        <Box height={SpacingBoxHeight}></Box>
        <FunctionButton callback={props.checkNote} value={'b3'} label={'B'} testid={'guess-b3-note'}></FunctionButton>
        <FunctionButton callback={props.checkNote} value={'c4'} label={'C'} testid={'guess-c3-note'}></FunctionButton>
      </Box>
      <Box direction={'column'} gap={'xxsmall'} id={'d-string'}>
        <FunctionButton callback={props.checkNote} value={'d4'} label={'D'} testid={'guess-d3-note'}></FunctionButton>
        <Box height={SpacingBoxHeight}></Box>
        <FunctionButton callback={props.checkNote} value={'e4'} label={'E'} testid={'guess-e3-note'}></FunctionButton>
        <FunctionButton callback={props.checkNote} value={'f4'} label={'F'} testid={'guess-f3-note'}></FunctionButton>
        <Box height={SpacingBoxHeight}></Box>
        <FunctionButton callback={props.checkNote} value={'g4'} label={'G'} testid={'guess-g3-note'}></FunctionButton>
      </Box>
      <Box direction={'column'} gap={'xxsmall'} id={'a-string'}>
        <FunctionButton callback={props.checkNote} value={'a4'} label={'A'} testid={'guess-a4-note'}></FunctionButton>
        <Box height={SpacingBoxHeight}></Box>
        <FunctionButton callback={props.checkNote} value={'b4'} label={'B'} testid={'guess-b4-note'}></FunctionButton>
        <FunctionButton callback={props.checkNote} value={'c5'} label={'C'} testid={'guess-c4-note'}></FunctionButton>
        <Box height={SpacingBoxHeight}></Box>
        <FunctionButton callback={props.checkNote} value={'d5'} label={'D'} testid={'guess-d4-note'}></FunctionButton>
      </Box>
    </Box>
  )

}

export default FingerboardButtons;