import React from "react";
import ContentUseMemo from "./ContentUseMemo";

export default function Content ({number}) {
  const [number1, setNumber1] = React.useState(0);
  const [number2, setNumber2] = React.useState(0);

  const handleIncrease1= ()=> {
    setNumber1(pre => pre + 1);
  }
  const handleIncrease2= () => {
    setNumber2(pre=> pre + 1);
  }
  return (
    <div>
      <h5>Đây là number 1 : {number1}</h5>
      <h5>Đây là number 2 : {number2}</h5>
      <button onClick= {handleIncrease1}>Increase 1</button>
      <button onClick= {handleIncrease2}>Increase 2</button>
      <ContentUseMemo number={number1}/>
    </div>
  )
}