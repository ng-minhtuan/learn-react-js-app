import React, { useEffect, useState } from "react"

const lessons= [
  {
    id: 1,
    name: 'Đây là Lesson 1'
  },
  {
    id: 2,
    name: 'Đây là Lesson 2 '
  },
  {
    id: 3,
    name: 'Đây là Lesson 3'
  }
]

export default function  UseEffectWithFakeChatApp () {
  const [lessonId, setLessonId] = useState(1);

  const [aryComment, setAryComment] = useState([]);

  useEffect(()=>{
    const handleComment = (e)=> {
      setAryComment(prev => [...prev, e.detail]);
      e.stopPropagation();
    }
    
    window.addEventListener(`lesson-${lessonId}`, handleComment)
    return ()=>{
      window.removeEventListener(`lesson-${lessonId}`, handleComment)
    }
  }, [lessonId])

  return (
    <React.Fragment>
      <div
        style={
          {
            marginTop: 16,
            width: '90%',
            padding: '0 16px',
          }
        }
      >
        {
          lessons.map(lesson => (
            <button 
              key={lesson.id}
              style={
                {
                  marginRight: 8,
                  borderRadius: '4px 4px 0 0',
                  borderBottom: 0,
                  width: '30%',
                  height: 24,
                  color: lessonId === lesson.id ? '#fff' : '#000',
                  backgroundColor : lessonId === lesson.id ? 'rgb(25 25 25)' : '#fff',
                }
              }
              onClick={()=>{
                setLessonId(lesson.id)
                setAryComment(lesson.id !== lessonId && [])
              }}
            >
              {lesson.name}
            </button>
          ))
        }
      </div>
      <div
        style={
          {
            width: 'calc(100% - 32px)',
            minHeight: '100px',
            maxHeight: '300px',
            border: '1px solid #000',
            margin: '0 16px',
            borderRadius: 4,
            overflowY: 'auto',
          }
        }
      >
        <ul>
          {
            aryComment.map((comment, index) => 
              <li key={index}>
                {comment}
              </li>
            )
          }
        </ul>
      </div>
    </React.Fragment>
  )
}