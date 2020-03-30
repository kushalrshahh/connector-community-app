import React from 'react'

//Stylesheets
import "../../styles/components/forms/input.scss"

export default (props) => {
    return (
      <>
      <label htmlFor={props.name}>
          {props.label}</label>
        <input className='input' type={props.type} 
               name={props.name} 
               placeholder={props.placeholder} 
               maxLength={props.maxlength} 
               minLength={props.minLength} 
               
               />
      </>
    )
  }