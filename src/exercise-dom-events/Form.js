import React from "react"

export const Form = {
  Email : function () {
    return (
      <React.Fragment>
        <label
          htmlFor="email"
          style={
            {
              fontSize:"16px",
              fontWeight:"600",
              margin:"0 20px"
            }
          }
        >
          Email : 
        </label>
        <input
          style={
            {
              height:"30px",
              width:"89.5%",
              marginBottom:"20px",
              paddingLeft:"16px"
            }
          }
          type="email"
          name="email"
          placeholder="Nhập Email vào đây ..."
          id="email"
        />
      </React.Fragment>
    )
  },
  Checkbox: function () {
    return (
      <React.Fragment>
        <label 
          forHtml="checkbox"
        >
          CheckBox : 
        </label>
        <input 
          type="checkbox"
          id="checkbox"
        />
      </React.Fragment>
    )
  }
}