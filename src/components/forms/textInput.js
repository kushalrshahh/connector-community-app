import React from 'react'

//Stylesheets


export default (props) => {
    return (
      <label>
          {props.label}
        <input type="text" name={props.name} placeholder={props.placeholder}/>
      </label>
    )
  }