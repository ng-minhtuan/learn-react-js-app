export default function CourseItem (props)
{
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <img src={props.imageUrl}/>
      <div className="card-content">
        <p>{props.description}</p>
      </div>
      <div className="description">
        <h6>{props.price}</h6>
        <h6>{props.studentsCount}</h6>
      </div>
    </div>
  )
}