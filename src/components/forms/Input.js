import React from 'react'

//Stylesheets


export default (props) => {
    return (
      <label>
          {props.label}
        <input type={props.type} name={props.name} placeholder={props.placeholder} maxLength={props.maxlength} minLength={props.minLength} />
      </label>
    )
  }