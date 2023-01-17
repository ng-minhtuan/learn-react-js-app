import { useEffect, useState } from "react"

export default function UseEffectWithTimerFunc () {

  const [countDown, setCountDown] = useState(180);

  useEffect(()=>{
    var timerCountDown = setInterval(()=>{
        setCountDown(prev => prev === 0 ? 180 : prev- 1)
    }, 1000)

    // Clean timmer function
    return () => clearInterval(timerCountDown);
    
  }, [] )
  return (
    <div>
      <h4>{countDown}</h4>
    </div>
  )  

}