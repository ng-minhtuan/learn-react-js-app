import React, { useState } from "react";
import Content from "./Content";

/**
 * Sự khác nhau của UseEffect và useLayoutEffect
 *    ## useEffect
 *        1. Cập nhật lại state
 *        2. Cập nhật lại DOM (mutated)
 *        3. Render lại UI
 *        4. Gọi cleanup nếu deps thay đổi
 *        5. Gọi useEffect call back
 * 
 *    ## useLayoutEffect
 *        1. Cập nhật lại state
 *        2. Cập nhật lại DOM (mutated)
 *        3. Gọi cleanup nếu Deps thay đổi (sync)
 *        4. Gọi useLayoutEffect call back (sync)
 *        5. Render lại UI
 */

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

export default function ExerciseUseLayoutEffect (){
  const [mounted, setMounted] = useState(false)
  return (
    <React.Fragment>
      <div style={styleDiv}>
        <h2> UseLayoutEffect </h2>
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
        {mounted && <Content/>}
      </div>      
    </React.Fragment>
  )
}