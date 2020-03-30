import React from "react"

//Components
import Icon from "./icon"

export default ({children, featureText, paraText}) => {
  let iconStyle = {
    width: "86px",
    height: "79px",
  },
  strongStyle = {
    display: "block",
    fontSize: "1.4em",
    padding: "20px 0"
  }
  return (
    <figure className="icon-above-text">
      <Icon sizeStyle={iconStyle}>{children}</Icon>
      <strong style={strongStyle}>{featureText}</strong>
      <figcaption>{paraText}</figcaption>
    </figure>
  )
}