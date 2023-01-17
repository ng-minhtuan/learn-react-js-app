import React, { useState, useEffect, useLayoutEffect } from "react"

export default function Content () {
  const [number, setNumber]= useState( 0 );


  /**
   * Khi dùng useEffect thì khi number = 5,
   *  sau khi + 1 = 6 thì callback của useEffect sẽ bị gọi sau khi number re-render = 6 sau đó mới gọi call back set lại Number về 0 và re-render về 0
   */

  // useEffect(()=>{
  //   setNumber(number > 5 ?  0 : number)
  // }, [number])

  /**
   * Vì vậy để nó re-render khi number = 0 khi number = 6, 
   * call back sẽ được gọi trước khi re-render 6 ra màn hình và 
   * lúc đó number= 6 > 5 nển sẽ format number về 0,
   *  thay vì re-render ra 6 sẽ re-render ra 0
   * thì sẽ sử dụng useLayoutEffect
   */
  useLayoutEffect(()=>{
    setNumber(number > 5 ?  0 : number)
  }, [number])

  const handleIncrease = () => {
    setNumber(prev=> prev + 1);
  }
  return (
    <React.Fragment>
      <div>
        <h4>{number}</h4>
      </div>
      <button
        onClick={handleIncrease}
      >Increase</button>

    </React.Fragment>
  )
}