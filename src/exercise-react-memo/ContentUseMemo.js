import React from "react";

export default React.memo( function ContentUseMemo ({number}) {
    console.log('Re-render khi click increase 1');
    return (
        <React.Fragment>
            <hr/>
            <b>Đây là số nằm trong props của ContentUseMemo : {number}</b>
            <p>Khi Click Increase 1: number1 chuyền vào props của ContentUseMemo bị thay đổi nên re-render lại component (kiểm tra console.log)</p>
            <p>Khi Click Increase 2: number2 không chuyền vào props của ContentUseMemo nên không phải là number1 nên không thay đổi nên sẽ không bị re-render lại component (kiểm tra console.log)</p> 
        </React.Fragment>
    )
})