import React from "react"

export default ({children, height, width, sizeStyle}) => {
  return (
    <i style={sizeStyle} className="icon" height={height} width={width}>
      {children}
    </i>
  )
}