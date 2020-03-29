import React from 'react'

//Stylesheets


export default (props) => {
    return (
      <>
      <label htmlFor={props.name}>
          {props.label}</label>
        <input type={props.type} 
               name={props.name} 
               placeholder={props.placeholder} 
               maxLength={props.maxlength} 
               minLength={props.minLength} 
               
               />
      </>
    )
  }