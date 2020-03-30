import React from 'react'

//Stylesheets
import "../../styles/components/forms/checkbox.scss"

export default (props) => {
    return (
        <div className='checkbox'>
            <input type='checkbox' name={props.name} id={props.id} placeholder={props.placeholder}/>
            <label>
                {props.label}
            </label>
        </div>
    )
  }