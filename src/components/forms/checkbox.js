import React from 'react'

//Stylesheets


export default (props) => {
    return (
        <div className="container">
            <input type='checkbox' name={props.name} id={props.id} placeholder={props.placeholder}/>
            <label>
                {props.label}
            </label>
            <span className="checkmark"></span>
        </div>
    )
  }