import FunctionButton from './FunctionButton';
import { Box, RangeSelector, Stack, Text } from 'grommet';

function ViolaStringButtons(props){

  const SpacingBoxHeight = '2rem'

  return(
    <Box>
      <Box direction='row-responsive' gap='medium' margin='small' flex='grow' justify='center' width={'xlarge'}>
        <p>Strings to Practice</p>
        <Stack>
          <Box direction="row" justify="between" >
            {[1, 2, 3, 4].map(value => (
              <Box key={value} pad="small" border={false}>
                <Text>
                  {value}
                </Text>
              </Box>
            ))}
          </Box>
          <RangeSelector
            direction="horizontal"
            invert={false}
            min={1}
            max={4}
            size="full"
            round="small"
            values={props.stringRange}
            onChange={values => props.handleStringRangeChange(values)}
          />
        </Stack>
      </Box>
      <Box direction='row-responsive' gap='medium' margin='small' flex='grow' justify='center' width={'xlarge'}>
        <Box direction={'column'} gap={'xxsmall'} id={'c-string'} >
          <FunctionButton callback={props.checkNote} value={'c3'} label={'C'} testid={'guess-c2-note'} disabled={(props.stringRange[0]>1)}></FunctionButton>
          <Box height={SpacingBoxHeight}></Box>
          <FunctionButton callback={props.checkNote} value={'d3'} label={'D'} testid={'guess-d2-note'} disabled={props.stringRange[0]>1}></FunctionButton>
          <Box height={SpacingBoxHeight}></Box>
          <FunctionButton callback={props.checkNote} value={'e3'} label={'E'} testid={'guess-e2-note'} disabled={props.stringRange[0]>1}></FunctionButton>
          <FunctionButton callback={props.checkNote} value={'f3'} label={'F'} testid={'guess-f2-note'} disabled={props.stringRange[0]>1}></FunctionButton>
        </Box>
        <Box direction={'column'} gap={'xxsmall'} id={'g-string'}>
          <FunctionButton callback={props.checkNote} value={'g3'} label={'G'} testid={'guess-g2-note'} disabled={props.stringRange[0]>2 || props.stringRange[1]<2}></FunctionButton>
          <Box height={SpacingBoxHeight}></Box>
          <FunctionButton callback={props.checkNote} value={'a3'} label={'A'} testid={'guess-a3-note'} disabled={props.stringRange[0]>2 || props.stringRange[1]<2}></FunctionButton>
          <Box height={SpacingBoxHeight}></Box>
          <FunctionButton callback={props.checkNote} value={'b3'} label={'B'} testid={'guess-b3-note'} disabled={props.stringRange[0]>2 || props.stringRange[1]<2}></FunctionButton>
          <FunctionButton callback={props.checkNote} value={'c4'} label={'C'} testid={'guess-c3-note'} disabled={props.stringRange[0]>2 || props.stringRange[1]<2}></FunctionButton>
        </Box>
        <Box direction={'column'} gap={'xxsmall'} id={'d-string'}>
          <FunctionButton callback={props.checkNote} value={'d4'} label={'D'} testid={'guess-d3-note'} disabled={props.stringRange[0]>3 || props.stringRange[1]<3}></FunctionButton>
          <Box height={SpacingBoxHeight}></Box>
          <FunctionButton callback={props.checkNote} value={'e4'} label={'E'} testid={'guess-e3-note'} disabled={props.stringRange[0]>3 || props.stringRange[1]<3}></FunctionButton>
          <FunctionButton callback={props.checkNote} value={'f4'} label={'F'} testid={'guess-f3-note'} disabled={props.stringRange[0]>3 || props.stringRange[1]<3}></FunctionButton>
          <Box height={SpacingBoxHeight}></Box>
          <FunctionButton callback={props.checkNote} value={'g4'} label={'G'} testid={'guess-g3-note'} disabled={props.stringRange[0]>3 || props.stringRange[1]<3}></FunctionButton>
        </Box>
        <Box direction={'column'} gap={'xxsmall'} id={'a-string'}>
          <FunctionButton callback={props.checkNote} value={'a4'} label={'A'} testid={'guess-a4-note'} disabled={props.stringRange[1]<4}></FunctionButton>
          <Box height={SpacingBoxHeight}></Box>
          <FunctionButton callback={props.checkNote} value={'b4'} label={'B'} testid={'guess-b4-note'} disabled={props.stringRange[1]<4}></FunctionButton>
          <FunctionButton callback={props.checkNote} value={'c5'} label={'C'} testid={'guess-c4-note'} disabled={props.stringRange[1]<4}></FunctionButton>
          <Box height={SpacingBoxHeight}></Box>
          <FunctionButton callback={props.checkNote} value={'d5'} label={'D'} testid={'guess-d4-note'} disabled={props.stringRange[1]<4}></FunctionButton>
        </Box>
      </Box>
    </Box>
  )

}

export default ViolaStringButtons;
