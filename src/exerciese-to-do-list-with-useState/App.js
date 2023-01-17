import React, { useState } from "react";

const styleDiv = {
  margin: '0 2%',
  marginBottom: '16px',
  border: '1px solid #c4c4c4',
  borderRadius: '4px',
  width: '96%',
  minHeight:'100px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center',
  flexWrap: 'nowrap',
}

const styleInput = {
  width: '94.6%',
  margin:'16px 3.7%',
  borderRadius: '4px',
  height: '32px',
  padding: '0 12px'
}

const styleButton = {
  fontSize: '16px',
  color: '#fb7800',
  fontWeight:"600",
  height: '40px',
  width: '50%',
  margin: '0 2%',
  backgroundColor:"#fff",
  borderRadius:"4px",
  cursor:"pointer",
  display:'flex',
  alignItems: 'center',
  placeContent: 'center',
  padding:"8px",
  border:"1px solid #fb7800"
}

const styleTasklist = {
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  alignItems: 'center',
  flexWrap: 'nowrap',
  width: '100%',
  paddingLeft: '16px',
}
const getStorage = (key)=>{
  const jsonData = localStorage.getItem(key);
  return JSON.parse(jsonData);
}

const setStorage = (key, value) =>{
  const jsonInsert = JSON.stringify(value);
  localStorage.setItem(key, jsonInsert);
}

export default function ExerciseTodoListWithUseState () {

  //List Tasks
  const [arrTasks, setArrTask] = useState(getStorage('to-do-list') ?? []);

  //Task
  const [task, setTask] = useState('');

  // List Tasks remove
  const [taskRemove, setTaskRemove]= useState([]);

  // Check Box
  const handleCheckBox = (task) => {
    setTaskRemove((prev) => {
      let isChecked = taskRemove.includes(task);
      if(isChecked){
        return taskRemove.filter((taskContent)=>taskContent !== task)
      }else{
        return [...prev, task]
      }
    })
  }

  const handleAddTask = () => {
    if(task !== ''){
      if( !arrTasks.includes(task)){

        setArrTask((prev)=>{ 
          const newArrTasks = [...prev,task] 
          setStorage('to-do-list', newArrTasks)
          return newArrTasks
        })
        setTask('')
      }else{
        alert('Task của bạn đã tồn tại!.')
      }
    }else{
      alert('Vui lòng nhập công việc cần làm của bạn !...')
    }
  }

  const handleRemoveTask = () => {
    setArrTask((newArr) =>{
      newArr = arrTasks.filter(i => !taskRemove.includes(i))
      setStorage('to-do-list', newArr)
      return newArr
    })
    setTaskRemove([]);
  }

  return (
    <div
      style={styleDiv}
    >
      <div style={{...styleDiv, marginTop: '16px', overflowX:'hidden', height:'120px', overflowY:'auto'}}>
        {
          (arrTasks.length > 0) ?
          arrTasks.map((task, index)=>{
            return (
              <div style={styleTasklist} key={index}>
                <input
                  type="checkbox"
                  checked={taskRemove.includes(task)}
                  onChange={() => handleCheckBox(task)}
                />
                <b 
                
                style={
                  {textAlign:'left', width: '90%'}
                }>
                  {task}
                </b>
              </div>
            )
          }) : ''
        }
      </div>

      <input
        type="text"
        placeholder="Task...."
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        style={styleInput}
      />

      <div style={{...styleDiv, border: '', flexDirection: 'row', height:'fit-content', minHeight: ''}}>
        <button
          style={styleButton}
          onClick={() => handleAddTask()}
        >
          Add Task
        </button>
        <button
          style={{...styleButton, border:'1px solid green', color: 'green'}}
          onClick={()=>handleRemoveTask()}
        >
          Remove Task
        </button>   
      </div>
    </div>
  )
}