import React from "react"

export default (props) => {
    return (
        <>
            <input type="text" placeholder={props.placeholderText}>{props.stringValue}</input>
        </>
    )
}