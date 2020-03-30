import React from "react"


import "../../styles/components/forms/sectionheader.scss"

export default (props) => {
  return (
    <>
      <div className='sectionheader'>
        <h3>{props.text}</h3>
      </div>
      
    </>
  )
}