import React from "react"

//Stylesheets
import "../../styles/components/pages/page-heading.scss"

export default (props) => (
  <div className="primary-heading">
    <h1>{props.text}</h1>
  </div>
)