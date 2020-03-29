import React from "react"

export default ({children, height, width}) => {
  return (
    <i className="icon" height={height} width={width}>
      {children}
    </i>
  )
}