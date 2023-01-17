import { useEffect, useState } from "react";

export default function CallAPI (){
  const [aryPosts, setAryPosts] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
      setAryPosts(posts)
    })
  }, [])
  
  return (
    <ul>
      {aryPosts.map(post=>(<li key={post.id}>{post.title}</li>))}
    </ul>
  )
}