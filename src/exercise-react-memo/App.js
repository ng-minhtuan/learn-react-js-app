/**
 *  1. Memmo() -> Higher Order Component (HOC)
 *    - Giúp ghi nhớ lại các props của 1 component để quyết định lại có re-render lại component 
 *        ( Tránh bị re-render trong tình huống không cần thiết)
 *    -Khi set state lại component cha và có sử dụng nhiều component con hay không , nó nhiều và độ phức tạp về UI lớn thì các component con nên sử dụng memo
 *  2. useCallBack()
 */

import React from "react";
import Content from "./Content";

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

export default function ExerciseReactMemoHOC (){
  const [mounted, setMounted] = React.useState(false)
  return (
    <React.Fragment>
      <div style={styleDiv}>
        <h2> React Memo </h2>
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
        {
          mounted && <Content/>
        }
      </div>      
    </React.Fragment>
  )
}