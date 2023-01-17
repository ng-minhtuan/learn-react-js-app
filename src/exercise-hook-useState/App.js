/**
## Dùng khi nào ?
- Khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật (render lại theo dữ liệu)

## Cách dùng

--- JSX --
import {useState} from 'react'
function Component (){
  const [state, setState] = useState(initState)
  ....
}

### Lưu ý :
  - Component được re-render sau khi `setState`
  - Initial state chỉ dùng cho lần đầu
  - Set state với call back?
  - Initial state với call back?
  - Set state là thay thế state bằng giá trị mới
 */

import { useState } from "react";


const styleButton={
  fontSize: '16px',
  color: '#fb7800',
  fontWeight:"600",
  height: '40px',
  width: '88%',
  margin: '0 6%',
  backgroundColor:"#fff",
  borderRadius:"4px",
  cursor:"pointer",
  display:'flex',
  alignItems: 'center',
  placeContent: 'center',
  padding:"8px",
  border:"1px solid #fb7800"
}

const arrayNumber = [100,200,300];

export default function HookUseState ()
{
  // const totalNumber = arrayNumber.reduce((total, current)=> total + current);
  // console.log(totalNumber) // log: 600
  // const [counter, setCounter] = useState(totalNumber);

  // Trường hợp này sẽ bị re-render lại rất nhiều lần

  const [counter, setCounter] = useState(() => {
    const totalNumber = arrayNumber.reduce((total, current)=> total + current);
    return totalNumber;
  });

  const handleIncrease = () =>{
    setCounter(prevState => prevState + 10);
  }

  return (
    <div 
      className="hook-use-state" 
      style={{ textAlign: 'center'}}
    >
      <h1>{counter}</h1>
      <button 
        onClick={handleIncrease}
        style={styleButton}
      >
        Increase
      </button>
    </div>
  )
}