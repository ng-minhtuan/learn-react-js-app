//  Props
// - React elements
//     - Sử dụng props giống như với attr của thẻ HTML
//     - 2 props class, for => class Name, htmlFor
//     - Phải tuân theo quy ước có sẵn
// - React components
//     - Sử dụng props giống như đối số cho Component
//     - Tự do đặt tên props
//         - Đặt theo Camel case
//         - * Có thể bao gồm dáu gạch ngang
// - Chú ý:
//     - Prop "key" là prop đặc biệt
//     - Props cơ bản là đối số của Component
//         => Props có thể là bất cứ kiểu dữ liệu gì
//     - Sử dụng destructuring
//     - Transformer

import { DataObj } from './Api.js';
import CourseItem from './CourseItem';
import './App.css';

export default function ExerciseProps () {
  return (
    <div className="props-content">
      {
        DataObj.data.map( course =>
          (
            <CourseItem
              key={course.id}
              title={course.title}
              description={course.description}
              imageUrl={course.image_url}
              price={course.price}
              studentsCount={course.students_count}
            />
          )

        )
      }
    </div>
  )
}