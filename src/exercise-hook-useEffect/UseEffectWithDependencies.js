import React, { useEffect, useState } from "react";

const styleButtonTab = {
  height: 30,
  width: '20%',
  borderRadius: '4px 4px 0 0',
  marginRight: 8,
  borderBottom: 0
}

export default function UseEffectWithDependencies (){
  // Type Select
  const [tabTitle, setTabTitle] = useState('Posts');

  // Tabs
  const tabs = ['Posts','Comments', 'Albums'];

  // API
  const [arrAPI, setArrAPI] = useState([]);
  

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/${tabTitle}`;
    fetch(url)
    .then(res => res.json())
    .then(api => {
      setArrAPI(api);
    })
  }, [tabTitle]);

  console.log(arrAPI);
  return(
    <React.Fragment>
      <div
        style={{
          marginTop: 16,
          width: '90%',
          padding: '0 5%'
        }}
      >
      {tabs.map(tab=>(
        <button
          key={tab}
          onClick={() =>setTabTitle(tab)}
          style={tabTitle === tab ? {...styleButtonTab, color: '#fff', backgroundColor: 'rgb(43 43 43)'} : styleButtonTab}
        >
          {tab}
        </button>
      ))}
      </div>
      <div 
        style={{
          minHeight: 100,
          overflowY: 'auto',
          maxHeight: 600,
          width: '92%',
          border: '1px solid #000',
          borderRadius: '4px',
          margin: '0 4%'
        }}
        id="tab-contents"
      >
        <ul>
          {
            arrAPI.map((api) => (
              <li key={api.id}>{tabTitle === 'Comments' ? api.body :api.title}</li>
            ))
          }
        </ul>
      </div>
    </React.Fragment>
  )
}