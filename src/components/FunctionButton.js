function FunctionButton(props){
  return(
    <button onClick={props.callback} value={props.value} data-testid={props.testid}>{props.label}</button>
  )

}

export default FunctionButton;