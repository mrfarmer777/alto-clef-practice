import FunctionButton from './FunctionButton'

function NoteNameButtons(props){

  return(
    <div>
      <FunctionButton callback={props.checkNote} value={'a'} label={'a'} testid={'guess-a-note'}></FunctionButton>
      <FunctionButton callback={props.checkNote} value={'b'} label={'b'} testid={'guess-b-note'}></FunctionButton>
      <FunctionButton callback={props.checkNote} value={'c'} label={'c'} testid={'guess-c-note'}></FunctionButton>
      <FunctionButton callback={props.checkNote} value={'d'} label={'d'} testid={'guess-d-note'}></FunctionButton>
      <FunctionButton callback={props.checkNote} value={'e'} label={'e'} testid={'guess-e-note'}></FunctionButton>
      <FunctionButton callback={props.checkNote} value={'f'} label={'f'} testid={'guess-f-note'}></FunctionButton>
      <FunctionButton callback={props.checkNote} value={'g'} label={'g'} testid={'guess-g-note'}></FunctionButton>
    </div>
  )

}

export default NoteNameButtons;