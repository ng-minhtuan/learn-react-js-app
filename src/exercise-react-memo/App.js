/**
 *  1. Memmo() -> Higher Order Component (HOC)
 *    - Giúp ghi nhớ lại các props của 1 component để quyết định lại có re-render lại component 
 *        ( Tránh bị re-render trong tình huống không cần thiết)
 *    -Khi set state lại component cha và có sử dụng nhiều component con hay không , nó nhiều và độ phức tạp về UI lớn thì các component con nên sử dụng memo
 *  2. useCallBack()
 */

import React from "react";

export default function ExerciseReactMemoHOC() {
  return (
    <div>
      abc
    </div>
  )
}