import React from "react"

//Stylesheets
import "../../styles/components/shared/section-heading.scss"

export default (props) => (
  <div className="section-heading">
    <h2>{props.text}</h2>
  </div>
)