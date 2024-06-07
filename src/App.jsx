import { useState } from "react";
import "./App.css";
import ButtonsContainer from "./Component/ButtonsContainer";
import Display from "./Component/Display";
import Zoom from 'react-reveal/Zoom';
function App() {
  const buttons = ["c","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0",".",];
  let [valueInput,setValueInput]=useState("")
  function handleClick(event) {
    if(event.target.textContent==="="){
      let presentValue=eval(valueInput)
      setValueInput(presentValue)  
    }else if(event.target.textContent=="c"){
      setValueInput("")
    }else{
      let presentValue =valueInput+event.target.textContent
      setValueInput(presentValue)
    }
  }
  return (
    <>
    <Zoom>
      <div className="calculator">
        <Display valueInput={valueInput} />
        <ButtonsContainer handleClick={handleClick} buttons={buttons}></ButtonsContainer>
      </div>
    </Zoom>
    </>
  );
}
export default App;