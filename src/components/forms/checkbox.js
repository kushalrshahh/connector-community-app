import React from 'react'

//Stylesheets


export default (props) => {
    return (
        <div>
            <input type='checkbox' name={props.name} id={props.id} placeholder={props.placeholder}/>
            <label>
                {props.label}
            </label>
        </div>
    )
  }