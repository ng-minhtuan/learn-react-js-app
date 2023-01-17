import React, { useRef, useState, useEffect } from "react";

export default function CountTimer (){
  const [timer, setTimer] = useState(60);

  /** 
  * UseRef là 1 hàm, nhận đối số gọi là initialvalue
  * - Chỉ sử dụng giá trị khởi tạo trong lần đầu tiên component được mounted
  *     và khi component re-render sẽ không sử dụng cái giá trị khởi tạo nữa
  * - Luôn trả về 1 Obj có properties là current
  * - Dùng để getElement
  */

  const timerId = useRef();

  const prevTimer = useRef();

  useEffect(()=>{
    prevTimer.current = timer;
  }, [timer])

  const handleStart= ()=>{
    timerId.current = setInterval(()=>{
      setTimer((prev)=> prev -1);
    }, 1000)
  }

  const handleStop = () => {
    clearInterval(timerId.current)
    
  }

  console.log('now:', timer, 'prev:', prevTimer.current);
  return (
    <React.Fragment>
      <div
        style={
          {
            display:'flex',
            width: '100%',
            height: '60px',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            marginTop: '16px'
          }
        }
      >
        <div
          style={{
            width: '80px',
            height: '100%',
            borderRadius: '4px',
            border: '1px solid #c4c4c4',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            marginRight: '16px',
          }}
        >
          <h4 style={{color: 'red'}}>{timer}</h4>
        </div>
        <div>
          <button
            onClick={handleStart}
          >
            Start
          </button>
          <button
            onClick={handleStop}
          >
            Stop
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}