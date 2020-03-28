import React from "react"

//Components
import { Link } from "gatsby"

export default (props) => {
  return (
    <>
      <Link className="button" to={props.link}>{props.text}</Link>
    </>
  )
}