/**
 * Làm việc với JSX
 *  Phần I.
 *    -Xử lý DOM events
 *    - Component do chúng ta định nghĩa phải viết in hoa kí tự đầu
 *      - Chọn component trong 1 Object
 *    -Booleans, Null & Undifined không được render
 *    - Kết hợp toán tử logic để render theo điều kiện
 *  Phần II.
 *    -Props trong JSX
 *      - <YourComponent
 *          propName1="String literals"
 *          propName2={expression}
 *        />
 *      - Props default to "true"
 *      - Spread/Rest props
 *      - Children prop
 *        - <YourComponent>String literals</YourComponent>
 *        - <YourComponent>{Expression}</YourComponent>
 *      - Render props
 */

import Button from "./ButtonEvents";
import { Form } from "./Form";

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
export default function ExerciseDomEvents (){
  const type = 'Email';
  const ComponentInput = Form[type];
  let styleHover = {
    'e.target.style.backgroundColor' : "rgb(244 169 121)",
    'e.target.style.color':"#000",
  };
  
  return (
    <div>
      <h2
        style={
          {
            marginLeft: '20px'
          }
        }
      >
        * Xử lý với Dom Events
      </h2>
      <button 
        style={styleButton}
        onClick={
          (e) => console.log(e.target)
        }
      >
          Click me!
      </button>

      <h2
        style={
          {
            marginLeft: '20px',
          }
        }
      >
        * Chọn Component trong 1 Object
      </h2>
        <ComponentInput/>

      <h2
        style={
          {
            marginLeft: '20px'
          }
        }
      >
        * Button với nhiều events
      </h2>
      <Button
        title="Click me!"
        style={styleButton}
        href="http://www.google.com/"
        onMouseOver={
          (e)=>{
            e.target.style.backgroundColor = "rgb(244 169 121)"
            e.target.style.color="#000"
          }
        }
        onMouseOut={
          (e)=>{
            e.target.style.backgroundColor = "#fff"
            e.target.style.color='#fb7800'
          }
        }
        onClick={
          ()=>console.log(Math.random())
        }
      />
    </div>
  )
}