import React, { useEffect, useState } from "react";

const styleButtonTab = {
  height: 30,
  width: '20%',
  borderRadius: '4px 4px 0 0',
  marginRight: 8,
  borderBottom: 0
}

const styleButtonGoToTOp = {
  borderRadius: 4,
  position: 'sticky',
  bottom: 20,
  zIndex: 100,
  left: 'calc(100% - 100px)',
  transition: 'all 0.9s'
}

export default function UseEffectDOMEvents () {
 // Type Select
  const [tabTitle, setTabTitle] = useState('Posts');

 // Tabs
  const tabs = ['Posts','Comments', 'Albums'];
  
  //----------------------- Dom Event listener -------------------------------
  const [goToTop, setGoToTop] = useState(false);
  //----------------------- Dom Event listener -------------------------------

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

  //----------------------- Dom Event listener -------------------------------
  useEffect(()=>{
    const tabContent = document.getElementById('tab-contents1');
    

    const handleScroll = () => {
      setGoToTop(tabContent.scrollTop >= 600);
    }
    
    
    tabContent.addEventListener('scroll', handleScroll)

    // Cleanup Fucntion
    return (()=>tabContent.removeEventListener('scroll', handleScroll))
  }, [])
  //----------------------- Dom Event listener -------------------------------

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
          margin: '0 4%',
          position: 'relative'
        }}
        id="tab-contents1"
      >
        <ul>
          {
            arrAPI.map((api) => (
              <li key={api.id}>{tabTitle === 'Comments' ? api.body :api.title}</li>
            ))
          }
        </ul>
        {/* //----------------------- Dom Event listener ------------------------------- */}
        {
          goToTop && 
          <button 
            style={styleButtonGoToTOp}
            onClick={(e)=> {
              const tabContent = document.getElementById('tab-contents1');
              tabContent.scrollTo(0, 0);
            }}
          >
            Go To Top
          </button>
        }
        {/* //----------------------- Dom Event listener ------------------------------- */}
      </div>
    </React.Fragment>
  )
}