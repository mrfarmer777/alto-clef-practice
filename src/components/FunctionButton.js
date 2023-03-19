import { Button } from 'grommet'
function FunctionButton(props){
  return(
    <Button primary size='large' label={props.label} onClick={props.callback} value={props.value} data-testid={props.testid}></Button>
  )

}

export default FunctionButton;