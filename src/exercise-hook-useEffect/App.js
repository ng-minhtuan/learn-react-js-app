// Tài liệu liên quan : 
//   -Events : Add/ Remove event listener
//   -Observer pattern : Subscribe/ unSubscribe
//   -Closure
//   -Timers : SetInterval, setTimeout, clearInterval, clearTimeout
//   -UseState
//   -Mounted / Unmounted
//   -Toán tử ===
//   -Call API

import React, { useEffect, useState } from "react";
import UpdateDOM from "./UpdateDom";
import CallAPI from "./CallAPI";
import UseEffectWithDependencies from "./UseEffectWithDependencies";
import UseEffectDOMEvents from "./DOMEvents";
import UseEffectWithTimerFunc from "./UseEffectWithTimerFunction";
import UseEffectWithPreviewImage from "./UseEffectWithPreviewImage";
import UseEffectWithFakeChatApp from "./UseEffectWithFakeChatApp";


// Side Effects : là thuật ngữ sử dụng chung trong lập trình, đang nói đến 1 chương trịnh phần mềm khi có 1 tác động xảy ra khiến dữ liệu của phần mềm bị thay đổi
/**
 * 1.Update DOM
 * 2. Call API
 * 3. Listen DOM events
 *    - Scroll
 *    - Resize
 * 4. Cleanup
 *    - Remove listener / Unsubscribe
 *    - Clear timer
 */

  // 1. useEffect(callBack)
  //    - Gọi call back mỗi khi component re-render
  //    - Gọi callback sau khi compoent thêm El vào DOM
  // 2. useEffect(callBack, [])
  //    - Chỉ gọi callBack 1 lần sau khi component monted
  //    - Khi mong muốn sử dụng 1 lần sau khi component được mounted và không gọi lại khi component re-render
  // 3. useEffect(callBack, [deps])
  //    - Gọi call back mỗi khi deps thay đổi
  // ---------------------------------------------------------
  // Note: Call back luôn được gọi sau khi component mounted
  // Note: CleanUp Function luôn được gọi trước khi component unmounted
  // Note: Cleanup function luôn được gọi trước khi call back được gọi (trừ lần mounted)
  // ---------------------------------------------------------



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

export default function ExerciseUseEffectHook (){
  const [mounted, setMounted] = useState(false)
  const [mountedCallAPI, setMountedCallAPI] = useState(false)
  const [mountedUseEffectWithDeps, setMountedUseEffectWithDeps] = useState(false)
  const [mountedDOMEvents, setMountedDOMEvents] = useState(false)
  const [mountedTimerFunction, setMountedTimerFunction] = useState(false)
  const [mountedPreviewImage, setMountedPreviewImage] = useState(false)
  const [mountedFakeChatApp, setMountedFakeChatApp] = useState(false)

  return (
    <React.Fragment>
      <div style={styleDiv}>
        <h2> Update DOM with UseEffect </h2>
        <button
        style={styleButton}
          onClick={()=>setMounted(!mounted)}
        >
          Show Content Exercise : Update DOM with UseEffect
        </button>
          <div
          style={
            {
              display: 'flex',
            }
          }
        >
          <h5 style={{padding: 0, paddingRight: "20px", margin: 0, marginTop: '16px'}}>DOM Update : </h5>
          <h5
            id="dom-update"
            style={{padding: 0, paddingRight: "20px", margin: 0,marginTop: '16px'}}
          />
        </div>
        {mounted && <UpdateDOM/>}
      </div>
      <div style={styleDiv}>
        <h2> Call API with UseEffect</h2>
        <button
          style={styleButton}
          onClick={()=>setMountedCallAPI(!mountedCallAPI)}
        >
          Show Content Exercise : CallAPI
        </button>
        {mountedCallAPI && <CallAPI/>}
      </div>
      <div style={styleDiv}>
        <h2> UseEffect With Dependencies </h2>
        <button
          style={styleButton}
          onClick={()=>setMountedUseEffectWithDeps(!mountedUseEffectWithDeps)}
        >
          Show Content Exercise : UseEffect With Dependencies
        </button>
        {mountedUseEffectWithDeps && <UseEffectWithDependencies/>}
      </div>
      <div style={styleDiv}>
        <h2> UseEffect with DOM Events </h2>
        <button
          style={styleButton}
          onClick={()=>setMountedDOMEvents(!mountedDOMEvents)}
        >
          Show Content Exercise : UseEffect With DOM Events
        </button>
        {mountedDOMEvents && <UseEffectDOMEvents/>}
      </div>
      <div style={styleDiv}>
        <h2> UseEffect with Timer Function </h2>
        <button
          style={styleButton}
          onClick={()=>setMountedTimerFunction(!mountedTimerFunction)}
        >
          Show Content Exercise : UseEffect With Timer Function 
        </button>
        {mountedTimerFunction && <UseEffectWithTimerFunc/>}
      </div>
      <div style={styleDiv}>
        <h2> UseEffect with Preview Image </h2>
        <button
          style={styleButton}
          onClick={()=>setMountedPreviewImage(!mountedPreviewImage)}
        >
          Show Content Exercise : UseEffect With Preview Image
        </button>
        {mountedPreviewImage && <UseEffectWithPreviewImage/>}
      </div>
      <div style={styleDiv}>
        <h2> UseEffect With Fake Chat App </h2>
        <button
          style={styleButton}
          onClick={()=>setMountedFakeChatApp(!mountedFakeChatApp)}
        >
          Show Content Exercise : UseEffect With Fake Chat App
        </button>
        {mountedFakeChatApp && <UseEffectWithFakeChatApp/>}
      </div>
    </React.Fragment>
  )
}

