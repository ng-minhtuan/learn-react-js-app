import React, { useState } from "react";
import CountTimer from "./CountTimer";

const styleDiv = {
  margin: '0 2%',
  marginBottom: '16px',
  border: '1px solid #c4c4c4',
  paddingBottom: '16px',
  borderRadius: '4px',
  width: '96%',
  minHeight:'100px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center',
  flexWrap: 'nowrap',
}

const styleButton = {
  fontSize: '16px',
  color: '#fb7800',
  fontWeight:"600",
  height: '40px',
  width: '50%',
  margin: '0 2%',
  marginTop: '16px',
  backgroundColor:"#fff",
  borderRadius:"4px",
  cursor:"pointer",
  display:'flex',
  alignItems: 'center',
  placeContent: 'center',
  padding:"8px",
  border:"1px solid #fb7800"
}

export default function ExerciseUseRef (){
  const [mounted, setMounted] = useState(false)
  return (
    <React.Fragment>
      <div style={styleDiv}>
        <h2> UseRef </h2>
        <button
        style={styleButton}
          onClick={()=>setMounted(!mounted)}
        >
          Show Content Exercise
        </button>
          <div
          style={
            {
              display: 'flex',
            }
          }
        >
        </div>
        {mounted && <CountTimer/>}
      </div>      
    </React.Fragment>
  )
}