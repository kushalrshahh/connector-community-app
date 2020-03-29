import React from "react"

//Components
import { Link } from "gatsby"

export default (props) => {
    return (
        <>
            <input type="text" placeholder={props.placeholderText}>{props.stringValue}</input>
        </>
    )
}