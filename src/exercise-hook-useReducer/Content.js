import { useReducer } from "react";

/**
 * UseState:
 *  1. Init state: 0
 *  2. Actions: Up (state + 1) / Down (state - 1)
 * -------------------------------------------------
 * useReducer:
 *  1.Init state: 0
 *  2. Actions: Up (state + 1) / Down (state - 1)
 *  3. Reducer
 *  4. Dispatch
 */
const styleDiv = {
  margin: '0 2%',
  marginTop: '8px',
  marginBottom: '16px',
  border: '1px solid #c4c4c4',
  paddingBottom: '8px',
  paddingTop : 8,
  borderRadius: '4px',
  width: '90%',
  minHeight: '100px',
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
  fontWeight: "600",
  height: '40px',
  width: '200px',
  margin: '0 2%',
  backgroundColor: "#fff",
  borderRadius: "4px",
  cursor: "pointer",
  display: 'flex',
  alignItems: 'center',
  placeContent: 'center',
  padding: "8px",
  border: "1px solid #fb7800"
}

// Init state của useReducer
const initState = 0;

// Action của useReducer
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

/**
 * Reducer của useReducer
 * @param state
 * @param action
 * @return new State
 */

const reducerCount = (state, action )=> {
  console.log('reducer running');
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error('Invalid Action !');
  }
}

export default function ContentExercise1() {

  const [count, dispatchCount] = useReducer(reducerCount, initState);

  return (
    <div style={styleDiv}>
      <h3 style={{margin: 0, padding: 0}}>Count : {count}</h3>
      <div style={{...styleDiv, border:0, flexDirection: 'row', justifyContent:'center', width: '50%', padding: 0, margin: 0, minHeight: 0}}>
        <button
          style={styleButton}
          onClick={()=> dispatchCount(UP_ACTION)}
        >
          Up
        </button>
        <button
          style={styleButton}
          onClick={()=> dispatchCount(DOWN_ACTION)}
        >
          Down
        </button>
      </div>
    </div>
  )
}