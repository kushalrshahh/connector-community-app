import React from "react"

import "../../styles/components/forms/sectionheader.scss"

//Components
import { Link } from "gatsby"

export default (props) => {
  return (
    <>
      <div className='sectionheader'>
        <h3>{props.text}</h3>
      </div>
      
    </>
  )
}