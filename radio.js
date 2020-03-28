import React from 'react'

//Stylesheets


export default (props) => {
    return (
        <div>
            <input type='radio' name={props.name} placeholder={props.placeholder} id={props.id}/>
            <label>
                {props.label}
            </label>
        </div>
    )
  }