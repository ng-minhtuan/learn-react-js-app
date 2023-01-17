import React, { useState } from "react";

const styleInput = {
  height: '30px',
  borderRadius: '4px',
  marginLeft: 20,
  width:'92%',
  marginBottom: '20px',
  paddingLeft: 10
}
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

//Response from API
const aryCourses = [
  {
    id: 1,
    nameCourse: 'HTML, CSS'
  },
  {
    id: 2,
    nameCourse: 'Javascript'
  },
  {
    id: 3,
    nameCourse: "ReactJS"
  }
]

const aryCheckBox = [
  {
    id:10,
    name:'Checkbox1'
  },
  {
    id:11,
    name:'Checkbox2'
  },
  {
    id:13,
    name:'Checkbox3'
  },
]

export default function ExerciseTwoWayBinding()
{

  // Input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmitForm = () => {
    // Call API
    console.log({id:checked, name: name, email: email, idCheckBox: checkedBox});
  }

  // Radio
  const [checked, setChecked] = useState(1);

  // CheckBox
  const [checkedBox, setCheckedBox] = useState([]);
  const handleCheckBox = (id) => {
    setCheckedBox(prev => {
      const isCheckedBox = checkedBox.includes(id)
      if(!isCheckedBox){
        // Checked
        return [...prev, id];
      }else{
        // unChecked
        return checkedBox.filter(item => item !== id);
      }
    });
  }


  return (
    <div
      style={{padding:'0 5%'}}
    >
      {/* Input */}
      <label 
        htmlFor="name"
        style={{
          fontWeight:'600',
        }}
      >
        Họ và Tên :
      </label>
      <input
        id="name"
        style={styleInput}
        value={name}
        onChange={e=>setName(e.target.value)}
      />

      <label 
        htmlFor="email"
        style={{
          fontWeight:'600',
        }}
      >
        Email :
      </label>
      <input
        id="email"
        type={email}
        style={{...styleInput, marginLeft:'2.75%'}}
        value={email}
        onChange={e=>setEmail(e.target.value)}
      />

      {/* Radio */}
      {
        aryCourses.map((course) => {
          
          return (
            <div key={course.id} style={{width: '30%', display:'flex', float:'left'}}>
              <input 
                type='radio'
                checked={checked === course.id}
                onChange={(prev)=> prev = setChecked(course.id)}
                style={{
                  marginRight:'5%'
                }}
              />
              <p
                style={
                  {
                    fontWeight:600,
                  }
                }
              >
                {course.nameCourse}
              </p>
            </div>
          )
        })
      }

      {/* CheckBox */}
      {
        aryCheckBox.map(
          (checkContent) => {
            return (
              <div key={checkContent.id} style={{width: '30%', display:'flex', float:'left'}}>
              <input 
                type='checkbox'
                checked={checkedBox.includes(checkContent.id)}
                onChange={() => handleCheckBox(checkContent.id)}
                style={{
                  marginRight:'5%'
                }}
              />
              <p
                style={
                  {
                    fontWeight:600,
                  }
                }
              >
                {checkContent.name}
              </p>
            </div>
            )
          }
        )
      }
      <button
        style={styleButton}
        onClick={handleSubmitForm}
      >
        Đăng ký
      </button>

    </div>
  )
}