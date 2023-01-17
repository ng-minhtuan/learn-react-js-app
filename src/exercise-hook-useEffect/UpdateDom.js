import React, { useState, useEffect } from "react"

const styleInput = {
  width: '94.6%',
  margin:'16px 3.7%',
  borderRadius: '4px',
  height: '32px',
  padding: '0 12px'
}

export default function UpdateDOM (){

  const [title, setTitle] = useState('');

  useEffect(() => {
    document.getElementById('dom-update').innerHTML = title
  });
  return (
    <React.Fragment>
      <input
        value={title}
        style={styleInput}
        onChange={(e)=> setTitle(e.target.value)}
      />
    </React.Fragment>
  )
}